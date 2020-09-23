<template>
	<div class="col-sm-6 col-md-4 my-3">
		<div class="card border border-info rounded">
			<div class="card-header header" style="height: 60px;">
				<ul class="panel-title list-unstyled">
					<li class="list-inline-item"><h3>{{ currency.name }}</h3></li>
					<li class="list-inline-item"><small>(Price: {{ currency.price }})</small></li>
				</ul>
			</div>
			<div class="card-body">
				<div class="input-group">
					<input
					type="number"
					class="form-control mr-1"
					placeholder="Quantity"
					v-model="quantity"
					:class="{danger: insufficientFunds}">

					<button
					class="btn btn-success"
					@click="buyCurrency"
					:disabled="insufficientFunds || quantity <= 0 || quantity  != quantity.toString().split('.')[0]"
					:class="{'btn-danger': insufficientFunds}"
					>{{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}</button>

				</div>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				quantity: 0
			};
		},

		computed: {
			capital() {
				return this.$store.getters.capital;
			},
			insufficientFunds() {
				return this.quantity * this.currency.price > this.capital;
			}
		},

		props: ['currency'],

		methods: {

			buyCurrency() {
				const order = {
					currencyId: this.currency.id,
					currencyPrice: this.currency.price,
					quantity: this.quantity
				};
				this.$store.dispatch('buyCurrency', order);
				this.quantity = 0;
			}
		}
	}

</script>

<style>

.header {
	background-color: #F0F8FF;
	color: #2B4F81;
}

.danger {
	border: 1px solid red;
}

</style>