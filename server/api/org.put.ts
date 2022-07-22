import { defineEventHandler, useBody } from 'h3';
import { uniq } from 'lodash-es';
import { getCampaigns } from '../lib/campaigns';
import { getOrgs, writeOrgsToFile } from '../lib/orgs';
import { getCurrentOrgObject } from '../lib/currentOrg';
import {
  getNotifications,
  generateNotification,
  writeNotificationsToFile,
} from '../lib/notifications';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const campaignId = body.campaignId as string;
  if (!campaignId) throw new Error('No campaign passed');

  const org = getCurrentOrgObject();
  const orgs = getOrgs();
  const campaigns = getCampaigns();
  const notifications = getNotifications();

  const index = campaigns.findIndex(({ id }) => id === campaignId);
  if (index === -1) throw new Error('Campaign not found');

  // assign campaign to org
  org.campaigns = uniq([...org.campaigns, campaignId]);
  const orgIndex = orgs.findIndex(({ id }) => id === org.id);
  orgs[orgIndex] = org;
  writeOrgsToFile(orgs);

  // create notification
  const notif = generateNotification({
    campaignId,
    type: 'application_approved',
    created: new Date().getTime(),
  });
  notifications.push(notif);
  writeNotificationsToFile(notifications);

  return org;
});
