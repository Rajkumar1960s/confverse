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
  trendingTopics: any[] = [];
  marketInsights: any = {};
  currentTestimonial = 0;

  metrics = [
    { value: '6+', label: 'Conferences' },
    { value: '50+', label: 'Speakers' },
    { value: '5,000+', label: 'Attendees' },
    { value: '80+', label: 'Countries' }
  ];

  steps = [
    { icon: '🔍', title: 'Discover', desc: 'Browse trending AI conferences, market insights, and expert-led events across dozens of tech domains.' },
    { icon: '🎟️', title: 'Register', desc: 'Each conference has its own dedicated site with full details, speakers, agenda, and secure registration.' },
    { icon: '🚀', title: 'Attend & Connect', desc: 'Join live sessions, interactive workshops, and networking lounges from anywhere in the world.' }
  ];

  tickerItems = [
    { text: 'GPT-5 rumored for Q3 2026', color: '#00E5A0' },
    { text: 'AI market projected to reach $243B', color: '#4CC9F0' },
    { text: 'Agentic AI adoption up 520% YoY', color: '#FFBE0B' },
    { text: 'EU AI Act enforcement begins 2026', color: '#FF6B6B' },
    { text: 'Edge AI chip shipments surpass 1B units', color: '#B8A9FA' },
    { text: 'Healthcare AI saves $150B in drug R&D', color: '#00E5A0' },
    { text: 'Multimodal models enter production', color: '#4CC9F0' },
    { text: '72% of enterprises now use AI', color: '#FFBE0B' }
  ];

  cardGradients = [
    'linear-gradient(145deg, #0f1923 0%, #0d2818 60%, #143d22 100%)',
    'linear-gradient(145deg, #0f1923 0%, #1a1a2e 60%, #16213e 100%)',
    'linear-gradient(145deg, #0f1923 0%, #1e1b2e 60%, #2d1b4e 100%)',
    'linear-gradient(145deg, #0f1923 0%, #2a1a1a 60%, #3d1414 100%)',
    'linear-gradient(145deg, #0f1923 0%, #1a2333 60%, #0d3d5f 100%)',
    'linear-gradient(145deg, #0f1923 0%, #28221a 60%, #3d3214 100%)'
  ];

  avatarColors = [
    'linear-gradient(135deg, #00E5A0, #4CC9F0)',
    'linear-gradient(135deg, #B8A9FA, #4CC9F0)',
    'linear-gradient(135deg, #FFBE0B, #FF6B6B)',
    'linear-gradient(135deg, #4CC9F0, #00E5A0)'
  ];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(e => this.events = e);
    this.eventsService.getTestimonials().subscribe(t => this.testimonials = t);
    this.eventsService.getTrendingTopics().subscribe(t => this.trendingTopics = t);
    this.eventsService.getMarketInsights().subscribe(m => this.marketInsights = m);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
