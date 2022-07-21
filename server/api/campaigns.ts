import { defineEventHandler } from 'h3';
import campaigns from '../lib/campaigns';

export default defineEventHandler((event) => {
  return campaigns;
});
