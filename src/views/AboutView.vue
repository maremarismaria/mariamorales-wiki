<script setup lang="ts">
defineOptions({
  name: "AboutView",
});
</script>

<template>
  <main class="about">
    <article>
      <img class="profile-picture" src="maria.jpg" alt="María Morales profile picture" width="140" height="140">
      <h1 class="profile-name">María Morales</h1>
      <p class="profile-bio">
        Spanish Philologist, Front-End Engineer, UX/UI & More.
      </p>
      <a href='https://ko-fi.com/K3K2LNBAX' target='_blank'>
        <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' border='0'
          alt='Buy Me a Coffee at ko-fi.com' />
      </a>
    </article>
  </main>
  <footer>
    <p>
        &copy; {{ new Date().getFullYear() }} María Morales. All rights reserved.
    </p>
    <p>
      Visit
      <a href="http://mariamorales.site/" target="_blank">www.mariamorales.site</a> for
      more info.
    </p>
  </footer>
</template>

<style scoped>
main.about,
footer {
  margin-top: 6em;
  padding: 1em;
}

main.about img.profile-picture {
  border-radius: 50%;
  margin-bottom: 1.2em;
}

main.about h1.profile-name {
  letter-spacing: 0.1em;
  font-weight: 400;
  color: var(--vt-c-indigo);
}

main.about p.profile-bio {
  margin-bottom: 1.8em;
  color: #696969;
}

main.about article,
p {
  width: 100%;
  text-align: center;
  color: var(--vt-c-black-soft);
}

main.about article > * {
  margin-bottom: 0.4em;
}

footer {
  color: var(--vt-c-indigo);
}
</style>
