import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { Testimonial } from '../../models/event.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: any[] = [];
  testimonials: Testimonial[] = [];
  partners: any[] = [];
  currentTestimonial = 0;

  stats = [
    { value: '6+', label: 'Conferences' },
    { value: '50+', label: 'Expert Speakers' },
    { value: '5,000+', label: 'Global Attendees' },
    { value: '80+', label: 'Countries' }
  ];

  steps = [
    { icon: '🔍', title: 'Browse', desc: 'Explore our curated lineup of virtual conferences across AI, ML, Web3, and more.' },
    { icon: '🎟️', title: 'Register', desc: 'Pick your pass and secure your spot — each conference has its own registration on the event site.' },
    { icon: '🚀', title: 'Attend & Connect', desc: 'Join live sessions, workshops, and networking lounges from anywhere in the world.' }
  ];

  cardGradients = [
    'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
    'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #065f46 100%)',
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    'linear-gradient(135deg, #0f172a 0%, #3b1f2b 50%, #5b2c6f 100%)',
    'linear-gradient(135deg, #0f172a 0%, #1b4332 50%, #2d6a4f 100%)',
    'linear-gradient(135deg, #0f172a 0%, #2c1810 50%, #4a3728 100%)'
  ];

  speakerColors = [
    'linear-gradient(135deg, #00d4ff, #2196f3)',
    'linear-gradient(135deg, #7c3aed, #a855f7)',
    'linear-gradient(135deg, #ec4899, #f43f5e)',
    'linear-gradient(135deg, #10b981, #06b6d4)'
  ];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => this.events = events);
    this.eventsService.getTestimonials().subscribe(testimonials => this.testimonials = testimonials);
    this.eventsService.getPartners().subscribe(partners => this.partners = partners);
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
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
