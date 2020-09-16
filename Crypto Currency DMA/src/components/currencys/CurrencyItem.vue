<template>
	<div class="col-sm-6 col-md-4 my-3">
		<div class="card border border-info rounded">
			<div class="card-header header" style="height: 60px;">
				<ul class="panel-title list-unstyled">
					<li class="list-inline-item"><h3>Name</h3></li>
					<li class="list-inline-item"><small>(Price: PRICE)</small></li>
				</ul>
			</div>
			<div class="card-body">
				<div class="input-group mb-3">
					<input type="number"
					class="form-control"
					placeholder="Quantity">
					<div class="input-group-prepend">
						<button class="btn btn-success"">Buy</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.header {
	background-color: #F0F8FF;
	color: #2B4F81;
}
</style>