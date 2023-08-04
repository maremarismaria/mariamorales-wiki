<template>
  <main class="about">
    <article>
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} María Morales Padrón. All rights reserved.
      </p>
      <p>
        Visit
        <a href="https://www.mariamorales.dev/" target="_blank">www.mariamorales.dev</a> for
        more info.
      </p>
    </article>
  </main>
</template>

<style scoped>
main.about {
  margin-top: 3em;
  padding: 1em;
}

main.about article,
main.about article p {
  width: 100%;
  text-align: center;
  color: var(--vt-c-black-soft);
}
</style>
