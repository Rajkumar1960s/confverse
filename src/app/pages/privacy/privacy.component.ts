import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container page-hero-content">
        <span class="section-label">Legal</span>
        <h1>Privacy <span class="gradient-text">Policy</span></h1>
        <p>How we collect, use, and protect your data.</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <div class="glass-card legal-card">
          <h2>1. Introduction</h2>
          <p>Welcome to AI Conf Connect and our virtual event platforms (collectively referred to as “we”, “our”, or “us”). We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our platforms and tell you about your privacy rights.</p>

          <h2>2. The Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you, including:</p>
          <ul>
            <li><strong>Identity Data:</strong> First name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> Billing address, email address, and telephone numbers.</li>
            <li><strong>Financial Data:</strong> Payment card details are processed entirely by our authorized payment gateways (e.g., Razorpay, Stripe) and are not stored on our servers.</li>
            <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, and operating system.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To process your registration and issue event access credentials.</li>
            <li>To manage payments, fees, and charges.</li>
            <li>To provide you with updates regarding the conference schedule, speakers, and networking opportunities.</li>
            <li>To improve our platform, products/services, marketing, and customer relationships.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.</p>

          <h2>5. Third-Party Links & Services</h2>
          <p>Our platform may include links to third-party websites, plug-ins, streaming services, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>

          <h2>6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
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
export class PrivacyComponent {}
