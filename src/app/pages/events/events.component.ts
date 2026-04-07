import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container">
        <div class="page-hero-content">
          <span class="section-label">Browse Conferences</span>
          <h1>Our <span class="gradient-text">Conference</span> Lineup</h1>
          <p>Discover curated tech conferences on AI, ML, Web3, Healthcare, and more. Each conference offers deep-dive insights from the industry's top minds.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-bar">
          <button class="filter-btn" [class.active]="activeFilter === 'all'" (click)="setFilter('all')">All Events</button>
          <button class="filter-btn" [class.active]="activeFilter === 'active'" (click)="setFilter('active')">Registration Open</button>
          <button class="filter-btn" [class.active]="activeFilter === 'coming_soon'" (click)="setFilter('coming_soon')">Coming Soon</button>
        </div>

        <div class="events-list">
          <div class="event-list-card glass-card" *ngFor="let event of filteredEvents; let i = index">
            <div class="event-visual" [style.background]="gradients[i % gradients.length]">
              <span class="badge" [ngClass]="{'badge-active': event.status === 'active', 'badge-coming-soon': event.status === 'coming_soon'}">
                {{ event.status === 'active' ? '● Registration Open' : '◷ Coming Soon' }}
              </span>
              <div class="event-icon-big">{{ event.icon }}</div>
              <div class="visual-pattern">
                <div class="vp-ring" *ngFor="let r of [1,2,3]"></div>
              </div>
            </div>
            <div class="event-details">
              <div class="event-tags-row">
                <span class="event-tag" *ngFor="let tag of event.tags.slice(0, 3)">{{ tag }}</span>
              </div>
              <h2>{{ event.title }}</h2>
              <p class="event-subtitle">{{ event.subtitle }}</p>
              <p class="event-desc">{{ event.description }}</p>
              <div class="event-info-row">
                <div class="info-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {{ event.date | date:'MMMM dd, yyyy' }}{{ event.endDate ? ' — ' + (event.endDate | date:'MMMM dd, yyyy') : '' }}
                </div>
                <div class="info-chip">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  {{ event.format }}
                </div>
                <div class="info-chip" *ngIf="event.speakerCount">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  {{ event.speakerCount }}+ Speakers
                </div>
              </div>
              <div class="event-actions">
                <a *ngIf="event.status === 'active'" 
                   [href]="event.externalUrl ? event.externalUrl : null" 
                   [routerLink]="!event.externalUrl ? ['/events', event.slug] : null" 
                   [attr.target]="event.externalUrl ? '_blank' : null" 
                   class="btn btn-primary">
                  View Details & Register
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <span *ngIf="event.status === 'coming_soon'" class="btn btn-secondary disabled">🔔 Notify When Live</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative;
      padding: 160px 0 80px;
      overflow: hidden;
    }
    .page-hero-bg {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(76, 201, 240, 0.08), transparent 60%),
                  radial-gradient(ellipse at 70% 50%, rgba(184, 169, 250, 0.06), transparent 60%),
                  var(--bg-primary);
    }
    .page-hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    .page-hero-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      margin-bottom: 16px;
    }
    .page-hero-content p {
      font-size: 1.15rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    .filter-bar {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }
    .filter-btn {
      padding: 10px 24px;
      border-radius: var(--radius-full);
      background: var(--glass-bg);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      font-size: 0.88rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .filter-btn.active {
      background: rgba(76, 201, 240, 0.1);
      border-color: var(--accent-azure);
      color: var(--accent-azure);
    }
    .filter-btn:hover { border-color: rgba(76, 201, 240, 0.3); color: white; }

    .events-list {
      display: flex;
      flex-direction: column;
      gap: 28px;
    }
    .event-list-card {
      display: flex;
      overflow: hidden;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .event-list-card:hover {
      transform: translateY(-4px);
      border-color: rgba(76, 201, 240, 0.3);
    }
    .event-visual {
      width: 300px;
      min-height: 280px;
      flex-shrink: 0;
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 20px;
      overflow: hidden;
    }
    .event-icon-big {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4rem;
      opacity: 0.3;
    }
    .visual-pattern {
      position: absolute;
      right: -40px;
      bottom: -40px;
    }
    .vp-ring {
      position: absolute;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.06);
    }
    .vp-ring:nth-child(1) { width: 80px; height: 80px; right: 0; bottom: 0; }
    .vp-ring:nth-child(2) { width: 140px; height: 140px; right: -30px; bottom: -30px; }
    .vp-ring:nth-child(3) { width: 200px; height: 200px; right: -60px; bottom: -60px; }

    .event-details {
      padding: 32px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .event-tags-row {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }
    .event-tag {
      padding: 3px 10px;
      border-radius: var(--radius-full);
      background: rgba(76, 201, 240, 0.08);
      border: 1px solid rgba(76, 201, 240, 0.15);
      font-size: 0.7rem;
      color: var(--accent-azure);
      font-weight: 500;
    }
    .event-details h2 {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-bottom: 6px;
    }
    .event-subtitle {
      font-size: 0.95rem;
      color: var(--accent-lavender);
      margin-bottom: 12px;
      font-weight: 500;
    }
    .event-desc {
      font-size: 0.92rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 20px;
      flex: 1;
    }
    .event-info-row {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }
    .info-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.82rem;
      color: var(--text-tertiary);
    }
    .event-actions { display: flex; gap: 12px; }
    .event-actions .btn { display: inline-flex; align-items: center; gap: 8px; }
    .disabled { opacity: 0.5; pointer-events: none; }

    @media (max-width: 768px) {
      .event-list-card { flex-direction: column; }
      .event-visual { width: 100%; min-height: 160px; }
      .page-hero-content h1 { font-size: 2.5rem; }
    }
  `]
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  filteredEvents: any[] = [];
  activeFilter = 'all';

  gradients = [
    'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
    'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #065f46 100%)',
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    'linear-gradient(135deg, #0f172a 0%, #3b1f2b 50%, #5b2c6f 100%)',
    'linear-gradient(135deg, #0f172a 0%, #1b4332 50%, #2d6a4f 100%)',
    'linear-gradient(135deg, #0f172a 0%, #2c1810 50%, #4a3728 100%)'
  ];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
      this.filteredEvents = events;
    });
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    if (filter === 'all') {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter(e => e.status === filter);
    }
  }
}
