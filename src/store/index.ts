import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store: any = 	new Vuex.Store({
	state: {
		tabSelected: "home"
	}
});

export default store;