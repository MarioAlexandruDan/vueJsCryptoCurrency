import Home from './components/Home.vue';
import Wallet from './components/wallet/Wallet.vue';
import Currencys from './components/currencys/Currencys.vue';

export const routes = [
{
	path: '/',
	component: Home
},
{
	path: '/wallet',
	component: Wallet
},
{
	path: '/currencys',
	component: Currencys
}
];