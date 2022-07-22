import fs from 'fs';
import { uniq } from 'lodash-es';
import { rand, randUuid, randCompanyName, randNumber } from '@ngneat/falso';
import { getCampaigns } from './campaigns';
import { Org } from '../../types';

const FILE_PATH = './data-orgs.json';

export function generateOrg(): Org {
  const campaigns = getCampaigns();
  const id = randUuid();
  return {
    id,
    name: randCompanyName(),
    type: rand(['affiliate', 'advertiser']),
    status: 'approved',
    campaigns: uniq(
      Array(randNumber({ min: 1, max: 5 }))
        .fill('')
        .map(() => rand(campaigns.map(({ id }) => id)))
    ),
  };
}

export function orgFactory(count = 5) {
  const orgs: Org[] = [];
  for (let i = 0; i < count; i++) {
    orgs.push(generateOrg());
  }
  return orgs;
}

export function getOrgsFromFile() {
  if (!fs.existsSync(FILE_PATH)) {
    throw new Error(`File "${FILE_PATH}" does not exist`);
  }
  const raw = fs.readFileSync(FILE_PATH);
  return JSON.parse(raw) as Org[];
}

export function writeOrgsToFile(orgs: Org[]) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(orgs));
  return orgs;
}

export function getOrgs() {
  try {
    if (fs.existsSync(FILE_PATH)) return getOrgsFromFile();
    const orgs = orgFactory();
    return writeOrgsToFile(orgs);
  } catch (error) {
    console.error(error);
  }
}

export function updateOrg(org: Org) {
  if (!org?.id) throw new Error('Organization not passed');
  const orgs = getOrgs();
  const index = orgs.findIndex(({ id }) => id === org.id);
  if (index === -1) throw new Error(`Organization "${org.id}" not found`);
  orgs[index] = org;
  writeOrgsToFile(orgs);
  return org;
}

export default getOrgs();
