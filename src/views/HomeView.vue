<script setup lang="ts">
defineOptions({
  name: "HomeView",
});
</script>

<template>
  <main class="home">
    <nav class="nav">
      <ul>
        <li>
          <RouterLink to="/philology/articles">
            <span>Philology</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/engineering/articles">
            <span>Engineering</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style scoped>
main.home,
main.home ul {
  height: 100vh;
  min-height: 100%;
}

ul {
  padding: 0;
  list-style: none;
  font-size: large;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(1, 1fr);
}

ul li {
  width: 100%;
  height: 100%;
  background-color: hsla(93, 100%, 37%, 0.2);
}

ul li a {
  color: var(--vt-c-black-soft);
  font-size: 1.6em;
  font-family: "Cutive Mono", monospace;
}

ul li:first-child {
  background-color: hsla(46, 100%, 82%, 0.6);
}

ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

ul li a span {
  width: fit-content;
  height: fit-content;
  padding: 1em;
  text-align: center;
  font-weight: bold;
}
</style>
