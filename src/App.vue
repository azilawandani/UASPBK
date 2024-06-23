<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>
:root {
  --color-text: #ffffff;
  --color-border: #ec407a;
  --color-background: #ffebee;
  --section-gap: 2rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: var(--color-background);
  padding: var(--section-gap) 1rem;
  border-bottom: 2px solid var(--color-border);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  max-width: 150px;
}

nav {
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-border);
  font-weight: bold;
  border-bottom: 2px solid var(--color-border);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: var(--color-border);
  text-decoration: none;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

nav a:hover {
  color: var(--color-text);
  border-bottom: 2px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    max-width: 200px;
  }

  header .wrapper {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
