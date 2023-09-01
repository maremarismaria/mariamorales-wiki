<script lang="ts">
import Vue from "vue";
import BaseLayout from "@/components/layouts/BaseLayout.vue";

export default Vue.extend({
  name: "AboutPage",
  components: {
    BaseLayout,
  }
});
</script>

<template>
  <BaseLayout class="about">
    <template #main>
      <img class="profile-picture" src="/maria.jpg" alt="María Morales profile picture" width="140" height="140" />
      <h1 class="profile-name">María Morales</h1>
      <p class="profile-bio">Spanish Philologist, Front-End Engineer, UX/UI & More</p>
      <section class="profile-links-article">
        <h2>📌 Links</h2>
        <ul class="profile-links">
          <li>
            🌐 Website:
            <a href="http://mariamorales.site/" target="_blank">www.mariamorales.site</a>
          </li>
          <li>
            🎨 Creative Coding:
            <a href="https://codepen.io/maremarismaria" target="_blank" rel="noreferrer">CodePen</a>
          </li>
          <li>
            🐛 Telegram Channel:
            <a href="https://t.me/stuff_front/" target="_blank" rel="noreferrer">Front Stuff</a>
          </li>
          <li>
            📁 (this) Website repository:
            <a href="https://github.com/maremarismaria/mariamorales-wiki" target="_blank" rel="noreferrer">GitHub</a>
          </li>
        </ul>
      </section>
      <a href="https://ko-fi.com/K3K2LNBAX" target="_blank">
        <img
          height="36"
          style="border: 0px; height: 36px"
          src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </template>
  </BaseLayout>
</template>

<style scoped>
.about {
  width: 100%;
  text-align: center;
  color: var(--vt-c-black-soft);
}
.about :deep(.main) {
  padding: 4em 0 3em;
}

.about img.profile-picture {
  border-radius: 50%;
  margin-bottom: 1.2em;
}

.about h1.profile-name {
  margin-bottom: 0.6em;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--vt-c-indigo);
}

.about p.profile-bio {
  margin-bottom: 2.4rem;
  color: #696969;
  font-weight: 500;
  font-size: medium;
  display: inline-block;
  max-width: 320px;
}

.about .profile-links-article {
  border-radius: 2px;
  margin-bottom: 2.5em;
}

.about .profile-links-article h2 {
  font-size: large;
  font-weight: 500;
  margin-bottom: 0.6em;
}

.about .profile-links-article ul.profile-links {
  list-style: none;
  margin-bottom: unset;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 0.8em;
  padding-left: unset;
  padding: 2em 1em;
  background-color: hsla(179, 97%, 15%, 0.1);
  box-shadow: inset 0 -4px 4px 0 hsla(179, 97%, 15%, 0.1);
}

.about .profile-links-article ul.profile-links li {
  max-width: fit-content;
  background-color: hsla(0, 0%, 96%, 1);
  padding: 1em;
  border-radius: 1em;
  outline: 1px solid hsla(179, 97%, 15%, 0.1);
}

.about .profile-links-article ul.profile-links li a {
  font-weight: bold;
}
</style>
