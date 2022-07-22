import { defineEventHandler } from 'h3';
import { getOrgs } from '../lib/orgs';

export default defineEventHandler((event) => {
  return getOrgs();
});
