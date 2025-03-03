<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Sampul;
use Illuminate\Http\Request;

class SampulController extends Controller
{
    public function index(){
        $data = Sampul::all();
        
        return Inertia::render('Invitation/Invitation', 
        ['sampul_data' => $data]
        );
    }
}
