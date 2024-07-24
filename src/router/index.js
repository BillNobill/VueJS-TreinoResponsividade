import { createRouter, createWebHistory } from "vue-router";
import PaginaInicial from "..//components/PaginaInicial.vue";
import TabelaVendas from "../components/TabelaVendas.vue";
import ImagensIniciais from "../components/ImagensInciais.vue";

const routes = [
  { path: "/", component: PaginaInicial },
  { path: "/vendas", component: TabelaVendas },
  { path: "/imagens", component: ImagensIniciais },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
