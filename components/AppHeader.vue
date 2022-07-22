<script setup>
const { data: auth } = await useAuth();
</script>

<template>
  <header>
    <NuxtLink to="/">
      <img
        src="https://uploads-ssl.webflow.com/62cc826b4348eb1bf477e2ec/62cc826b4348eb091c77e310_full%20logo-dark-full%20bleed.svg"
        alt="Squaredance Logo"
      />
    </NuxtLink>

    <div>
      <button class="notif-button">🔔</button>
      <button class="org-button">👋 {{ auth.name }}</button>
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
}

.notif-button {
  margin-right: 0.5rem;
}
</style>
