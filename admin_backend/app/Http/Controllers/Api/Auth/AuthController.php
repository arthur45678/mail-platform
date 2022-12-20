<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'email' => 'required|email|max:191',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        }
        else{
            $user = User::where('email',$request->email)->first();

            if(!$user || ! Hash::check($request->password, $user->password)){
                return response()->json([
                    'status' => 401,
                    'message' => 'Invalid Credentials!'
                ]);

            }
            else{
                $token = $user->createToken($user->email.'_Token')->plainTextToken;

                return response()->json([
                    'status' => 200,
                    'username' => $user->first_name,
                    'token' => $token,
                    'message' => 'Logged is successfully'
                ]);

            }
        }
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'first_name' => 'required|max:191',
            'last_name' => 'required|max:191',
            'email' => 'required|email|max:191|unique:users,email',
            'password' => 'required',
        ]);


        if($validator->fails()){
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        }
        else{
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $token = $user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status' => 200,
                'first_name' => $user->first_name,
                'last_name' => $user->last_name,
                'token' => $token,
                'message' => 'Registered successfully'
            ]);

        }
    }

}
