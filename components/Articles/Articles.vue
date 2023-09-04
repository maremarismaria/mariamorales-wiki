<script lang="ts">
import Vue from "vue";
import { PropType } from "vue/types";
import { Article } from "@/migration/types";
import ArticleItem from "@/components/Articles/ArticleItem.vue";

interface Props {
  articles: Article[]
}

export default Vue.extend({
  name: "Articles",
  components: { ArticleItem },
  props: {
    articles: {
      type: Array as PropType<Article[]>,
      required: true,
    },
  },
  setup(props: Props) {
    if (!props.articles || !props.articles.length) {
      return { articlesList: [] };
    }

    return { articlesList: props.articles };
  },
});
</script>

<template>
  <section>
    <ul class="articles">
      <ArticleItem v-for="article in articlesList" :key="article.href" :article="article"/>
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
    >. If you are interested, visit <NuxtLink to="/about">About</NuxtLink> page for more info.
  </aside>
  </section>
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
