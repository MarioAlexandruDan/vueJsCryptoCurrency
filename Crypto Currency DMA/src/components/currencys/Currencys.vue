<template>
	<div class="row">
		<app-currency-item v-for="currency in currencys"></app-currency-item>
	</div>
</template>

<script>
	
	import CurrencyItem from './CurrencyItem.vue';

	export default {

		data() {
			return {
				currencys: [
				{
					id: 1,
					name: 'Cur1',
					price: '200',
				},
				{
					id: 2,
					name: 'Cur2',
					price: '25',
				},
				{
					id: 3,
					name: 'Cur3',
					price: '100',
				},
				{
					id: 4,
					name: 'Cur4',
					price: '300',
				}
				]
			};
		},

		components: {
			appCurrencyItem: CurrencyItem
		}
	}

</script>