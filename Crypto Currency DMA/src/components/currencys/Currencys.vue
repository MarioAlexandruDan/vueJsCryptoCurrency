<template>
	<div class="row">
		<app-currency-item v-for="currency in currencys" :currency="currency"></app-currency-item>
	</div>
</template>

<script>
	
	import { mapGetters } from 'vuex';
	import CurrencyItem from './CurrencyItem.vue';

	export default {
		components: {
			appCurrencyItem: CurrencyItem
		},

		computed: {
			...mapGetters({
				currencys: 'currencys'
			})
		}
	}

</script>