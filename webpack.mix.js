const mix = require('laravel-mix');

mix
	.setPublicPath('public/dist/user')
	.js('resources/js/app.js', 'js')
	.js('resources/js/supabase.js', 'js')
	.postCss('resources/css/tailwind.css', 'css', [require('tailwindcss')]);
