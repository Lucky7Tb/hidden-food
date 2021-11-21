module.exports = {
	mode: "jit",
	purge: ["./resources/**/*.blade.php", "./resources/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#F4574F",
					"primary-focus": "#D1393F" /* Primary color - focused */,
					"primary-content":
						"#ffffff" /* Foreground content color to use on primary color */,

					secondary: "#F7B53B" /* Secondary color */,
					"secondary-focus": "#D4922B" /* Secondary color - focused */,
					"secondary-content":
						"#ffffff" /* Foreground content color to use on secondary color */,

					accent: "#37cdbe" /* Accent color */,
					"accent-focus": "#2aa79b" /* Accent color - focused */,
					"accent-content":
						"#ffffff" /* Foreground content color to use on accent color */,

					neutral: "#3d4451" /* Neutral color */,
					"neutral-focus": "#2a2e37" /* Neutral color - focused */,
					"neutral-content":
						"#ffffff" /* Foreground content color to use on neutral color */,

					"base-100":
						"#ffffff" /* Base color of page, used for blank backgrounds */,
					"base-200": "#f9fafb" /* Base color, a little darker */,
					"base-300": "#d1d5db" /* Base color, even more darker */,
					"base-content":
						"#1f2937" /* Foreground content color to use on base color */,

					info: "#30B6FF" /* Info */,
					success: "#6AE87B" /* Success */,
					warning: "#F7C442" /* Warning */,
					error: "#F96BA4" /* Error */,
				},
			},
		],
	},
};
