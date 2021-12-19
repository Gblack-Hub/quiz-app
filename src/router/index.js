import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../../src/pages/homepage/HomePage.vue";
import QuestionsPage from "../../src/pages/questions/QuestionsPage.vue";
import PageNotFound from "../../src/pages/others/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: HomePage,
  },
  {
    path: "/questions",
    name: "Questions",
    component: QuestionsPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../../src/pages/result/ResultPage.vue')
  }


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;