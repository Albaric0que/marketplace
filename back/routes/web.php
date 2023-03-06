<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;


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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//U del CRUD
Route::get('/edit/{id}', [ItemController::class, 'edit'])->name('editItem');
Route::patch('/item/{id}', [ItemController::class, 'update'])->name('updateItem')/* ->middleware('isadmin', 'auth') */;