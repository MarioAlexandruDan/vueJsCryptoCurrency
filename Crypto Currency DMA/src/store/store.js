import Vue from 'vue';
import Vuex from 'vuex';

import currencys from './modules/currencys';
import wallet from './modules/wallet';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		currencys,
		wallet
	}
});