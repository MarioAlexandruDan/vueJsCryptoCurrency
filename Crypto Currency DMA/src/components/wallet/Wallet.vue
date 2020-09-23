<template>
	<div class="row">
		<app-wallet-item v-for="currency in currencys" :currency="currency"></app-wallet-item>
	</div>
</template>

<script>
	
	import { mapGetters } from 'vuex';
	import WalletItem from './WalletItem.vue';

	export default {
		computed: {
			...mapGetters({
				currencys: 'walletCurrencys'
			})
		},

		components: {
			appWalletItem: WalletItem
		}
	}

</script>