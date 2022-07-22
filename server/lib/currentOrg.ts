import fs from 'fs';
import { getOrgs } from './orgs';

const FILE_PATH = './data-currentOrg.json';

export function getCurrentOrgFromFile() {
  if (!fs.existsSync(FILE_PATH)) {
    throw new Error(`File "${FILE_PATH}" does not exist`);
  }
  const raw = fs.readFileSync(FILE_PATH);
  return JSON.parse(raw) as string;
}

export function writeCurrentOrgToFile(orgId: string) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(orgId));
  return orgId;
}

export function getCurrentOrg() {
  try {
    if (fs.existsSync(FILE_PATH)) return getCurrentOrgFromFile();
    const orgs = getOrgs();
    return writeCurrentOrgToFile(orgs[0].id);
  } catch (error) {
    console.error(error);
  }
}

export function getCurrentOrgObject() {
  const orgId = getCurrentOrg();
  const orgs = getOrgs();
  return orgs.find(({ id }) => id === orgId);
}

export function updateCurrentOrg(orgId: string) {
  if (!orgId) throw new Error('Org ID not passed');
  const orgs = getOrgs();
  const index = orgs.findIndex(({ id }) => id === orgId);
  if (index === -1) throw new Error(`Organization "${orgId}" not found`);
  return writeCurrentOrgToFile(orgId);
}

export default getCurrentOrgObject();
