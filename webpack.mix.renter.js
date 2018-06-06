let mix = require('laravel-mix');

// variables
var pathAssets = './resources/assets/renter';
var pathPublic = './public/renter';

mix.babel([
    pathAssets + '/js/app.js',
], pathPublic + '/js/app.js');

mix.sass(pathAssets + '/sass/app.scss', pathPublic + '/css/app.css').options({ processCssUrls: false });