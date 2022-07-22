import { defineEventHandler } from 'h3';
import currentOrg from '../lib/currentOrg';
import notifications from '../lib/notifications';

export default defineEventHandler((event) => {
  return notifications.map(({ seenBy, ...notif }) => ({
    ...notif,
    seen: seenBy.includes(currentOrg.id),
  }));
});
