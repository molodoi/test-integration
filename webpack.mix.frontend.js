let mix = require('laravel-mix');
//mix.browserSync('test-integration.local');
// variables
var pathAssets = './resources/assets/frontend';
var pathPublic = './public/frontend';

mix.babel([
    // pathAssets + '/js/leaflet/leaflet.js',
    pathAssets + '/js/app.js',
], pathPublic + '/js/app.js');

mix.sass(pathAssets + '/sass/app.scss', pathPublic + '/css/app.css').options({ processCssUrls: false });

mix.browserSync({
    proxy: 'test-integration.local'
});