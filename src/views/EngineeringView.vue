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
    <h1>Engineering</h1>
    <Articles :articles="articles" />
  </main>
</template>

<style scoped>
main.engineering {
  margin-top: 3.5em;
  padding: 1em;
}

h1 {
  padding: 1em 0;
  text-align: center;
  font-variant: small-caps;
  color: #2c3e50;
  font-weight: bold;
}
</style>
