let hiddenFoodTable;

$(function () {
	hiddenFoodTable = $("#hidden-food-table").DataTable({
		ajax: {
			url: "/api/hidden-food",
			contentType: "application/json",
			type: "GET",
		},
		columns: [
			{
				render: (_, __, data) => {
					return `
					<div style="width: 64px; height: 64px; background-image: url('https://ccbzidgtbnectbxdhvtk.supabase.in/storage/v1/object/public/${data.thumbnail}'); background-size: cover; background-repeat: no-repeat;margin: 0 auto">
					</div>
				`;
				},
			},
			{ data: "name" },
			{ data: "address" },
			{ data: "status" },
			{
				render: (_, __, data) => {
					return `
					<a href="/admin/hidden-food/${data.id}" class="btn btn-md btn-info"><i class="fas fa-eye text-white"></i></a>
				`;
				},
			},
		],
	});
});
