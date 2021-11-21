<div class="navbar sm:px-44 shadow-lg bg-primary text-neutral-content z-10">
	<div class="flex-none px-2 mx-2">
		<span class="text-lg font-bold">
			Mentorku
		</span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">
			<a href="{{ url("/") }}">
				<i class="mr-2 bi bi-house-fill"></i> Beranda
			</a>
			<a href="{{ url("/create") }}">
				<i class="mr-2 bi bi-search"></i> Rekomendasiin
			</a>
		</div>
	</div>
</div>

{{--
<nav class="navbar navbar-expand-lg shadow-sm navbar-dark bg-primary">
	<div class="container">
		<a class="navbar-brand" href="{{ url("/mentee/") }}">Mentorku</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
	aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
	<ul class="navbar-nav me-auto mb-2 mb-lg-0">
		<li class="nav-item">
			<a class="nav-link fw-bold" href="{{ url("/mentee/") }}">
				Beranda
				<i class="bi bi-house-fill fs-5"></i>
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link fw-bold" href="{{ url("/mentee/mentor/search") }}">
				Cari mentor
				<i class="bi bi-search fs-5"></i>
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="{{ url("/mentee/mentoring/schedule") }}">
				Jadwalku
				<i class="bi bi-calendar-event-fill fs-5"></i>
			</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" href="{{ url("/mentee/mentoring/history") }}">
				Riwayat mentoring
				<i class="bi bi-bootstrap-reboot fs-5"></i>
			</a>
		</li>
	</ul>
	<div class="dropdown">
		<button class="btn dropdown-toggle" type="button" id="profile_dropdown" data-bs-toggle="dropdown"
			aria-expanded="false">
			<i class="bi bi-person-circle text-white" style="font-size: 2em"></i>
			<span class="mb-5 text-white">
				{{ auth()->user()->email }}
			</span>
		</button>
		<ul class="dropdown-menu" aria-labelledby="profile_dropdown">
			<li class="d-flex">
				<a class="dropdown-item fs-5" href="{{ url("mentee/profile") }}">
					Setting
					<i class="bi bi-gear-fill fs-5"></i>
				</a>
			</li>
			<li>
				<a class="dropdown-item fs-5" href="{{ url("/logout") }}">
					Logout
					<i class="bi bi-door-open-fill fs-5"></i>
				</a>
			</li>
		</ul>
	</div>
</div>
</div>
</nav> --}}
