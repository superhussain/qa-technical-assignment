import { defineEventHandler } from 'h3';
import { getCampaigns } from '../../lib/campaigns';

export default defineEventHandler((event) => {
  return getCampaigns().find(({ id }) => id === event.context.params.id);
});
