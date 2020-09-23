import Vue from 'vue';

export const loadData = ({ commit }) => {
	Vue.http.get('data.json')
		.then(response => response.json())
		.then(data => {
			if (data) {
				const currencysSave = data.currencysSave;
				const capitalSave = data.capitalSave;
				const walletCurrencysSave = data.walletCurrencysSave;

				const wallet = {
					walletCurrencysSave,
					capitalSave
				};

				commit('SET_CURRENCYS', currencysSave);
				commit('SET_WALLET', wallet);
			}
		}); 
}