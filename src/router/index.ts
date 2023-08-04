import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PhilologyView from "@/views/PhilologyView.vue";
import EngineeringView from "@/views/EngineeringView.vue";
import philologyArticles from "@/utils/philology/articles/articlesArray";
import engineeringArticles from "@/utils/engineering/articles/articlesArray";

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
      name: "engineering_articles",
      component: EngineeringView,
      props: {
        articles: engineeringArticles,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
