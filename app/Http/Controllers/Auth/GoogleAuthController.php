<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Exception;

class GoogleAuthController extends Controller
{
    /**
     * Mengarahkan pengguna ke halaman persetujuan login Google OAuth.
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Menangani callback respon dari Google OAuth setelah otorisasi berhasil.
     */
    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            // Cari user berdasarkan google_id atau email
            $user = User::where('google_id', $googleUser->getId())
                ->orWhere('email', $googleUser->getEmail())
                ->first();

            if ($user) {
                $user->update([
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                    'google_token' => $googleUser->token ?? null,
                    'google_refresh_token' => $googleUser->refreshToken ?? null,
                ]);
            } else {
                $user = User::create([
                    'name' => $googleUser->getName() ?? $googleUser->getNickname() ?? 'Pengguna Google',
                    'email' => $googleUser->getEmail(),
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                    'role' => 'investor',
                    'password' => bcrypt(Str::random(24)),
                    'google_token' => $googleUser->token ?? null,
                    'google_refresh_token' => $googleUser->refreshToken ?? null,
                ]);
            }

            // Login user ke session Laravel
            Auth::login($user, true);

            // Redirect ke halaman depan (index) dengan data user untuk auto-login frontend
            $userName = urlencode($user->name);
            $userEmail = urlencode($user->email);
            $userRole = urlencode($user->role ?? 'investor');
            $userAvatar = urlencode($user->avatar ?? '');

            return redirect("/?auth=success&name={$userName}&email={$userEmail}&role={$userRole}&avatar={$userAvatar}&method=google");

        } catch (Exception $e) {
            return redirect('/?auth=failed&message=' . urlencode('Gagal autentikasi dengan Google: ' . $e->getMessage()));
        }
    }
}
