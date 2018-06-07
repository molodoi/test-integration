<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

//Route::get('/', 'HomeController@index')->name('home');
Config::set('debugbar.enabled', false);
Route::get('/', 'Frontend\HomeController@index')->name('frontend.home');
Route::get('/leaflet', 'Frontend\HomeController@leaflet')->name('frontend.leaflet');
