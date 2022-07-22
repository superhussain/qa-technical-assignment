import { defineEventHandler } from 'h3';
import { getCurrentOrgObject } from '../lib/currentOrg';
import { getNotifications } from '../lib/notifications';

export default defineEventHandler((event) => {
  const org = getCurrentOrgObject();
  return getNotifications().map(({ seenBy, ...notif }) => ({
    ...notif,
    seen: seenBy.includes(org.id),
  }));
});
