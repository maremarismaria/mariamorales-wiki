<script lang="ts">
import Vue from 'vue'
import Articles from "@/components/Articles/Articles.vue"
import articlesList from '@/migration/db/utils/engineering/articles/articlesList'
import BaseLayout from '@/components/layouts/BaseLayout.vue'

export default Vue.extend({
  name: 'EngineeringPage',
  components: { BaseLayout, Articles },
  setup() {
    return { articles: articlesList }
  },
})
</script>

<template>
  <BaseLayout class="about">
  <template v-slot:main>
    <h1>Engineering</h1>
    <Articles :articles="articles"> </Articles>
  </template>
</BaseLayout>
</template>

<style scoped>
h1 {
  margin-top: 3.5em;
  padding: 1em 0;
  text-align: center;
  font-variant: small-caps;
  color: #2c3e50;
  font-weight: bold;
}

section {
  padding: 1em;
}
</style>
