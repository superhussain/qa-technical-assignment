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
export type  = 'approved';

export interface Org {
  id: string;
  name: string;
  type: OrgType;
  status: OrgStatus;
  campaigns: string[];
}

export type NotificationType =
  | 'campaign_status_change'
  | 'cap_reached'
  | 'application_approved';
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
  created: number;
  seenBy?: string[];
  seen?: boolean;
}
