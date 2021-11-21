const supabase = require('./supabase');

window.addEventListener('DOMContentLoaded', () => {
	const formUpload = document.getElementById("formUpload");
	const fileUpload = document.getElementById("image");
	formUpload.addEventListener("submit", function (e) {
		e.preventDefault();
		// const file = fileUpload.files[0];
		// uploadFile(file);
		downloadFile();
	});
});

async function downloadFile() {
		const { data, error } = await supabase.storage
			.from("hidden-food-picture")
			.download("tes.png")

		console.log(data);
		console.log(error);
}

async function uploadFile(file) {
	const { data, error } = await supabase.storage
		.from("hidden-food-picture")
		.upload("tes.png", file, {
			cacheControl: "3600",
			upsert: false,
		});

	console.log(data);
	console.log(error);
}
