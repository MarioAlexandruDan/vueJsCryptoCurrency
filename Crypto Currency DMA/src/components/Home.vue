<template>
	<div>
		<h1>Invest in Currencys , view your Wallet or view the Market for price changes</h1>
		<h4>You may Save & Load your current progress in case a market crash happen</h4>
		<h4>Click on 'End Day' to begin a new day with updated prices</h4>
		<hr>
		<strong style="color: #2B4F81;">Your Capital is : <span class="money">{{ capital }} $</span></strong>
	</div>
</template>

<script>
	
	export default {

		computed: {
			capital() {
				return this.$store.getters.capital;
			}
		}

	}

</script>