<script setup>
const route = useRoute();
let data = reactive({});
let pending = ref(false);

async function getCampaign(id) {
  try {
    pending = true;
    const res = await fetch(`/api/campaign/${id}`);
    const campaign = await res.json();
    data = campaign;
  } catch (err) {
    console.error(err);
  } finally {
    pending = false;
  }
}

await getCampaign(route.params.id);
</script>

<template>
  <div>
    <p v-if="pending">Loading...</p>
    <div v-else-if="data">
      <img :src="data.image" :alt="data.name" class="campaign-image" />
      <h1>{{ data.name }}</h1>
      <p>{{ data.description }}</p>

      <button>Apply to Campaign</button>

      <pre>{{ JSON.stringify(data, null, 2) }}</pre>
    </div>
  </div>
</template>

<style>
.campaign-image {
  width: 160px;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-bottom: 1.5rem;
}
</style>
