import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '../models/event.model';
import eventsData from '../data/events.json';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: any[] = eventsData.events;
  private testimonials: Testimonial[] = eventsData.testimonials as Testimonial[];
  private partners: any[] = (eventsData as any).partners || [];

  getEvents(): Observable<any[]> {
    return of(this.events);
  }

  getActiveEvents(): Observable<any[]> {
    return of(this.events.filter(e => e.status === 'active'));
  }

  getUpcomingEvents(): Observable<any[]> {
    return of(this.events.filter(e => e.status === 'active' || e.status === 'coming_soon'));
  }

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }

  getPartners(): Observable<any[]> {
    return of(this.partners);
  }
}
