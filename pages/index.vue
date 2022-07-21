<script setup>
const { data } = await useFetch('/api/campaigns');
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

    <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  </div>
</template>

<style>
.campaign-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
}
</style>
