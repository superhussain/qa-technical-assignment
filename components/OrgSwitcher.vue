<script setup>
const { data: auth } = await useAuth();
const { data: orgs } = await useFetch('/api/orgs');

const handleChange = async (event) => {
  const orgId = event.target.value;
  const data = await $fetch('/api/auth', { method: 'put', body: { orgId } });
  await refreshNuxtData();
};
</script>

<template>
  <select class="org-switcher" :value="auth.id" @change="handleChange">
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
