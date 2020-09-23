const state = {
	capital: 1000,
	walletCurrencys: []
};

const mutations = {
	'BUY_CURRENCY'(state, {currencyId, currencyPrice, quantity}) {
		const record = state.walletCurrencys.find(element => element.id == currencyId);
		if (record) {
			record.quantity += quantity;
		} else {
			state.walletCurrencys.push({
				id: currencyId,
				quantity: quantity
			});
		}
		state.capital -= currencyPrice * quantity;
	},
	'SELL_CURRENCY'(state, {currencyId, currencyPrice, quantity}) {
		const record = state.walletCurrencys.find(element => element.id == currencyId);
		if(record.quantity - quantity > 0) {
			record.quantity -= quantity;
		} else {
			state.walletCurrencys.splice(state.walletCurrencys.indexOf(record), 1);
		}
		state.capital += currencyPrice * quantity;
	},
	'SET_WALLET'(state, wallet) {
		state.capital = wallet.capitalSave;
		state.walletCurrencys = wallet.walletCurrencysSave ? wallet.walletCurrencysSave : [];
	}
};

const actions = {
	sellCurrency({ commit }, order) {
		commit('SELL_CURRENCY', order);
	}
};

const getters = {
	walletCurrencys(state, getters) {
		return state.walletCurrencys.map(currency => {
			const record = getters.currencys.find(element => element.id == currency.id);
			return {
				id: currency.id,
				quantity: currency.quantity,
				name: record.name,
				price: record.price
			}
		});
	},
	capital(state) {
		return state.capital;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}