import { fileURLToPath } from 'node:url';
import { setup, $fetch } from '@nuxt/test-utils-edge';
import { describe, it, expect } from 'vitest';

describe('basic', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('.', import.meta.url)),
    server: true,
  });

  it('renders the index page', async () => {
    const html = await $fetch('/');
    console.log(html);
    expect(html).toContain('<h1>Discover Campaigns</h1>');
  });
});
