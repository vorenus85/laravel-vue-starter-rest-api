<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    //
     public function show()
    {
        //
        $user  = $user = Auth::user();

        return response()->json($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
        $user  = $user = Auth::user();

         $request->validate([
            "name" => "string|required",
            "phone" => "nullable|string",
            "email" => "string|required|email|unique:users,email," . $user->id,
        ], [
            'email.unique' => 'This email already exists.'
        ]);

         $user->update($request->all());

        return response()->json($user);
    }

    public function changePassword (Request $request)
    {


        $request->validate([
            "current_password" => ["required", "current_password"],
            "password" => ["required", "string", "min:8", "confirmed"],
        ]);

        $user  = $user = Auth::user();

        $user->update([
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            "message" => "Password changed successfully."
        ], 201);
    }

}
