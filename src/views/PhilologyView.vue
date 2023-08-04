<script setup lang="ts">
import type { Article } from "@/types";
import Articles from "@/components/Articles/Articles.vue";

interface Props {
  articles: Article[];
}

defineProps<Props>();

defineOptions({
  name: "PhilologyView",
  components: { Articles },
});
</script>

<template>
  <main class="philology">
    <Articles :articles="articles" />
  </main>
</template>

<style scoped>
main.philology {
  margin-top: 3em;
  padding: 1em;
}
</style>
