import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial, SponsorTier, SpeakerBenefit } from '../models/event.model';
import eventsData from '../data/events.json';

@Injectable({ providedIn: 'root' })
export class EventsService {
  private events: any[] = eventsData.events;
  private testimonials: Testimonial[] = eventsData.testimonials as Testimonial[];
  private partners: any[] = (eventsData as any).partners || [];
  private trendingTopics: any[] = (eventsData as any).trendingTopics || [];
  private marketInsights: any = (eventsData as any).marketInsights || {};
  private sponsorTiersData: SponsorTier[] = (eventsData as any).sponsorTiers || [];
  private speakerBenefitsData: SpeakerBenefit[] = (eventsData as any).speakerBenefits || [];

  getEvents(): Observable<any[]> { return of(this.events); }

  getEventBySlug(slug: string): Observable<any | undefined> {
    return of(this.events.find(e => e.slug === slug));
  }

  getActiveEvents(): Observable<any[]> {
    return of(this.events.filter(e => e.status === 'active'));
  }

  getUpcomingEvents(): Observable<any[]> {
    return of(this.events.filter(e => e.status === 'active' || e.status === 'coming_soon'));
  }

  getTestimonials(): Observable<Testimonial[]> { return of(this.testimonials); }
  getPartners(): Observable<any[]> { return of(this.partners); }
  getTrendingTopics(): Observable<any[]> { return of(this.trendingTopics); }
  getMarketInsights(): Observable<any> { return of(this.marketInsights); }
  getSponsorTiers(): Observable<SponsorTier[]> { return of(this.sponsorTiersData); }
  getSpeakerBenefits(): Observable<SpeakerBenefit[]> { return of(this.speakerBenefitsData); }
}
