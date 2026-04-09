export interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface EventHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface ConferenceEvent {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  endDate?: string;
  location: string;
  format: 'Virtual' | 'In-Person' | 'Hybrid';
  status: 'active' | 'coming_soon' | 'past';
  subdomain?: string;
  externalUrl?: string;
  description: string;
  longDescription: string;
  icon?: string;
  speakerCount?: number;
  sessionCount?: number;
  attendeeCount?: string;
  heroImage?: string;
  cardImage?: string;
  highlights: EventHighlight[];
  speakers: Speaker[];
  pricing?: PricingTier[];
  whoShouldAttend?: string[];
  tags: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

export interface SponsorTier {
  name: string;
  price: string;
  color: string;
  benefits: string[];
}

export interface SpeakerBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface MarketInsight {
  value: string;
  year: string;
  growth: string;
  label: string;
}

export interface SectorData {
  name: string;
  adoption: number;
  color: string;
}
