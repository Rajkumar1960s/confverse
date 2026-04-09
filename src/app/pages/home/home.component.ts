import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  events: any[] = [];
  testimonials: any[] = [];
  trendingTopics: any[] = [];
  marketInsights: any = {};
  sponsorTiers: any[] = [];
  speakerBenefits: any[] = [];
  currentTestimonial = 0;
  testimonialInterval: any;
  typedText = '';
  typewriterPhrases = ['Explore AI & Tech', 'Connect Globally', 'Lead Innovation', 'Shape the Future'];
  currentPhraseIndex = 0;
  isDeleting = false;
  charIndex = 0;
  typewriterInterval: any;
  isBrowser: boolean;

  speakerForm = { name: '', email: '', topic: '', bio: '' };
  speakerFormSubmitted = false;

  metrics = [
    { value: '8+', label: 'Conferences' },
    { value: '80+', label: 'Speakers' },
    { value: '25,000+', label: 'Attendees' },
    { value: '90+', label: 'Countries' }
  ];

  steps = [
    { icon: '🔍', title: 'Discover', desc: 'Browse trending AI conferences, market insights, and expert-led events across dozens of technology domains.' },
    { icon: '🎟️', title: 'Register', desc: 'Each conference has its own dedicated site with comprehensive details, speaker profiles, and secure registration.' },
    { icon: '🚀', title: 'Attend & Connect', desc: 'Join live sessions, interactive workshops, and networking lounges from anywhere in the world — no travel required.' }
  ];

  tickerItems = [
    { text: 'GPT-5 expected in Q3 2026 with 10x reasoning gains', color: '#00E5A0' },
    { text: 'Global AI market projected to reach $243B by year-end', color: '#4CC9F0' },
    { text: 'Agentic AI adoption surges 520% year over year', color: '#FFBE0B' },
    { text: 'EU AI Act enforcement begins across 27 member states', color: '#FF6B6B' },
    { text: 'Edge AI chip shipments surpass 1 billion units globally', color: '#B8A9FA' },
    { text: 'AI-driven drug discovery saves $150B in R&D costs', color: '#00E5A0' },
    { text: 'Multimodal foundation models enter production workflows', color: '#4CC9F0' },
    { text: '72% of enterprises now actively deploy AI solutions', color: '#FFBE0B' }
  ];

  cardGradients = [
    'linear-gradient(145deg, #0f1923 0%, #0d2818 60%, #143d22 100%)',
    'linear-gradient(145deg, #0f1923 0%, #1a1a2e 60%, #16213e 100%)',
    'linear-gradient(145deg, #0f1923 0%, #1e1b2e 60%, #2d1b4e 100%)',
    'linear-gradient(145deg, #0f1923 0%, #2a1a1a 60%, #3d1414 100%)',
    'linear-gradient(145deg, #0f1923 0%, #1a2333 60%, #0d3d5f 100%)',
    'linear-gradient(145deg, #0f1923 0%, #28221a 60%, #3d3214 100%)',
    'linear-gradient(145deg, #0f1923 0%, #1a332a 60%, #0d5f4a 100%)',
    'linear-gradient(145deg, #0f1923 0%, #2e1a1a 60%, #5f0d0d 100%)'
  ];

  avatarColors = [
    'linear-gradient(135deg, #00E5A0, #4CC9F0)',
    'linear-gradient(135deg, #B8A9FA, #4CC9F0)',
    'linear-gradient(135deg, #FFBE0B, #FF6B6B)',
    'linear-gradient(135deg, #4CC9F0, #00E5A0)'
  ];

  constructor(
    private eventsService: EventsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(e => this.events = e);
    this.eventsService.getTestimonials().subscribe(t => this.testimonials = t);
    this.eventsService.getTrendingTopics().subscribe(t => this.trendingTopics = t);
    this.eventsService.getMarketInsights().subscribe(m => this.marketInsights = m);
    this.eventsService.getSponsorTiers().subscribe(s => this.sponsorTiers = s);
    this.eventsService.getSpeakerBenefits().subscribe(b => this.speakerBenefits = b);

    if (this.isBrowser) {
      this.startTypewriter();
      this.testimonialInterval = setInterval(() => this.nextTestimonial(), 5000);
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.initScrollReveal();
    }
  }

  ngOnDestroy(): void {
    if (this.typewriterInterval) clearInterval(this.typewriterInterval);
    if (this.testimonialInterval) clearInterval(this.testimonialInterval);
  }

  startTypewriter(): void {
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 2000;

    const tick = () => {
      const currentPhrase = this.typewriterPhrases[this.currentPhraseIndex];
      if (!this.isDeleting) {
        this.typedText = currentPhrase.substring(0, this.charIndex + 1);
        this.charIndex++;
        if (this.charIndex === currentPhrase.length) {
          this.isDeleting = true;
          this.typewriterInterval = setTimeout(tick, pauseTime);
          return;
        }
      } else {
        this.typedText = currentPhrase.substring(0, this.charIndex - 1);
        this.charIndex--;
        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.typewriterPhrases.length;
        }
      }
      this.typewriterInterval = setTimeout(tick, this.isDeleting ? deleteSpeed : typeSpeed);
    };
    tick();
  }

  initScrollReveal(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
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

  onSpeakerSubmit(): void {
    if (this.speakerForm.name && this.speakerForm.email) {
      this.speakerFormSubmitted = true;
    }
  }
}
