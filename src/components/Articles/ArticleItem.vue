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

.article-item:not(:last-child) {
  margin-bottom: 1.8em;
}

.article-item details {
  display: inline-block;
}

.article-item details > summary {
  list-style: none;
}

.article-item details > summary::-webkit-details-marker {
  display: none;
}

.article-item .title {
  display: inline-block;
  
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
}

.article-item .tags .tag {
  font-style: italic;
  font-weight: 200;
  color: var(--vt-c-black-soft);
}

.article-item .tags .tag:not(:last-child) {
  margin-right: 1em;
}
</style>
