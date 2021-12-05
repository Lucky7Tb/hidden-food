<div id="layoutSidenav">
	<div id="layoutSidenav_nav">
		<nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
			<div class="sb-sidenav-menu">
				<div class="nav">
					<div class="sb-sidenav-menu-heading">Core</div>
					<a class="nav-link" href="{{ url('/admin') }}">
						<div class="sb-nav-link-icon"><i class="fas fa-home"></i></div>
						Dashboard
					</a>
					<a class="nav-link" href="index.html">
						<div class="sb-nav-link-icon"><i class="fas fa-user-shield"></i></div>
						Admin
					</a>
					<a class="nav-link" href="{{ url('/logout') }}">
						<div class="sb-nav-link-icon"><i class="fas fa-sign-out-alt"></i></div>
						Logout
					</a>
				</div>
			</div>
			<div class="sb-sidenav-footer">
				<div class="small">Logged in as:</div>
				{{ auth()->user()->email }}
			</div>
		</nav>
	</div>
