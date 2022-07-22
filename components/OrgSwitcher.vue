<script setup>
const { data: auth } = await useAuth();
const { data: orgs } = await useFetch('/api/orgs');
</script>

<template>
  <select class="org-switcher" :value="auth.id">
    <option v-for="org in orgs" :key="org.id" :value="org.id">
      {{ org.name }}
    </option>
  </select>
</template>

<style>
.org-switcher {
  padding: 0.25rem;
}
</style>
