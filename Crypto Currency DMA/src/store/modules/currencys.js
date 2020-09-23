import currencys from '../../data/currencys';

const state = {
	currencys: []
};

const mutations = {
	'SET_CURRENCYS'(state, currencys) {
		state.currencys = currencys;
	},
	'RANDOM_CURRENCYS'(state) {
		state.currencys.forEach(currency => {
			currency.price = Math.round(currency.price * (1.15 + Math.random() - Math.random()));
			if (currency.price == 0) {
				currency.price = 1;
			}
		});
	}
};

const actions = {
	buyCurrency: ({ commit }, order) => {
		commit('BUY_CURRENCY', order);
	},
	initCurrencys: ({ commit }) => {
		commit('SET_CURRENCYS', currencys);
	},
	randomizeCurrencys: ({ commit }) => {
		commit('RANDOM_CURRENCYS');
	} 
};

const getters = {
	currencys: state => {
		return state.currencys;
	}
};

export default {

	state,
	mutations,
	actions,
	getters

};