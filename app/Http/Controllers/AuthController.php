<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    
    public function register(Request $request)
    {
        $data = $request->validate([
            'username' => 'required|min:3|max:20|unique:users|regex:/^\S+$/u',
            'email'    => 'required|email|unique:users|regex:/^\S+$/u',
            'password' => 'required|min:6|regex:/^\S+$/u',
        ]);

        // Case-sensitive check
        $usernameLower = strtolower($data["username"]);
        $emailLower = strtolower($data["email"]);

        if(User::whereRaw("LOWER(email) = ?", [$emailLower])->exists()){
            throw ValidationException::withMessages([
                "email" => ["Email has already been taken"]
            ]);
        }

        if(User::whereRaw("LOWER(username) = ?",[$usernameLower])->exists()){
            throw ValidationException::withMessages([
                "username" => ["Username has already been taken."]
            ]);
        }

        $user = User::create([
            'username' => $data["username"],
            'email'    => $emailLower,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user
        ], 201);
    }

    public function login(Request $request){
        // Get user
        $data = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);
        
        $user = User::whereRaw("LOWER(username) = ?", [strtolower($data["username"])])->first();


        // Check credentials
        if(!$user || !Hash::check($data["password"], $user->password)){
            throw ValidationException::withMessages([
                "username" => ["The provided credentials are incorrect."],
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

    public function update(Request $request){
        // Get logged in user
        $user = $request->user();

        // Validate
        $request->validate([
            'username' => [
                'sometimes',
                'min:3',
                'max:20',
                Rule::unique('users')->ignore($user->id),
            ],
            'email' => [
                'sometimes',
                'email',
                Rule::unique('users')->ignore($user->id),
            ],
            'bio' => [
                'sometimes',
                'max:30',
            ],
        ]);

        // If update fields provided
        if($request->has("username")){
            $user->username = $request->username;
        }

        if($request->has("email")){
            $user->email = $request->email;
        }

        if($request->has("bio")){
            $user->bio = $request->bio;
        }

        // Save profile
        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user,
        ]);
    }
}
