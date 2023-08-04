<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="nav">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style>
#app {
  font-weight: normal;
}

#app header,
#app header .nav {
  width: 100%;
}

#app header .nav {
  position: fixed;
  top: 0;
}

#app header .nav ul {
  list-style: none;
  padding: unset;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app header .nav ul li {
  width: 100%;
  cursor: pointer;
  outline: 1px solid var(--vt-c-divider-dark-2);
}

#app header .nav ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--main-nav-height);
  width: 100%;
}

#app header + main {
  padding-top: var(--main-nav-height);
}

@media (hover: hover) {
  #app header > .nav ul li:hover a:hover {
    background-color: unset;
  }

  #app header > .nav ul li:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
