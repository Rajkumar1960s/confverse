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
  allSpeakers: any[] = [];
  topSessions: any[] = [];
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

  // Animated counters
  counters = [
    { target: 8, current: 0, suffix: '+', label: 'Conferences', icon: '🎤' },
    { target: 80, current: 0, suffix: '+', label: 'Speakers', icon: '👥' },
    { target: 25000, current: 0, suffix: '+', label: 'Attendees', icon: '🌍' },
    { target: 90, current: 0, suffix: '+', label: 'Countries', icon: '🗺️' }
  ];
  countersAnimated = false;

  // Countdown
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  countdownInterval: any;

  whyAttend = [
    { icon: '🎓', title: 'World-Class Content', description: 'Sessions curated by AI researchers from leading global institutions and Fortune 500 companies.' },
    { icon: '🌍', title: 'Global Networking', description: 'Connect with 25,000+ professionals across 90+ countries in live networking lounges.' },
    { icon: '🔧', title: 'Hands-On Learning', description: 'Interactive workshops and live demos — not just lectures. Build real skills.' },
    { icon: '📊', title: 'Industry Insights', description: 'Real-world case studies from production AI deployments at scale.' },
    { icon: '🏆', title: 'Certification', description: 'Earn recognized certificates of participation to boost your professional profile.' },
    { icon: '💼', title: 'Career Growth', description: 'Access exclusive job boards, mentorship programs, and growth opportunities.' }
  ];

  participants = {
    count: '25,000+',
    countries: '90+',
    tagline: 'Join a global community of AI professionals, researchers, and technology leaders.',
    roles: ['AI Engineers', 'Data Scientists', 'Researchers', 'CTOs', 'Product Managers', 'Startup Founders']
  };

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
    'linear-gradient(135deg, #4CC9F0, #00E5A0)',
    'linear-gradient(135deg, #FF6B6B, #B8A9FA)',
    'linear-gradient(135deg, #00E5A0, #B8A9FA)'
  ];

  speakerColors = [
    'linear-gradient(135deg, #00E5A0, #00B87A)',
    'linear-gradient(135deg, #FFBE0B, #FF8A00)',
    'linear-gradient(135deg, #FF6B6B, #E83E8C)',
    'linear-gradient(135deg, #4CC9F0, #3A86FF)',
    'linear-gradient(135deg, #B8A9FA, #8338EC)',
    'linear-gradient(135deg, #00E5A0, #4CC9F0)'
  ];

  constructor(
    private eventsService: EventsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(e => {
      this.events = e;
      // Aggregate all speakers from all events
      this.allSpeakers = e.reduce((acc: any[], ev: any) => {
        if (ev.speakers && ev.speakers.length > 0) {
          return acc.concat(ev.speakers);
        }
        return acc;
      }, []);
      // Aggregate sessions from events that have them
      const evWithSessions = e.find((ev: any) => ev.sessions && ev.sessions.length > 0);
      this.topSessions = evWithSessions ? evWithSessions.sessions : [];
      // Start countdown for next active event
      const active = e.find((ev: any) => ev.status === 'active');
      if (active && active.date && this.isBrowser) {
        this.startCountdown(new Date(active.date));
      }
    });
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
    if (this.countdownInterval) clearInterval(this.countdownInterval);
  }

  startCountdown(targetDate: Date): void {
    const update = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) {
        this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return;
      }
      this.countdown = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000)
      };
    };
    update();
    this.countdownInterval = setInterval(update, 1000);
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
          // Trigger counter animation for stats section
          if (entry.target.classList.contains('stats-section') && !this.countersAnimated) {
            this.countersAnimated = true;
            this.animateCounters();
          }
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
  }

  animateCounters(): void {
    this.counters.forEach(c => {
      const duration = 2000;
      const steps = 60;
      const increment = c.target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= c.target) {
          c.current = c.target;
          clearInterval(timer);
        } else {
          c.current = Math.floor(current);
        }
      }, duration / steps);
    });
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
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

  padZero(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }

  formatCount(n: number): string {
    if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
    return n.toString();
  }

  async sendEmailJS(payload: any, successCallback: () => void) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_be1d1ps', // injected automatically
          template_id: 'template_2fiohpg', // injected automatically
          user_id: 'nvgXJf3yFE5SfZ0ZH',
          template_params: payload
        })
      });
      if (response.ok) {
        successCallback();
      }
    } catch (e) {
      console.error('EmailJS Error:', e);
    }
  }

  onSpeakerSubmit(): void {
    if (this.speakerForm.name && this.speakerForm.email) {
      const payload = {
        name: this.speakerForm.name,
        email: this.speakerForm.email,
        interest: 'Becoming a Speaker',
        message: 'Bio/Topic: ' + this.speakerForm.bio
      };
      this.sendEmailJS(payload, () => {
        this.speakerFormSubmitted = true;
        this.speakerForm = { name: '', email: '', topic: '', bio: '' };
      });
    }
  }
}
