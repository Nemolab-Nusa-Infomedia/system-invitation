<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/blog', function () {
    return Inertia::render('Blog');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/invitation/edit', function () {
    return Inertia::render('Invitation/Invitation');
});

Route::get('/dashboard/wedding/edit/content', function () {
    return Inertia::render('Invitation/Template/Wedding/Content/ContentWeddingV1');
});

Route::get('/dashboard/invitation/edit/content', function () {
    return Inertia::render('Invitation/Template/Khitan/Content/ContentKhitanV1');
});

Route::get('/dashboard/natal/edit/content', function () {
    return Inertia::render('Invitation/Template/Natal/Content/ContentNatalV1');
});


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard/orders', function () {
        return Inertia::render('Dashboard/Orders');
    })->name('orders');

    Route::get('/dashboard/order-history', function () {
        return Inertia::render('Dashboard/History');
    })->name('history');

    Route::get('/dashboard/order-detail', function () {
        return Inertia::render('Dashboard/Detail');
    })->name('detail');

    Route::get('/dashboard/help', function () {
        return Inertia::render('Dashboard/FAQ');
    })->name('help');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
