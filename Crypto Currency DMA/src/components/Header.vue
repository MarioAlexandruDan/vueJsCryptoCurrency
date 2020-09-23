<template>
	<nav class="navbar navbar-light navbar-expand-lg rounded" style="background-color: #B9D3EE;">
		<router-link to="/" class="navbar-brand" style="color: #2B4F81;">Crypto Currency DMA</router-link>

		<div class="collapse navbar-collapse">
			<ul class="navbar-nav mr-auto">
				<router-link class="nav-item" to="/currencys" activeClass="active" tag="li"><a class="nav-link">Currencys</a></router-link>
				<router-link class="nav-item" to="/wallet" activeClass="active" tag="li"><a class="nav-link">Wallet</a></router-link>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#" @click="endDay">End Day</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="saveData">Save Data</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="loadData">Load Data</a>
				</li>
			</li>
		</ul>
		<strong style="color: #2B4F81;">Capital: <span class="money">{{ capital }} $</span></strong>
	</div>
</nav>
</template>

<script>

	import { mapActions } from 'vuex';
	import { mapGetters } from 'vuex';
	
	export default {

		methods: {
			...mapActions({
				randomizeCurrencys: 'randomizeCurrencys',
				loadDBData: 'loadData'
			}),
			endDay() {
				this.randomizeCurrencys();
			},
			saveData() {
				const data = {
					capitalSave: this.capital,
					walletCurrencysSave: this.walletCurrencys,
					currencysSave: this.currencys
				}
				this.$http.put('data.json', data);
			},
			loadData() {
				this.loadDBData();
			}
		},

		computed: {
			...mapGetters([
				'walletCurrencys',
				'currencys'
				]),

			capital() {
				return this.$store.getters.capital;
			}
		}

	}

</script>

<style>

.money {
	color: #191970;
}

</style>