import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container page-hero-content">
        <span class="section-label">Legal</span>
        <h1>Platform <span class="gradient-text">Disclaimer</span></h1>
        <p>Important limitations of liability and warranties.</p>
      </div>
    </section>

    <section class="section">
      <div class="container legal-content">
        <div class="glass-card legal-card">
          <h2>1. General Information</h2>
          <p>The information provided by AI Conf Connect ("we," "us," or "our") on our websites (aiconfconnect.com, live.aiconfconnect.com) and during our virtual events is for general informational and educational purposes only. All information on the Site and distributed during events is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>

          <h2>2. Professional Advice Disclaimer</h2>
          <p>The Site and our events cannot and do not contain legal, financial, or strict professional technology advice. The technology and artificial intelligence landscapes are rapidly changing. Information presented by speakers, sponsors, and community members reflects their own views and experiences and should not be treated as a substitute for professional consultation.</p>

          <h2>3. External Links Disclaimer</h2>
          <p>Our platforms and event spaces may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.</p>

          <h2>4. Views & Opinions</h2>
          <p>Views and opinions expressed during our conferences by speakers, panelists, and attendees are entirely their own and do not necessarily reflect the official policy, position, or endorsement of AI Conf Connect or its organizing entity.</p>

          <h2>5. Technical & Availability Disclaimer</h2>
          <p>While we leverage modern, highly available cloud infrastructure, access to our virtual events relies on complex networking mechanisms. We do not guarantee continuous, uninterrupted, or perfectly error-free access to our streaming platforms. We will not be held liable for any loss of access, data, or technical disruptions experienced on the user's end.</p>

          <h2>6. Contact Us</h2>
          <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at:</p>
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
export class DisclaimerComponent {}
