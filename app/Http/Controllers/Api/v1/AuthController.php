<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Exception;

class AuthController extends Controller
{
    /**
     * Mendaftar akun baru dengan profil ekosistem NARA yang dipilih.
     * Menyimpan data langsung ke PostgreSQL.
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:30',
            'password' => 'required|string|min:6|confirmed',
            'role' => 'required|string',
            'email' => 'nullable|string|email|max:255',
            'profile_data' => 'nullable|array',
        ], [
            'name.required' => 'Nama lengkap wajib diisi.',
            'phone.required' => 'Nomor HP / WhatsApp wajib diisi.',
            'password.required' => 'Password wajib diisi.',
            'password.min' => 'Password minimal terdiri dari 6 karakter.',
            'password.confirmed' => 'Konfirmasi password tidak cocok dengan password yang dimasukkan.',
            'role.required' => 'Pilihan profil pengguna wajib dipilih.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validasi gagal: ' . $validator->errors()->first(),
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            // Normalisasi nomor HP
            $phone = preg_replace('/[^0-9]/', '', $request->phone);
            if (str_starts_with($phone, '0')) {
                $phone = '62' . substr($phone, 1);
            }

            // Cek apakah nomor HP sudah terdaftar
            $existingUser = User::where('phone', $phone)
                ->orWhere('phone', $request->phone)
                ->first();

            if ($existingUser) {
                return response()->json([
                    'success' => false,
                    'message' => 'Nomor HP ' . $request->phone . ' sudah terdaftar di sistem. Silakan login atau gunakan nomor lain.',
                ], 409);
            }

            // Cek email jika diisi
            $email = $request->email;
            if ($email) {
                $existingEmail = User::where('email', $email)->first();
                if ($existingEmail) {
                    return response()->json([
                        'success' => false,
                        'message' => 'Email ' . $email . ' sudah terdaftar. Silakan login atau gunakan email lain.',
                    ], 409);
                }
            } else {
                $email = $phone . '@nara.id';
            }

            // Simpan data pendaftaran ke PostgreSQL
            $user = User::create([
                'name' => trim($request->name),
                'phone' => $phone,
                'email' => $email,
                'password' => Hash::make($request->password),
                'role' => $request->role,
                'profile_data' => $request->profile_data ?? [],
            ]);

            Auth::login($user, true);

            return response()->json([
                'success' => true,
                'message' => 'Pendaftaran akun ' . $user->name . ' sebagai ' . strtoupper($user->role) . ' berhasil disimpan di database!',
                'data' => [
                    'id' => $user->id,
                    'name' => $user->name,
                    'phone' => $user->phone,
                    'email' => $user->email,
                    'role' => $user->role,
                    'profile_data' => $user->profile_data,
                    'created_at' => $user->created_at,
                ]
            ], 201);

        } catch (Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Terjadi kesalahan sistem saat menyimpan ke database PostgreSQL: ' . $e->getMessage(),
            ], 500);
        }
    }

    /**
     * Login akun dengan Nomor HP / Email dan Password.
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'login' => 'required|string',
            'password' => 'required|string',
        ], [
            'login.required' => 'Nomor HP atau Email wajib diisi.',
            'password.required' => 'Password wajib diisi.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors()->first(),
            ], 422);
        }

        $loginInput = $request->login;
        $cleanPhone = preg_replace('/[^0-9]/', '', $loginInput);
        if (str_starts_with($cleanPhone, '0')) {
            $cleanPhone = '62' . substr($cleanPhone, 1);
        }

        $user = User::where('email', $loginInput)
            ->orWhere('phone', $loginInput)
            ->orWhere('phone', $cleanPhone)
            ->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'success' => false,
                'message' => 'Kombinasi Nomor HP/Email atau Password yang Anda masukkan tidak valid.',
            ], 401);
        }

        Auth::login($user, true);

        return response()->json([
            'success' => true,
            'message' => 'Selamat datang kembali, ' . $user->name . '!',
            'data' => [
                'id' => $user->id,
                'name' => $user->name,
                'phone' => $user->phone,
                'email' => $user->email,
                'role' => $user->role,
                'profile_data' => $user->profile_data,
            ]
        ], 200);
    }
}
