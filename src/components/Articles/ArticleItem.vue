<script setup lang="ts">
import type { Article } from "@/types";

interface Props {
  article: Article;
}

defineProps<Props>();

defineOptions({
  name: "ArticleItem",
});
</script>

<template>
  <li class="article-item">
    <i v-if="article.icon">
      <slot name="icon" class="icon"></slot>
    </i>

    <details open>
      <summary>
        <h3 class="title">
          <span>📝&nbsp;</span>
          <a :href="article.href" target="_blank">{{ article.title }}</a>
        </h3>
        <p class="subtitle" v-if="article.en_title">{{ article.en_title }}</p>
      </summary>
      <ul class="tags" v-if="article.tags">
        <li v-for="tag in article.tags" class="tag">{{ tag }}</li>
      </ul>
      <p class="description" v-if="article.description">{{ article.description }}</p>
    </details>
  </li>
</template>

<style scoped>
.article-item {
  position: relative;
  padding: 2em 1em 4em;
  border-radius: 2px;
}

.article-item:not(:last-child) {
  border-bottom: 1px solid rgba(235, 235, 235, 0.64);
}

.article-item details {
  display: inline-block;
}

.article-item details > summary {
  list-style: none;
  margin-bottom: 0.5em;
}

.article-item details > summary::-webkit-details-marker {
  display: none;
}

.article-item .title {
  display: inline-block;
  margin-bottom: 1.5em;
}

.article-item .title a {
  text-decoration: underline;
}

.article-item .tags {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.2em 0.4em;
  padding-left: unset;
}

.article-item .tags .tag {
  font-size: small;
  font-style: italic;
  color: hsla(0, 0%, 50%, 0.8);
  background-color: hsla(0, 0%, 50%, 0.2);
  padding: 0.2em 0.8em;
  border-radius: 6px;
  margin-bottom: 0.4em;
}
</style>
