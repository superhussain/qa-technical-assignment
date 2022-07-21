<script setup>
const route = useRoute();
const { data } = await useFetch(() => `/api/campaign/${route.params.id}`);
console.log(data);
</script>

<template>
  <div>
    <code>{{ JSON.stringify(data, null, 2) }}</code>
  </div>
</template>
