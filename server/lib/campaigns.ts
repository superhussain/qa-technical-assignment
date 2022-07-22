import fs from 'fs';
import {
  rand,
  randUuid,
  randProductName,
  randProductDescription,
  randAmount,
  randNumber,
  randCountryCode,
} from '@ngneat/falso';
import { Campaign } from '../../types';

const FILE_PATH = './data-campaigns.json';

export function generateCampaign(): Campaign {
  const id = randUuid();
  return {
    id,
    name: randProductName(),
    status: rand(['active', 'paused', 'expired']),
    image: `https://picsum.photos/seed/${id}/160`,
    description: randProductDescription(),
    cpa: randAmount(),
    countries: Array(randNumber({ min: 1, max: 5 }))
      .fill('')
      .map(() => randCountryCode()),
  };
}

export function campaignFactory(count = 10) {
  const campaigns: Campaign[] = [];
  for (let i = 0; i < count; i++) {
    campaigns.push(generateCampaign());
  }
  return campaigns;
}

export function getCampaignsFromFile() {
  if (!fs.existsSync(FILE_PATH)) {
    throw new Error(`File "${FILE_PATH}" does not exist`);
  }
  const raw = fs.readFileSync(FILE_PATH);
  return JSON.parse(raw) as Campaign[];
}

export function writeCampaignsToFile(campaigns: Campaign[]) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(campaigns));
  return campaigns;
}

export function getCampaigns() {
  try {
    if (fs.existsSync(FILE_PATH)) return getCampaignsFromFile();
    const campaigns = campaignFactory();
    return writeCampaignsToFile(campaigns);
  } catch (error) {
    console.error(error);
  }
}

export function updateCampaign(campaign: Campaign) {
  if (!campaign?.id) throw new Error('Campaign not passed');
  const campaigns = getCampaigns();
  const index = campaigns.findIndex(({ id }) => id === campaign.id);
  if (index === -1) throw new Error(`Campaign "${campaign.id}" not found`);
  campaigns[index] = campaign;
  writeCampaignsToFile(campaigns);
  return campaign;
}
