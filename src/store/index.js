import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listado69: []
  },
  mutations: {
    SET_LISTADO69(state, payload) {
      state.listado69 = payload;
    }
  },
  actions: {
    loadLista69({ commit }) { 
      axios.get(`https://raw.githubusercontent.com/jluix44/SAT-Listas-69/master/SAT-Listado-69-B.json`)
        .then(response => {
            console.log(response.data);
            commit("SET_LISTADO69", response.data);
        }).catch()
        
    }
  },
});
