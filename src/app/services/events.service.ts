import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConferenceEvent, Speaker, Testimonial } from '../models/event.model';
import eventsData from '../data/events.json';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: ConferenceEvent[] = eventsData.events as ConferenceEvent[];
  private testimonials: Testimonial[] = eventsData.testimonials as Testimonial[];
  private featuredSpeakers: Speaker[] = eventsData.featuredSpeakers as Speaker[];

  getEvents(): Observable<ConferenceEvent[]> {
    return of(this.events);
  }

  getActiveEvents(): Observable<ConferenceEvent[]> {
    return of(this.events.filter(e => e.status === 'active'));
  }

  getUpcomingEvents(): Observable<ConferenceEvent[]> {
    return of(this.events.filter(e => e.status === 'active' || e.status === 'coming_soon'));
  }

  getEventBySlug(slug: string): Observable<ConferenceEvent | undefined> {
    return of(this.events.find(e => e.slug === slug));
  }

  getFeaturedSpeakers(): Observable<Speaker[]> {
    return of(this.featuredSpeakers);
  }

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }
}
