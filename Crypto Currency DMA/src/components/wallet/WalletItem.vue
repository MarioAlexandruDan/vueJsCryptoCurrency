<template>
	<div class="mr-4 my-3" style="width: 366px;">
		<div class="card border border-primary rounded">
			<div class="card-header header" style="height: 60px;">
				<ul class="panel-title list-unstyled">
					<li class="list-inline-item"><h3>{{ currency.name }}</h3></li>
					<li class="list-inline-item"><small>( Quantity {{ currency.quantity }} / Price: {{ currency.price }})</small></li>
				</ul>
			</div>
			<div class="card-body">
				<div class="input-group">
					<input
					type="number"
					class="form-control mr-1"
					placeholder="Quantity"
					v-model="quantity"
					:class="{danger: largerQuantity}">

					<button
					class="btn btn-danger"
					@click="sellCurrency"
					:disabled="largerQuantity || quantity <= 0 || quantity  != quantity.toString().split('.')[0]"
					:class="{'btn-dark': largerQuantity}"
					>{{ largerQuantity ? 'Larger Quantity' : 'Sell' }}</button>
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

		computed: {
			largerQuantity() {
				return ( this.quantity - this.currency.quantity ) > 0;
			}
		},

		props: ['currency'],

		methods: {
			...mapActions({
				placeSellCurrency: 'sellCurrency'
			}),

			sellCurrency() {
				const order = {
					currencyId: this.currency.id,
					currencyPrice: this.currency.price,
					quantity: this.quantity
				};
				this.placeSellCurrency(order);
				this.quantity = 0;
			}
		}
	}

</script>

<style scoped>

.header {
	background-color: #D9D9F3;
	color: #191970;
}

.danger {
	border: 1px solid red;
}

</style>