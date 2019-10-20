import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { store } from "./store/store"
import { router } from "./routes"

Vue.use(Buefy);

Vue.filter("dateFilter", (value) => {
  if(value) {
    let date = value.split('-');
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return date[2] + " " + months[date[1] - 1] + ' ' + date[0];
  }

});

Vue.filter("currency", (value) => {
  return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits : 0}) + " $"
});

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
