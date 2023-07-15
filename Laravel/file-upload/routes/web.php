<?php

use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Facades\Storage;
use setasign\FpdiProtection\FpdiProtection;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::post('/', function () {
    $hasFile = request()->hasFile('file');
    if ($hasFile) {
        $file = request()->file('file');
        $fileName = $file->getClientOriginalName();
        // $ext = $file->getClientOriginalExtension();
        $file->storeAs('public', $fileName);
        $url = asset('storage/' . $fileName);
    }
    return response()->json($url);
});


Route::get('/pdf', function () {
    // Path to the encrypted PDF file
    $pdfPath = 'file.pdf';
    return response()->file($pdfPath);
});
