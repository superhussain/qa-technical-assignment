<script setup>
const { data: auth } = await useAuth();
const { data } = await useFetch('/api/discover');
</script>

<template>
  <div>
    <h1>Discover Campaigns</h1>

    <div class="campaign-cards">
      <CampaignCard
        v-for="campaign in data"
        :key="campaign.id"
        :campaign="campaign"
      />
    </div>
  </div>
</template>

<style>
.campaign-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
}
</style>
