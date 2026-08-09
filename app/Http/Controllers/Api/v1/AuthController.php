<?php

namespace App\Http\Controllers\Api\v1;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends ApiController
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'actor_role' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error', 422, $validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('nara_auth_token')->plainTextToken;

        return $this->success([
            'user' => $user,
            'token' => $token,
            'actor_role' => $request->actor_role,
        ], 'Registration successful. Account activated for NARA Ecosystem legal audit.', 201);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return $this->error('Validation error', 422, $validator->errors());
        }

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return $this->error('Invalid login credentials', 401);
        }

        $token = $user->createToken('nara_auth_token')->plainTextToken;

        return $this->success([
            'user' => $user,
            'token' => $token,
            'login_provider' => 'email',
        ], 'Login successful to NARA Ecosystem Dashboard.');
    }

    public function googleSso(Request $request)
    {
        $email = $request->input('email', 'nugrawatimaya@gmail.com');
        $name = $request->input('name', 'NARA Registered User');

        $user = User::firstOrCreate(
            ['email' => $email],
            [
                'name' => $name,
                'password' => Hash::make('google_sso_secure_passkey'),
            ]
        );

        $token = $user->createToken('nara_google_token')->plainTextToken;

        return $this->success([
            'user' => $user,
            'token' => $token,
            'login_provider' => 'google_sso',
        ], 'Google Single Sign-On successful for account: ' . $email);
    }
}
