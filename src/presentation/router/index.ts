import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/HomeView.vue";
import SellersView from "../pages/SellersView.vue";
import SalesView from "../pages/SalesView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/sellers", component: SellersView },
  { path: "/sales", component: SalesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
