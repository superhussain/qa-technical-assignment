import fs from 'fs';
import { rand, randUuid, randPastDate } from '@ngneat/falso';
import { getCampaigns } from './campaigns';
import { getOrgs } from './orgs';
import { Notification, NotificationType } from '../../types';

const FILE_PATH = './data-notifications.json';

export function generateNotification(
  notif: Partial<Notification> = {}
): Notification {
  const campaigns = getCampaigns();
  const campaignId = notif?.campaignId || rand(campaigns.map(({ id }) => id));
  const campaign = campaigns.find(({ id }) => id === campaignId);

  const allOrgs = getOrgs();
  const orgs = allOrgs
    .filter((org) => org.campaigns.includes(campaignId))
    .map(({ id }) => id);

  const type =
    notif?.type ||
    (rand([
      'campaign_status_change',
      'cap_reached',
      'application_approved',
    ]) as NotificationType);

  const title = campaign.name;
  const body =
    type === 'campaign_status_change'
      ? `Campaign "${campaign.name}" status changed to "${campaign.status}".`
      : type === 'cap_reached'
      ? `Campaign "${campaign.name}" cap reached.`
      : type === 'application_approved'
      ? `You campaign application for "${campaign.name}" was approved!`
      : '';

  const id = randUuid();
  return {
    id,
    campaignId,
    orgs,
    type,
    priority: rand(['urgent', 'normal', 'low']),
    title,
    body,
    url: `/campaign/${campaignId}`,
    created: randPastDate().getTime(),
    seenBy: [],
    ...notif,
  };
}

export function notificationFactory(count = 10) {
  const notifications: Notification[] = [];
  for (let i = 0; i < count; i++) {
    notifications.push(generateNotification());
  }
  return notifications;
}

export function getNotificationsFromFile() {
  if (!fs.existsSync(FILE_PATH)) {
    throw new Error(`File "${FILE_PATH}" does not exist`);
  }
  const raw = fs.readFileSync(FILE_PATH);
  return JSON.parse(raw) as Notification[];
}

export function writeNotificationsToFile(notifications: Notification[]) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(notifications));
  return notifications;
}

export function getNotifications() {
  try {
    if (fs.existsSync(FILE_PATH)) return getNotificationsFromFile();
    const notifications = notificationFactory();
    return writeNotificationsToFile(notifications);
  } catch (error) {
    console.error(error);
  }
}

export function updateNotification(notification: Notification) {
  if (!notification?.id) throw new Error('Notificationanization not passed');
  const notifications = getNotifications();
  const index = notifications.findIndex(({ id }) => id === notification.id);
  if (index === -1)
    throw new Error(`Notificationanization "${notification.id}" not found`);
  notifications[index] = notification;
  writeNotificationsToFile(notifications);
  return notification;
}
