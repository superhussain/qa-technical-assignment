import { defineEventHandler, useBody } from 'h3';
import { updateCurrentOrg, getCurrentOrgObject } from '../lib/currentOrg';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const orgId = body.orgId as string;
  if (!orgId) throw new Error('Org ID not passed');
  updateCurrentOrg(orgId);
  return getCurrentOrgObject();
});
