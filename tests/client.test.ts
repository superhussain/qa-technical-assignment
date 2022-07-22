import { setup, $fetch } from '@nuxt/test-utils';
import { describe, it, expect } from 'vitest';

describe('client', async () => {
  await setup({});

  it('renders the index page', async () => {
    const html = await $fetch('/');
    expect(html).toContain('<h1>Discover Campaigns</h1>');
  });
});
