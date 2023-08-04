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
  background-color: hsla(161, 63%, 54%, 0.5);
  /**
    outline: 1px solid hsla(93, 100%, 37%, 0.2);
  **/
}

#app header .nav ul li:first-child {
  background-color: hsla(46, 100%, 82%, 0.6);
}

#app header .nav ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--main-nav-height);
  color: var(--vt-c-black-soft);
  width: 100%;
  font-weight: 500;
}

#app header + main {
  padding-top: var(--main-nav-height);
}

@media (hover: hover) {
  #app header > .nav ul li:hover a:hover {
    background-color: unset;
  }

  #app header > .nav ul li:hover {
    background-color: hsla(160, 100%, 37%, 0.6);
  }
}
</style>
