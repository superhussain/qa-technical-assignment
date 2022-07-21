import fs from 'fs';
import {
  rand,
  randUuid,
  randProductName,
  randProductDescription,
} from '@ngneat/falso';

const FILE_PATH = './campaigns.json';

export function generateCampaign(props = {}) {
  const id = randUuid();
  return {
    id,
    name: randProductName(),
    status: rand(['active', 'paused', 'expired']),
    image: `https://picsum.photos/seed/${id}/160`,
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

export function getCampaigns() {
  try {
    if (fs.existsSync(FILE_PATH)) {
      const raw = fs.readFileSync(FILE_PATH);
      return JSON.parse(raw);
    }

    const campaigns = campaignFactory();
    fs.writeFileSync(FILE_PATH, JSON.stringify(campaigns));
    return campaigns;
  } catch (error) {
    console.error(error);
  }
}

export default getCampaigns();
