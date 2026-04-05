import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { ConferenceEvent, Speaker, Testimonial } from '../../models/event.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: ConferenceEvent[] = [];
  speakers: Speaker[] = [];
  testimonials: Testimonial[] = [];
  currentTestimonial = 0;

  stats = [
    { value: '15+', label: 'Expert Speakers' },
    { value: '5,000+', label: 'Global Attendees' },
    { value: '50+', label: 'Sessions & Workshops' },
    { value: '80+', label: 'Countries Represented' }
  ];

  whyAttend = [
    { icon: '🎓', title: 'World-Class Knowledge', description: 'Learn from pioneers shaping the future of AI, ML, and emerging technologies.' },
    { icon: '🌐', title: 'Global Networking', description: 'Connect with researchers, founders, and engineers from across the globe.' },
    { icon: '🚀', title: 'Innovation Exposure', description: 'Discover cutting-edge tools, frameworks, and research before they go mainstream.' },
    { icon: '📈', title: 'Career Acceleration', description: 'Gain insights and connections that propel your career to the next level.' },
    { icon: '🏆', title: 'Industry Recognition', description: 'Earn certificates and build credibility in the tech community.' },
    { icon: '💡', title: 'Actionable Insights', description: 'Walk away with strategies you can implement immediately in your work.' }
  ];

  speakerColors = [
    'linear-gradient(135deg, #00d4ff, #2196f3)',
    'linear-gradient(135deg, #7c3aed, #a855f7)',
    'linear-gradient(135deg, #ec4899, #f43f5e)',
    'linear-gradient(135deg, #10b981, #06b6d4)',
    'linear-gradient(135deg, #f59e0b, #ef4444)',
    'linear-gradient(135deg, #6366f1, #8b5cf6)',
    'linear-gradient(135deg, #14b8a6, #22d3ee)',
    'linear-gradient(135deg, #f97316, #fbbf24)'
  ];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getUpcomingEvents().subscribe(events => this.events = events);
    this.eventsService.getFeaturedSpeakers().subscribe(speakers => this.speakers = speakers);
    this.eventsService.getTestimonials().subscribe(testimonials => this.testimonials = testimonials);
  }

  getEventLink(event: ConferenceEvent): string {
    if (event.externalUrl) return event.externalUrl;
    return '/events/' + event.slug;
  }

  isExternal(event: ConferenceEvent): boolean {
    return !!event.externalUrl;
  }

  nextTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
  }
}
