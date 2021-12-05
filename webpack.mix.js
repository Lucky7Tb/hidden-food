const mix = require("laravel-mix");

mix.disableNotifications();

mix
	.setPublicPath("public/dist")
	.js("resources/js/admin/app.js", "admin/js")
	.js("resources/js/admin/edit.js", "admin/js")
	.js("resources/js/user/app.js", "user/js")
	.js("resources/js/user/create.js", "user/js")
	.js("resources/js/user/detail.js", "user/js")
	.js("resources/js/library/leaflet/leaflet-geo-plugin.js", "library/leaflet")
	.js("resources/js/library/supabase/supabase.js", "library/supabase")
	.postCss("resources/css/tailwind.css", "user/css", [require("tailwindcss")]);
