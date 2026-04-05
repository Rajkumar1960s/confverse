import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { ConferenceEvent } from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="event">
      <!-- Hero -->
      <section class="detail-hero">
        <div class="detail-hero-bg" [style.background]="'linear-gradient(135deg, hsl(220, 60%, 12%), hsl(260, 60%, 10%))'"></div>
        <div class="container detail-hero-content">
          <span class="badge badge-virtual" style="margin-bottom: 16px;">{{ event.format }}</span>
          <h1>{{ event.title }}</h1>
          <p class="detail-subtitle">{{ event.subtitle }}</p>
          <div class="detail-meta">
            <span class="meta-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              {{ event.date | date:'MMMM dd, yyyy' }}{{ event.endDate ? ' — ' + (event.endDate | date:'MMMM dd, yyyy') : '' }}
            </span>
            <span class="meta-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ event.location }}
            </span>
          </div>
          <div class="detail-hero-actions" *ngIf="event.externalUrl">
            <a [href]="event.externalUrl" class="btn btn-primary">Visit Event Site →</a>
          </div>
        </div>
      </section>

      <!-- Overview -->
      <section class="section">
        <div class="container">
          <div class="detail-grid">
            <div class="detail-main">
              <div class="detail-block">
                <h2>Overview</h2>
                <p>{{ event.longDescription }}</p>
              </div>

              <!-- Highlights -->
              <div class="detail-block" *ngIf="event.highlights.length > 0">
                <h2>Key <span class="gradient-text">Highlights</span></h2>
                <div class="highlights-grid">
                  <div class="highlight-item glass-card" *ngFor="let h of event.highlights">
                    <span class="highlight-icon">{{ h.icon }}</span>
                    <h4>{{ h.title }}</h4>
                    <p>{{ h.description }}</p>
                  </div>
                </div>
              </div>

              <!-- Agenda -->
              <div class="detail-block" *ngIf="event.agenda.length > 0">
                <h2>Conference <span class="gradient-text">Agenda</span></h2>
                <div class="agenda-days">
                  <div class="agenda-day" *ngFor="let day of event.agenda">
                    <h3 class="day-header">
                      <span class="day-label">{{ day.day }}</span>
                      <span class="day-date">{{ day.date }}</span>
                    </h3>
                    <div class="timeline">
                      <div class="timeline-item" *ngFor="let item of day.items">
                        <div class="timeline-time">{{ item.time }}</div>
                        <div class="timeline-dot"></div>
                        <div class="timeline-content glass-card">
                          <span class="timeline-track badge badge-virtual" *ngIf="item.track">{{ item.track }}</span>
                          <h4>{{ item.title }}</h4>
                          <p class="timeline-speaker" *ngIf="item.speaker">🎤 {{ item.speaker }}</p>
                          <p>{{ item.description }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Speakers -->
              <div class="detail-block" *ngIf="event.speakers.length > 0">
                <h2>Featured <span class="gradient-text">Speakers</span></h2>
                <div class="detail-speakers-grid">
                  <div class="detail-speaker glass-card" *ngFor="let speaker of event.speakers; let i = index">
                    <div class="ds-avatar" [style.background]="'linear-gradient(135deg, hsl(' + (i * 45 + 180) + ', 70%, 50%), hsl(' + (i * 45 + 220) + ', 70%, 40%))'">
                      {{ getInitials(speaker.name) }}
                    </div>
                    <h4>{{ speaker.name }}</h4>
                    <p class="ds-title">{{ speaker.title }}</p>
                    <p class="ds-company">{{ speaker.company }}</p>
                    <p class="ds-bio">{{ speaker.bio }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <aside class="detail-sidebar">
              <div class="sidebar-card glass-card" *ngIf="event.whoShouldAttend && event.whoShouldAttend.length > 0">
                <h3>Who Should Attend</h3>
                <ul>
                  <li *ngFor="let item of event.whoShouldAttend">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <div class="sidebar-card glass-card cta-sidebar" *ngIf="event.externalUrl">
                <h3>Register Now</h3>
                <p>Secure your spot at {{ event.title }}. Limited seats available.</p>
                <a [href]="event.externalUrl" class="btn btn-primary" style="width: 100%">Get Your Pass →</a>
              </div>

              <div class="sidebar-card glass-card" *ngIf="event.tags.length > 0">
                <h3>Topics</h3>
                <div class="sidebar-tags">
                  <span class="event-tag" *ngFor="let tag of event.tags">{{ tag }}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>

    <div *ngIf="!event && !loading" class="not-found">
      <div class="container" style="text-align: center; padding: 200px 24px;">
        <h2>Event Not Found</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">The conference you're looking for doesn't exist.</p>
        <a routerLink="/events" class="btn btn-primary">Browse All Events</a>
      </div>
    </div>
  `,
  styles: [`
    .detail-hero {
      position: relative;
      padding: 160px 0 80px;
      overflow: hidden;
    }
    .detail-hero-bg {
      position: absolute;
      inset: 0;
    }
    .detail-hero-content {
      position: relative;
      z-index: 1;
    }
    .detail-hero h1 {
      font-size: 3rem;
      font-weight: 900;
      margin-bottom: 8px;
    }
    .detail-subtitle {
      font-size: 1.2rem;
      color: var(--accent-violet);
      margin-bottom: 20px;
      font-weight: 500;
    }
    .detail-meta {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }
    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.95rem;
      color: var(--text-secondary);
    }
    .detail-grid {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 40px;
      align-items: start;
    }
    .detail-block {
      margin-bottom: 56px;
    }
    .detail-block h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }
    .detail-block > p {
      font-size: 1.05rem;
      color: var(--text-secondary);
      line-height: 1.8;
    }
    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .highlight-item {
      padding: 24px;
    }
    .highlight-icon {
      font-size: 2rem;
      display: block;
      margin-bottom: 12px;
    }
    .highlight-item h4 {
      font-size: 0.95rem;
      margin-bottom: 8px;
    }
    .highlight-item p {
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }
    .day-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;
      padding-bottom: 12px;
      border-bottom: 1px solid var(--glass-border);
    }
    .day-label {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--accent-cyan);
    }
    .day-date {
      font-size: 0.9rem;
      color: var(--text-tertiary);
    }
    .timeline {
      position: relative;
      padding-left: 120px;
      margin-bottom: 40px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 108px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple));
      opacity: 0.3;
    }
    .timeline-item {
      position: relative;
      margin-bottom: 20px;
    }
    .timeline-time {
      position: absolute;
      left: -120px;
      top: 20px;
      width: 90px;
      text-align: right;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--accent-cyan);
    }
    .timeline-dot {
      position: absolute;
      left: -16px;
      top: 22px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--accent-cyan);
      box-shadow: 0 0 10px var(--accent-cyan);
    }
    .timeline-content {
      padding: 20px;
      margin-left: 8px;
    }
    .timeline-content h4 {
      font-size: 1rem;
      margin-bottom: 6px;
    }
    .timeline-speaker {
      font-size: 0.85rem;
      color: var(--accent-violet);
      margin-bottom: 6px;
    }
    .timeline-content p {
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }
    .timeline-track {
      margin-bottom: 8px;
      display: inline-block;
    }
    .detail-speakers-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .detail-speaker {
      padding: 28px 20px;
      text-align: center;
    }
    .ds-avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin: 0 auto 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Outfit', sans-serif;
      font-weight: 700;
      font-size: 1.3rem;
      color: white;
    }
    .ds-title {
      font-size: 0.82rem;
      color: var(--accent-cyan);
      margin-bottom: 2px;
    }
    .ds-company {
      font-size: 0.8rem;
      color: var(--text-tertiary);
      margin-bottom: 8px;
    }
    .ds-bio {
      font-size: 0.82rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }
    .sidebar-card {
      padding: 28px;
      margin-bottom: 20px;
    }
    .sidebar-card h3 {
      font-size: 1.1rem;
      margin-bottom: 16px;
    }
    .sidebar-card ul {
      list-style: none;
    }
    .sidebar-card li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.9rem;
      color: var(--text-secondary);
      padding: 8px 0;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }
    .sidebar-card li:last-child { border-bottom: none; }
    .cta-sidebar {
      background: rgba(124, 58, 237, 0.05);
      border-color: rgba(124, 58, 237, 0.2);
    }
    .cta-sidebar p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 20px;
      line-height: 1.6;
    }
    .sidebar-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .event-tag {
      padding: 4px 12px;
      border-radius: var(--radius-full);
      background: rgba(0, 212, 255, 0.08);
      border: 1px solid rgba(0, 212, 255, 0.15);
      font-size: 0.75rem;
      color: var(--accent-cyan);
    }

    @media (max-width: 992px) {
      .detail-grid { grid-template-columns: 1fr; }
      .detail-speakers-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .detail-hero h1 { font-size: 2rem; }
      .highlights-grid { grid-template-columns: 1fr; }
      .timeline { padding-left: 0; }
      .timeline::before { display: none; }
      .timeline-time { position: static; text-align: left; width: auto; margin-bottom: 4px; }
      .timeline-dot { display: none; }
      .timeline-content { margin-left: 0; }
      .detail-speakers-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class EventDetailComponent implements OnInit {
  event: ConferenceEvent | null = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.eventsService.getEventBySlug(slug).subscribe(event => {
        this.event = event || null;
        this.loading = false;
      });
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
  }
}
