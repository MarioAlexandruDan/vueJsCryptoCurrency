<template>
	<nav class="navbar navbar-light navbar-expand-lg rounded" style="background-color: #B9D3EE;">
		<router-link to="/" class="navbar-brand">Crypto Currency DMA</router-link>

		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<router-link class="nav-item" to="/currencys" activeClass="active" tag="li"><a class="nav-link">Currencys</a></router-link>
				<router-link class="nav-item" to="/wallet" activeClass="active" tag="li"><a class="nav-link">Wallet</a></router-link>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#">End Day</a>
				</li>
				<li class="nav-item dropdown">
					<a
					class="nav-link dropdown-toggle"
					href="#" id="navbarDropdown"
					role="button" data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Save & Load
				</a>
				<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
					<a class="dropdown-item" href="#">Save Data</a>
					<a class="dropdown-item" href="#">Load Data</a>
				</ul>
			</li>
		</ul>
	</div>
</nav>
</template>