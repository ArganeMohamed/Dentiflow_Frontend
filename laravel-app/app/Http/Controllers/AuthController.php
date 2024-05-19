<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use App\Models\Medecin;
use App\Models\Assistant;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password', 'role');

        Log::info('Attempting login with credentials: ', $credentials);

        $user = null;

        switch ($credentials['role']) {
            case 'admin':
                $user = Admin::where('email', $credentials['email'])
                            ->where('password', $credentials['password'])
                            ->first();
                break;
            case 'Medecin':
                $user = Medecin::where('nom_Medecin', $credentials['email'])
                              ->where('mot_de_passe', $credentials['password'])
                              ->first();
                break;
            case 'assistant':
                $user = Assistant::where('email_Assistant', $credentials['email'])
                                 ->where('motPasse_Assistant', $credentials['password'])
                                 ->first();
                break;
            default:
                return response()->json(['state' => false, 'message' => 'Invalid role']);
        }

        if ($user) {
            return response()->json(['state' => true, 'role' => $credentials['role']]);
        } else {
            Log::error('Login attempt failed for email: ' . $credentials['email']);
            return response()->json(['state' => false]);
        }
    }
}

