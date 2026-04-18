import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container page-hero-content">
        <span class="section-label">Legal</span>
        <h1>Refund & <span class="gradient-text">Cancellation Policy</span></h1>
        <p>Information regarding ticket purchases and cancellations.</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <div class="glass-card legal-card">
          <h2>1. General Policy</h2>
          <p>At AI Conf Connect, we are committed to delivering world-class virtual conference experiences. Because our events are digital and provide immediate access to proprietary platform networking, event materials, and session reservations, <strong>all ticket purchases and registrations are generally non-refundable</strong> unless explicitly stated otherwise.</p>

          <h2>2. Event Cancellation or Postponement</h2>
          <p>In the unlikely event that AI Conf Connect must cancel an entire conference (and not just individual speaker sessions), registered attendees will be offered the choice of:</p>
          <ul>
            <li>A full refund of the ticket price processed back to the original method of payment.</li>
            <li>A rollover of the ticket to a rescheduled date or a future conference of equal value.</li>
          </ul>

          <h2>3. Speaker or Schedule Changes</h2>
          <p>While we strive to deliver the advertised schedule, AI Conf Connect reserves the right to modify the event agenda, replace speakers, or alter session timings due to unforeseen circumstances. Such changes do not entitle attendees to a refund.</p>

          <h2>4. Technical Issues & Access</h2>
          <p>It is the responsibility of the attendee to ensure they have adequate internet connectivity and compatible hardware to access our virtual events. Refunds will not be issued for missed sessions due to local technical difficulties, failure to log in on time, or personal scheduling conflicts.</p>
          <p>If our primary hosting platform experiences a complete catastrophic failure preventing event broadcast, alternative access to recorded sessions will be provided, or partial/full refunds will be evaluated on a case-by-case basis.</p>

          <h2>5. Dispute Resolution</h2>
          <p>We kindly ask that you contact our support team to resolve any issues before initiating a chargeback with your bank or payment provider (such as Razorpay or Stripe). Initiating an unwarranted chargeback may result in a permanent ban from our platforms.</p>

          <h2>6. Contact Us</h2>
          <p>If you have any questions or concerns regarding a potential refund, please reach out to us within 48 hours of the issue occurring at:</p>
          <p><strong>Email:</strong> contact&#64;aiconfconnect.com</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { position: relative; padding: 110px 0 30px; overflow: hidden; }
    .page-hero-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(0, 229, 160, 0.05), transparent 60%),
                  radial-gradient(ellipse at 70% 50%, rgba(76, 201, 240, 0.03), transparent 60%),
                  var(--bg-primary);
    }
    .page-hero-content { position: relative; z-index: 1; text-align: center; }
    .page-hero-content h1 { font-size: 3.2rem; font-weight: 700; margin-bottom: 16px; letter-spacing: -0.03em; }
    
    .legal-content { max-width: 800px; margin: 0 auto; }
    .legal-card { padding: 48px; }
    .legal-card h2 { font-size: 1.5rem; color: white; margin: 32px 0 16px; font-family: 'Space Grotesk', sans-serif; }
    .legal-card h2:first-child { margin-top: 0; }
    .legal-card p, .legal-card li { font-size: 1.05rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 16px; }
    .legal-card ul { margin-bottom: 24px; padding-left: 20px; }
    .legal-card strong { color: var(--text-primary); }
    
    @media (max-width: 768px) {
      .legal-card { padding: 32px 24px; }
      .page-hero-content h1 { font-size: 2.5rem; }
    }
  `]
})
export class RefundComponent {}
