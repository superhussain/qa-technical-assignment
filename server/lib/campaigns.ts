import {
  rand,
  randUuid,
  randProductName,
  randImg,
  randProductDescription,
} from '@ngneat/falso';

export function generateCampaign(props = {}) {
  return {
    id: randUuid(),
    name: randProductName(),
    status: rand(['active', 'paused', 'expired']),
    image: randImg(),
    description: randProductDescription(),
    ...props,
  };
}

export function campaignFactory(count = 10) {
  const campaigns = [];
  for (let i = 0; i < count; i++) {
    campaigns.push(generateCampaign());
  }
  return campaigns;
}

export default campaignFactory();
