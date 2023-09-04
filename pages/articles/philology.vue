<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { Article } from "@/migration/types";
import Articles from "@/components/Articles/Articles.vue";
import BaseLayout from "@/components/layouts/BaseLayout.vue";

export default Vue.extend({
  name: "PhilologyPage",
  components: { BaseLayout, Articles },
  computed: {
    articles(): Article[] {
      return this.getPhilologyArticles || [];
    },
    ...mapGetters({
      getPhilologyArticles: "articles/getPhilologyArticles",
    }),
  },
});
</script>

<template>
  <BaseLayout class="about">
    <template #main>
      <h1>Philology</h1>
      <Articles :articles="articles" />
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
