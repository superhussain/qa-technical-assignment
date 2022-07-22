import { defineEventHandler } from 'h3';
import { getCurrentOrgObject } from '../lib/currentOrg';
import { getCampaigns } from '../lib/campaigns';

export default defineEventHandler((event) => {
  const org = getCurrentOrgObject();
  const campaigns = getCampaigns();
  return campaigns.filter(({ id }) => !org.campaigns.includes(id));
});
