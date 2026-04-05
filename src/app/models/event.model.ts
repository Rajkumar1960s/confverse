export interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  description: string;
  track?: string;
}

export interface AgendaDay {
  day: string;
  date: string;
  items: AgendaItem[];
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
  heroImage: string;
  cardImage: string;
  highlights: EventHighlight[];
  speakers: Speaker[];
  agenda: AgendaDay[];
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
  avatar: string;
}
