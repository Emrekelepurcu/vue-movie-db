import Vue from "vue"
import Vuex from "vuex"
import MovieModule from "./modules/MovieModule"

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    MovieModule
  }
})
