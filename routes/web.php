<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SocialiteController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/auth/redirect', [SocialiteController::class, 'redirectToGoogle'])->name('auth.google');
Route::get('/auth/callback', [SocialiteController::class, 'handleGoogleCallback'])->name('auth.google.callback');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
