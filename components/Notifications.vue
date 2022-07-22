<script setup>
let open = ref(false);
const toggleOpen = () => (open.value = !open.value);
const { data: notifications } = await useFetch('/api/notifications');
</script>

<template>
  <div class="notif-wrapper">
    <button class="notif-button" @click="toggleOpen">🔔</button>

    <div class="notif-list" :class="{ ['open']: open }">
      <NuxtLink
        v-for="notif in notifications"
        :key="notif.id"
        :to="notif.url"
        class="notif-item"
      >
        <span class="notif-title">{{ notif.title }}</span>
        <p class="notif-body">{{ notif.body }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style>
.notif-wrapper {
  display: inline-block;
}

.notif-button {
  margin-right: 0.5rem;
}

.notif-list {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  background: white;
  width: 300px;
  max-width: 100%;
  top: 3.75rem;
  right: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transform: translateY(-1rem);
  transition: 150ms ease-in-out;
}

.notif-list.open {
  opacity: 1;
  pointer-events: all;
  transform: translateY(0);
}

.notif-item {
  display: block;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  color: #222;
  text-decoration: none;
}

.notif-item:last-child {
  border: none;
}

.notif-title {
  font-weight: bold;
}

.notif-body {
  margin: 0;
  margin-top: 0.5rem;
}
</style>
