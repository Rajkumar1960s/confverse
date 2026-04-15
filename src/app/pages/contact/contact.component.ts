import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container page-hero-content">
        <span class="section-label">Get In Touch</span>
        <h1>Let's Build the <span class="gradient-text">Future</span> Together</h1>
        <p>Whether you want to attend, speak, sponsor, or partner — we'd love to hear from you.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-form-wrapper glass-card">
            <h2>Send Us a Message</h2>
            <form (ngSubmit)="onSubmit()" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" [(ngModel)]="form.name" name="name" placeholder="Your name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" [(ngModel)]="form.email" name="email" placeholder="your@email.com" required>
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <select id="subject" [(ngModel)]="form.subject" name="subject">
                  <option value="">Select a topic</option>
                  <option value="attend">I want to attend an event</option>
                  <option value="speak">I want to become a speaker</option>
                  <option value="sponsor">Sponsorship inquiry</option>
                  <option value="partner">Partnership opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" [(ngModel)]="form.message" name="message" rows="5" placeholder="Tell us more..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                Send Message →
              </button>
            </form>
            <div class="form-success glass-card" *ngIf="submitted">
              <span class="success-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. Our team will get back to you shortly.</p>
            </div>
          </div>

          <div class="contact-info">
            <div class="info-card glass-card" *ngFor="let item of contactInfo">
              <div class="info-icon">{{ item.icon }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.value }}</p>
              <p class="info-sub" *ngIf="item.sub">{{ item.sub }}</p>
            </div>

            <div class="faq-section">
              <h3>Frequently Asked Questions</h3>
              <div class="faq-item glass-card" *ngFor="let faq of faqs" (click)="faq.open = !faq.open">
                <div class="faq-question">
                  <span>{{ faq.question }}</span>
                  <span class="faq-toggle">{{ faq.open ? '−' : '+' }}</span>
                </div>
                <div class="faq-answer" *ngIf="faq.open">
                  <p>{{ faq.answer }}</p>
                </div>
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
      background: radial-gradient(ellipse at 30% 50%, rgba(0, 229, 160, 0.06), transparent 60%),
                  radial-gradient(ellipse at 70% 50%, rgba(76, 201, 240, 0.04), transparent 60%),
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
      margin-bottom: 16px;
      letter-spacing: -0.03em;
    }
    .page-hero-content > p {
      font-size: 1.15rem;
      color: var(--text-secondary);
      max-width: 560px;
      margin: 0 auto;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      align-items: start;
    }
    .contact-form-wrapper {
      padding: 40px;
      position: relative;
    }
    .contact-form-wrapper h2 {
      font-size: 1.5rem;
      margin-bottom: 28px;
    }
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .form-group label {
      display: block;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-secondary);
      margin-bottom: 8px;
    }
    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: 12px 16px;
      border-radius: var(--radius-md);
      border: 1px solid var(--glass-border);
      background: rgba(255, 255, 255, 0.03);
      color: white;
      font-family: 'DM Sans', sans-serif;
      font-size: 0.92rem;
      outline: none;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      border-color: var(--accent-emerald);
      box-shadow: 0 0 0 3px rgba(0, 229, 160, 0.1);
    }
    .form-group select { cursor: pointer; }
    .form-group select option { background: var(--bg-primary); }
    .form-group textarea { resize: vertical; min-height: 120px; }
    .form-success {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: rgba(10, 14, 39, 0.98);
      border-radius: var(--radius-lg);
      padding: 40px;
    }
    .success-icon { font-size: 3rem; margin-bottom: 16px; }
    .form-success h3 { font-size: 1.3rem; margin-bottom: 8px; }
    .form-success p { color: var(--text-secondary); }

    .info-card {
      padding: 24px;
      margin-bottom: 16px;
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    .info-icon { font-size: 1.5rem; flex-shrink: 0; }
    .info-card h3 {
      font-size: 0.95rem;
      margin-bottom: 4px;
    }
    .info-card p {
      font-size: 0.9rem;
      color: var(--text-secondary);
    }
    .info-sub {
      font-size: 0.8rem !important;
      color: var(--text-tertiary) !important;
      margin-top: 4px;
    }
    .faq-section {
      margin-top: 32px;
    }
    .faq-section h3 {
      font-size: 1.2rem;
      margin-bottom: 16px;
    }
    .faq-item {
      margin-bottom: 12px;
      padding: 16px 20px;
      cursor: pointer;
    }
    .faq-question {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.92rem;
      font-weight: 600;
    }
    .faq-toggle {
      font-size: 1.2rem;
      color: var(--accent-emerald);
      width: 24px;
      text-align: center;
    }
    .faq-answer p {
      font-size: 0.88rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin-top: 12px;
    }

    @media (max-width: 768px) {
      .contact-grid { grid-template-columns: 1fr; }
      .form-row { grid-template-columns: 1fr; }
      .page-hero-content h1 { font-size: 2.5rem; }
    }
  `]
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  contactInfo = [
    { icon: '📧', title: 'Email', value: 'contact@confverse.com', sub: 'We respond within 24 hours' },
    { icon: '🤝', title: 'Partnerships', value: 'Anna@confverse.com', sub: 'For sponsorships and collaborations' },
    { icon: '🌍', title: 'Location', value: 'Global — 100% Virtual', sub: 'Our conferences are accessible worldwide' }
  ];

  faqs: any[] = [
    { question: 'How do I attend a conference?', answer: 'Simply visit the event page and register with your preferred pass. You\'ll receive login credentials via email before the event.', open: false },
    { question: 'Can I become a speaker?', answer: 'Absolutely! Fill out the contact form with "Become a Speaker" as the subject, include your bio and proposed topics, and our team will review your application.', open: false },
    { question: 'Are recordings available after the event?', answer: 'Yes! All registered attendees with Academic or Industry passes get access to session recordings for 6 months post-event.', open: false },
    { question: 'How can my company sponsor an event?', answer: 'We offer various sponsorship tiers with branding, virtual booth, and speaking opportunities. Contact us for a detailed sponsorship deck.', open: false }
  ];

  onSubmit() {
    if (this.form.name && this.form.email && this.form.message) {
      this.submitted = true;
    }
  }
}
