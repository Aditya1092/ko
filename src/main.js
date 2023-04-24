import Vue from "vue";
import Vuex from 'vuex';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
Vue.use(Vuex)
import App from "./App.vue";
Vue.config.devtools = true
import 'vuetify/dist/vuetify.min.css'
 import VueFirestore from 'vue-firestore';
 Vue.use(VueFirestore)
 import Toasted from 'vue-toasted';
 Vue.use(Toasted, {
  duration: 1500
})
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f7d18a',
        secondary: '#1b2a49',
        accent: '#2c2e4e',
      },
    },
  },
})
 
import router from "./router";
import store from "./store.js";
import "./assets/app.scss";
import "popper.js";
 
import "bootstrap";
import jQuery from "jquery";
import VueCarousel from 'vue-carousel';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(VueCarousel);
Vue.use(Vuetify)



window.$ = window.jQuery = jQuery;
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("mini-cart", require("./components/MiniCart.vue").default);
 
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,

  render: (h) => h(App),
}).$mount("#app");

