<script lang="ts">
import Vue from "vue";
import { PropType } from "vue/types";
import { Article } from "@/migration/types";

interface Props {
  article: Article
}

export default Vue.extend({
  name: "ArticleItem",
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  setup({ article }: Props) {
    return { articleItem: article };
  },
});
</script>

<template>
  <li class="article-item">
    <i v-if="articleItem.icon">
      <slot name="icon" class="icon"/>
    </i>

    <details open>
      <summary>
        <h3 class="title">
          <span>📝&nbsp;</span>
          <a :href="articleItem.href" target="_blank" v-if="articleItem.href" class="title">{{
            articleItem.title
          }}</a>
          <span v-else class="title">{{ articleItem.title }}</span>
        </h3>
        <p class="subtitle" v-if="articleItem.en_title">{{ articleItem.en_title }}</p>
      </summary>
      <ul class="tags" v-if="articleItem.tags">
        <li v-for="tag in articleItem.tags" :key="tag" class="tag">{{ tag }}</li>
      </ul>
      <p class="description" v-if="articleItem.description">{{ articleItem.description }}</p>
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
  margin-bottom: 1em;
  color: lightseagreen;
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
