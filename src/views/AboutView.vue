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
            <a href="https://codepen.io/maremarismaria" target="_blank" rel="noreferrer">Codepen</a>
          </li>
          <li>
            🐛 Telegram Channel:
            <a href="https://t.me/stuff_front/" target="_blank" rel="noreferrer">Front stuff</a>
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
main.about,
footer {
  margin-top: 6em;
  padding: 1em;
}

main.about article,
main.about {
  width: 100%;
  text-align: center;
  color: var(--vt-c-black-soft);
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
  background-color: hsla(75, 16%, 65%, 0.1);
  outline: 1px solid hsla(75, 16%, 65%, 0.5);
  border-radius: 2px;
  padding: 1em;
  margin-bottom: 2.5em;
}

.profile-links-article ul.profile-links {
  list-style: none;
  margin-bottom: unset;
  text-align: left;
}

.profile-links-article h2 {
  font-size: large;
  font-weight: 500;
  margin-bottom: 0.6em;
}

.profile-links-article ul.profile-links li {
  max-width: fit-content;
}

footer {
  color: var(--vt-c-indigo);
  text-align: center;
}
</style>
