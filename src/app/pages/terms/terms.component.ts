import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container page-hero-content">
        <span class="section-label">Legal</span>
        <h1>Terms & <span class="gradient-text">Conditions</span></h1>
        <p>The rules and regulations for the use of our platform.</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <div class="glass-card legal-card">
          <h2>1. Agreement to Terms</h2>
          <p>Welcome to AI Conf Connect and our virtual event platforms (collectively referred to as “we”, “our”, or “us”). By accessing or using our websites (aiconfconnect.com, live.aiconfconnect.com), you agree to comply with and be bound by these Terms & Conditions. If you do not agree with these terms, please do not use our platform.</p>

          <h2>2. Use of the Platform</h2>
          <p>By using our website and services, you agree to:</p>
          <ul>
            <li>Use the platform only for lawful purposes.</li>
            <li>Provide accurate and complete information during registration.</li>
            <li>Not engage in any activity that disrupts or interferes with the platform, servers, or networks.</li>
            <li>Respect other participants, speakers, and organizers during virtual networking and Q&A sessions.</li>
          </ul>
          <p>We reserve the right to restrict or terminate access if these terms are violated, without notice or refund.</p>

          <h2>3. Event Registration & Access</h2>
          <ul>
            <li>Registration and successful payment matching our systems are required to attend.</li>
            <li>Access credentials (like streaming links and platform logins) are personal and strictly non-transferable.</li>
            <li>Sharing login details with others or broadcasting the event publicly is strictly prohibited.</li>
          </ul>

          <h2>4. Payments & Pricing</h2>
          <p>All ticket prices are listed in USD (or your local equivalent via our payment gateway) unless stated otherwise. Payments must be fully completed to secure event access. We reserve the right to change event pricing at any time without prior notice. Taxes or additional international processing fees may apply based on your location and payment method.</p>

          <h2>5. Intellectual Property</h2>
          <p>All content distributed on the platform, including but not limited to event materials, speaker presentations, videos, recordings, branding, and design, is the property of AI Conf Connect or its respective licensors. You may not copy, reproduce, distribute, or commercially exploit any content without prior written permission.</p>

          <h2>6. Code of Conduct</h2>
          <p>We are committed to providing a safe, inclusive, and professional environment. Participants must not engage in harassment, discrimination, abusive behavior, or send spam/unsolicited marketing to other attendees. Violation will result in immediate removal without refund.</p>

          <h2>7. Recording & Media</h2>
          <p>By attending our events, you agree that sessions may be recorded for future use. Your participation in public channels (chat, live Q&A) may be included in these recordings, which may be repurposed for educational and promotional use.</p>

          <h2>8. Contact Information</h2>
          <p>If you have any questions about these Terms & Conditions, you can contact us at:</p>
          <p><strong>Email:</strong> contact&#64;aiconfconnect.com</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { position: relative; padding: 140px 0 60px; overflow: hidden; }
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
export class TermsComponent {}
