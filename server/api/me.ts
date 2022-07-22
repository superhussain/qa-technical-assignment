import { defineEventHandler } from 'h3';
import { getCurrentOrgObject } from '../lib/currentOrg';

export default defineEventHandler((event) => {
  return getCurrentOrgObject();
});
