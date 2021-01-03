import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showFooter:true,
    showFixedButton:true
  },
  getters: {
    getShowFooter(state){
      return state.showFooter
    },
    getShowFixedButton(state){
      return state.showFixedButton
    }
  },
  mutations: {
    setShowFooter(state, paloy){
      state.showFooter = paloy
    },
    setShowFixedButton(state, paloy){
      state.showFixedButton = paloy
    }
  },
  actions: {},
  modules: {}
});
