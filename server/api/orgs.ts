import { defineEventHandler } from 'h3';
import orgs from '../lib/orgs';

export default defineEventHandler((event) => {
  return orgs;
});
