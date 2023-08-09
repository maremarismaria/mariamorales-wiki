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
@import url("https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Kalam&family=VT323&display=swap");

#app {
  font-weight: normal;
}

#app header,
#app header .nav {
  width: 100%;
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
  background-color: hsla(45, 90%, 72%, 0.8);
}

#app header .nav ul li:first-child {
  background-color: hsla(46, 100%, 82%, 0.6);
  box-shadow: 2.5px -1px 0 0px gray;
  display: inline-block;
}

#app header .nav ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--main-nav-height);
  color: var(--vt-c-black-soft);
  width: 100%;
  font-weight: 500;
  font-family: "Cutive Mono", monospace;
  font-size: 1.2em;
}

</style>
