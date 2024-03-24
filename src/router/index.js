import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Vue from 'vue'
// import VueRouter from 'vue-router'

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
    routes,
});

export default router;


// base: process.env.BASE_URL, 
// Vue.use(VueRouter)




// export default router

