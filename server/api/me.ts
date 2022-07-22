import { defineEventHandler } from 'h3';
import currentOrg from '../lib/currentOrg';

export default defineEventHandler((event) => {
  return currentOrg;
});
