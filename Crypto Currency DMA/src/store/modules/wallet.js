const state = {
	capital: 1000,
	currencys: []
};

const mutations = {
	'BUY_CURRENCY'(state, {currencyId, currencyPrice, quantity}) {
		const record = state.currencys.find(element => element.id == element.currencyId);
		if (record) {
			record.quantity += quantity;
		} else {
			state.currencys.push({
				id: currencyId,
				quantity: quantity
			});
		}
		state.capital -= currencyPrice * quantity;
	},
	'SELL_CURRENCY'(state, {currencyId, currencyPrice, quantity}) {
		const record = state.currencys.find(element => element.id == element.currencyId);
		if(record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.currencys.splice(state.currencys.indexOf(record), 1);
		}
		state.capital += currencyPrice * quantity;
	}
};

const actions = {
	sellCurrency({ commit }, order) {
		commit('SELL_CURRENCY', order);
	}
};

const getters = {
	walletCurrencys(state, getters) {
		return state.currencys.map(currency => {
			const record = getters.currencys.find(element => element.id == currency.id);
			return {
				id: currency.id,
				quantity: currencys.quantity,
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