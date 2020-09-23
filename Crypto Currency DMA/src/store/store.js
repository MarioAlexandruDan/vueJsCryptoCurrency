import Vue from 'vue';
import Vuex from 'vuex';

import currencys from './modules/currencys';
import wallet from './modules/wallet';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	actions,
	modules: {
		currencys,
		wallet
	}
});