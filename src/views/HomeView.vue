<script setup lang="ts">
defineOptions({
    name: 'HomeView',
});
</script>

<template>
  <main class="home">
    <nav class="nav">
      <ul>
        <li>
          <RouterLink to="/philology/articles">Philology</RouterLink>
        </li>
        <li>
          <RouterLink to="/engineering/articles">Engineering</RouterLink>
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
  background-color: hsla(93, 100%, 37%, 0.1);
}

ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1em;
  text-align: center;
}

</style>