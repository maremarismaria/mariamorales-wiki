<script setup lang="ts">
import { type Article } from "../../types";
import ArticleItem from "./ArticleItem.vue";

interface Props {
  articles: Article[];
}

defineProps<Props>();

defineOptions({
  name: "ArticlesList",
  components: { ArticleItem },
});
</script>

<template>
  <ul class="articles">
    <ArticleItem v-for="article in articles" :key="article.href" :article="article"> </ArticleItem>
  </ul>

  <aside class="license">
    <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
      <img
        alt="Creative Commons License"
        style="border-width: 0"
        src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
    /></a>
    <br />
    This articles are licensed under a
    <a rel="license" target="_blank" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
      >Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a
    >. If you are interested, visit <RouterLink to="/about">"About"</RouterLink> page for more info.
  </aside>
</template>

<style scoped>
.articles {
  list-style: none;
  padding-inline-start: unset;
}

.articles + .license {
  margin-top: 3em;
  text-align: center;
  max-width: 400px;
  margin: 3em auto;
  color: var(--vt-c-black-soft);
}
</style>
