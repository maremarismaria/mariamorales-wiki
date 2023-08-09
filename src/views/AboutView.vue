<script setup lang="ts">
defineOptions({
  name: "AboutView",
});
</script>

<template>
  <main class="about">
    <article>
      <img
        class="profile-picture"
        src="/maria.jpg"
        alt="María Morales profile picture"
        width="140"
        height="140"
      />
      <h1 class="profile-name">María Morales</h1>
      <p class="profile-bio">Spanish Philologist, Front-End Engineer, UX/UI & More</p>
      <article class="profile-links-article">
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
            <a
              href="https://github.com/maremarismaria/mariamorales-wiki"
              target="_blank"
              rel="noreferrer"
              >GitHub</a
            >
          </li>
        </ul>
      </article>
      <a href="https://ko-fi.com/K3K2LNBAX" target="_blank">
        <img
          height="36"
          style="border: 0px; height: 36px"
          src="https://storage.ko-fi.com/cdn/kofi4.png?v=3"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
    </article>
  </main>
  <footer>
    <p>&copy; {{ new Date().getFullYear() }} María Morales. All rights reserved.</p>
  </footer>
</template>

<style scoped>
main.about {
  margin-top: 4.5em;
}

main.about article,
main.about {
  width: 100%;
  text-align: center;
  color: var(--vt-c-black-soft);
}

main.about > article {
  padding: 1em 0 3em 0;
}

main.about img.profile-picture {
  border-radius: 50%;
  margin-bottom: 1.2em;
}

main.about h1.profile-name {
  margin-bottom: 0.6em;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--vt-c-indigo);
}

main.about p.profile-bio {
  margin-bottom: 2.4rem;
  color: #696969;
  font-weight: 500;
  font-size: medium;
  display: inline-block;
  max-width: 320px;
}

.profile-links-article {
  border-radius: 2px;
  margin-bottom: 2.5em;
}

.profile-links-article h2 {
  font-size: large;
  font-weight: 500;
  margin-bottom: 0.6em;
}

.profile-links-article ul.profile-links {
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

.profile-links-article ul.profile-links li {
  max-width: fit-content;
  background-color: hsla(0, 0%, 96%, 1);
  padding: 1em;
  border-radius: 1em;
  outline: 1px solid hsla(179, 97%, 15%, 0.1);
}

.profile-links-article ul.profile-links li a {
  font-weight: bold;
}

footer {
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
