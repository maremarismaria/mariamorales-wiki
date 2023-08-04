<script setup lang="ts">
import type { Article } from "@/types";
// import DocumentationIcon from '@/components/icons/IconDocumentation.vue';

interface Props {
  article: Article;
}

defineProps<Props>();

defineOptions({
  name: "ArticleItem",
  // components: { DocumentationIcon },
});
</script>

<template>
  <li class="article-item">
    <i v-if="article.icon">
      <slot name="icon" class="icon"></slot>
    </i>

    <details>
      <summary>
        <p class="title">
          <a :href="article.href" target="_blank" rel="noopener">{{ article.title }}</a>
        </p>
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
.article-item details {
  display: inline-block;
}

.article-item .title {
  display: inline-block;
}

.article-item .tags {
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.article-item .tags .tag {
  font-style: italic;
  font-weight: 200;
  color: var(--vt-c-text-dark-2);
}

.article-item .tags .tag:not(:last-child) {
  margin-right: 1em;
}
</style>
