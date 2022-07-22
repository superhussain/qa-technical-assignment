import { defineEventHandler, useBody } from 'h3';
import { uniq } from 'lodash-es';
import { getCurrentOrgObject } from '../lib/currentOrg';
import {
  getNotifications,
  writeNotificationsToFile,
} from '../lib/notifications';

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const notificationId = body.notificationId as string;
  if (!notificationId) throw new Error('No notification passed');

  const org = getCurrentOrgObject();
  const notifications = getNotifications();

  const index = notifications.findIndex(({ id }) => id === notificationId);
  if (index === -1) throw new Error('Notification not found');

  notifications[index].seenBy = uniq([...notifications[index].seenBy, org.id]);
  writeNotificationsToFile(notifications);

  const { seenBy, ...notif } = notifications[index];
  notif.seen = seenBy.includes(org.id);
  return notif;
});
