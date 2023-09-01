<script lang="ts">
import Vue from "vue";
import BaseLayout from "@/components/layouts/BaseLayout.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    BaseLayout,
  }
});
</script>

<template>
  <BaseLayout class="home">
    <template #main>
      <nav class="nav">
        <ul>
          <li>
            <NuxtLink to="/articles/philology">
              <span>Philology</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/articles/engineering">
              <span>Engineering</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </template>
  </BaseLayout>
</template>

<style>
.home,
.home main ul {
  height: 100vh;
  min-height: 100%;
}

.home main ul {
  padding: 0;
  list-style: none;
  font-size: large;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(1, 1fr);
}

.home main ul li {
  width: 100%;
  height: 100%;
  background-color: hsla(93, 100%, 37%, 0.2);
}

.home main ul li a {
  color: var(--vt-c-black-soft);
  font-size: 1.6em;
  font-family: "Cutive Mono", monospace;
}

.home main ul li:first-child {
  background-color: hsla(46, 100%, 82%, 0.6);
}

.home main ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.home main ul li a span {
  width: fit-content;
  height: fit-content;
  padding: 1em;
  text-align: center;
  font-weight: bold;
}
</style>
