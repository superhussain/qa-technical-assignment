export type CampaignStatus = 'active' | 'paused' | 'expired';

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  image: string;
  description: string;
  cpa: number;
  countries: string[];
}

export type OrgType = 'affiliate' | 'advertiser';
export type OrgStatus = 'approved';

export interface Org {
  id: string;
  name: string;
  type: string;
  status: string;
  campaigns: string[];
}

export type NotificationType = 'campaign_status_change' | 'cap_reached';
export type NotificationPriority = 'urgent' | 'normal' | 'low';

export interface Notification {
  id: string;
  campaignId: string;
  orgs: string[];
  type: NotificationType;
  priority: NotificationPriority;
  title: string;
  body: string;
  url: string;
  created: string;
  seenBy?: string[];
  seen?: boolean;
}
