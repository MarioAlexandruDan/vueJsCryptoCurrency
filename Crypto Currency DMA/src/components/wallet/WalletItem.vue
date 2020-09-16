<template>
	<div class="col-sm-6 col-md-4 my-3">
		<div class="card border border-info rounded">
			<div class="card-header header" style="height: 60px;">
				<ul class="panel-title list-unstyled">
					<li class="list-inline-item"><h3>{{ currency.name }}</h3></li>
					<li class="list-inline-item"><small>(Price: {{ currency.price }} / {{ currency.quantity }})</small></li>
				</ul>
			</div>
			<div class="card-body">
				<div class="input-group">
					<input
					type="number"
					class="form-control mr-1"
					placeholder="Quantity"
					v-model="quantity">

					<button
					class="btn btn-success"
					@click="sellCurrency"
					:disabled="quantity <= 0 || quantity  != quantity.toString().split('.')[0]"
					>Sell</button>

				</div>
			</div>
		</div>
	</div>
</template>

<script>

	import { mapActions } from 'vuex';

	export default {
		data() {
			return {
				quantity: 0
			};
		},

		props: ['currency'],

		methods: {
			...mapActions([
				'sellCurrency'
				])

			sellCurrency() {
				const order = {
					currencyId: this.currency.id,
					currencyPrice: this.currency.price,
					quantity: this.quantity
				};
				this.sellCurrency();
			}
		}
	}

</script>

<style>
.header {
	background-color: #F0F8FF;
	color: #2B4F81;
}
</style>