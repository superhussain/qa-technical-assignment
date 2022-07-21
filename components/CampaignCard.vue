<script setup>
const props = defineProps({
  campaign: Object,
});
</script>

<template>
  <article class="campaign-card">
    <NuxtLink :to="`/campaign/${campaign.id}`">
      <img :src="campaign.image" :alt="campaign.name" />
      <span>{{ campaign.name }}</span>
    </NuxtLink>
  </article>
</template>

<style>
.campaign-card img {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  object-fit: cover;
}

.campaign-card a {
  text-decoration: none;
  color: #222;
  display: flex;
  flex-direction: column;
}

.campaign-card span {
  display: inline-block;
  margin-top: 0.5rem;
}
</style>
