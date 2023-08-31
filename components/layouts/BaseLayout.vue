<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BaseLayout',
})
</script>

<template>
  <article class="base-layout">
    <header class="header">
      <slot name="header">
        <nav class="nav">
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
          </ul>
        </nav>
      </slot>
    </header>
    <main class="main">
      <slot name="main"></slot>
    </main>
    <footer class="footer">
      <slot name="footer">
        <footer>
          <p>&copy; {{ new Date().getFullYear() }} <NuxtLink to="/about">María Morales</NuxtLink>. All rights reserved.
          </p>
        </footer>
      </slot>
    </footer>
  </article>
</template>

<style>
#__layout {
  font-weight: normal;
}

#__layout header,
#__layout header .nav {
  width: 100%;
}

#__layout header .nav ul {
  list-style: none;
  padding: unset;
  display: flex;
  justify-content: center;
  align-items: center;
}

#__layout header .nav ul li {
  width: 100%;
  cursor: pointer;
  background-color: hsla(45, 90%, 72%, 0.8);
}

#__layout header .nav ul li:first-child {
  background-color: hsla(46, 100%, 82%, 0.6);
  box-shadow: 2.5px -1px 0 0px gray;
  display: inline-block;
}

#__layout header .nav ul li a {
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

#__layout .base-layout footer {
  width: 100%;
  height: 32px;
  color: var(--vt-c-indigo);
  text-align: center;
  background-color: var(--vt-c-black);
  color: var(--vt-c-white-soft);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
