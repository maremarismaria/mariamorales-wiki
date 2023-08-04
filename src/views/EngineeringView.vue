<script setup lang="ts">
import type { Article } from "@/types";
import Articles from "@/components/Articles/Articles.vue";

interface Props {
  articles: Article[];
}

defineProps<Props>();

defineOptions({
  name: "EngineeringView",
  components: { Articles },
});
</script>

<template>
  <main class="engineering">
    <Articles :articles="articles" />
  </main>
</template>

<style scoped>
main.engineering {
  margin-top: 3em;
  padding: 1em;
}
</style>
