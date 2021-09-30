const mix = require('laravel-mix');

mix
	.setPublicPath('public/dist/user')
	.js('resources/js/bootstrap.js', 'js')
	.sass('resources/scss/bootstrap.scss', 'css')
