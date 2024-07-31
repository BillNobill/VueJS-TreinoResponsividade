import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "app", component: () => import(/* webpackChunckName: "app" */ "@/App.vue") },
  { path: "/paginainicial", name: "paginainicial", component: () => import(/* webpackChunckName: "paginainicial" */ "..//components/PaginaInicial.vue") },
  { path: "/vendas", name: "vendas", component: () => import(/* webpackChunckName: "vendas" */ "../components/TabelaVendas.vue") },
  { path: "/imagens", name: "imagens", component: () => import(/* webpackChunckName: "imagens" */ "../components/ImagensInciais.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
