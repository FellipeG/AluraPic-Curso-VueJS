import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import { routes } from './routes';

import './directives/Transform';

Vue.use(VueResource);
Vue.use(VueRouter);

// é passado routes: routes, porém como a propriedade e a variável tem o mesmo nome, o JS aceita que se passe somente a variável

const router = new VueRouter({ 
	routes,
	mode: 'history' // Remove /#/ das rotas
});

new Vue({
	el: '#app',
	router, // router: router
	render: h => h(App)
})
