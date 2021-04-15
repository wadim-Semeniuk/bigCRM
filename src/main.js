import Vue from "vue";
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/data.filter";
import currencyFilter from "@/filters/currency.filter";
import localizeFilter from "@/filters/localize.filter";
import tooltipdirective from '@/directives/tooltip.directive';
import messagePlugin from '@/utils/message.plugin';
import titlePlugin from '@/utils/title.plugin';
import Loader from '@/components/app/Loader';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter('date', dateFilter);
Vue.filter('localize', localizeFilter);
Vue.filter('currency', currencyFilter);
Vue.directive('tooltip', tooltipdirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyCfhFO9XJYZkye5JoniUH4u7axNltMw4rA",
  authDomain: "vuebigapp227.firebaseapp.com",
  projectId: "vuebigapp227",
  storageBucket: "vuebigapp227.appspot.com",
  messagingSenderId: "126670589475",
  appId: "1:126670589475:web:9d99115425137594e2eb96",
  measurementId: "G-RK07Q3Q8S2"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})


