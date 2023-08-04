import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PhilologyView from "@/views/PhilologyView.vue";
import philologyArticles from "@/utils/philology/articles/articlesArray";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/philology/articles",
      name: "philology_articles",
      component: PhilologyView,
      props: {
        articles: philologyArticles,
      },
    },
    {
      path: "/engineering/articles",
      redirect: "/",
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
