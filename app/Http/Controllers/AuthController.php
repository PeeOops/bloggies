<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    
    public function register(Request $request)
    {
        // ✅ Laravel will automatically handle 422 errors
        $request->validate([
            'username' => 'required|min:3|max:20|unique:users',
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'username' => $request->username,
            'email'    => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user
        ], 201);
    }

    public function login(Request $request){
        // Get user
        $user = User::where("username", $request->username)->first();

        // Check credentials
        if(!$user || !Hash::check($request->password, $user->password)){
            throw ValidationException::withMessages([
                "username" => "The provided credentials are incorrect.",
            ]);
        }

        // Create token
        $token = $user->createToken("react-app")->plainTextToken;

        return response()->json([
            'token' => $token, 
            'user' => $user
        ]);
    }

    public function logout(Request $request){
        // Delete token
        $request->user()->tokens()->delete();

        return response()->json([
            ["message" => "Logged Out"]
        ]);
    }

     public function me(Request $request) {
        return response()->json($request->user());
    }
}
