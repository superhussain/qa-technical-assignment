import { setup, $fetch } from '@nuxt/test-utils';
import { describe, it, expect } from 'vitest';
import { Campaign, Org, Notification } from '../types';

describe('server', async () => {
  await setup({});

  it('"/api/me" includes expected properties', async () => {
    const res = (await $fetch('/api/me')) as Org;
    expect(res).toHaveProperty('id');
    expect(res).toHaveProperty('name');
    expect(res).toHaveProperty('status');
    expect(res).toHaveProperty('campaigns');
  });

  it('"/api/campaigns" includes expected properties', async () => {
    const res = (await $fetch('/api/campaigns')) as Campaign[];
    const campaign = res[0];
    expect(campaign).toHaveProperty('id');
    expect(campaign).toHaveProperty('name');
    expect(campaign).toHaveProperty('status');
    expect(campaign).toHaveProperty('cpa');
  });

  it('"/api/notifications" includes expected properties', async () => {
    const res = (await $fetch('/api/notifications')) as Notification[];
    const notification = res[0];
    expect(notification).toHaveProperty('id');
    expect(notification).toHaveProperty('campaignId');
    expect(notification).toHaveProperty('orgs');
    expect(notification).toHaveProperty('type');
    expect(notification).toHaveProperty('priority');
    expect(notification).toHaveProperty('title');
    expect(notification).toHaveProperty('body');
    expect(notification).toHaveProperty('url');
    expect(notification).toHaveProperty('created');
    expect(notification).toHaveProperty('seen');
  });
});
