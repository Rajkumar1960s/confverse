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
        <h1><span class="gradient-text">Terms & Conditions</span></h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Terms & Conditions</li>
            </ol>
        </nav>
      </div>
    </section>

    <div class="container py-5 legal-container">
        <div class="text-center mb-5">
            <h2 class="mb-3"><span class="gradient-text">Agreement</span> Between You and AI Conf Connect</h2>
            <p class="lead text-muted">Welcome to AI Conf Connect and its virtual event platform. By accessing or using our websites (aiconfconnect.com, live.aiconfconnect.com), you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with these terms, please do not use our platform.</p>
        </div>
        
        <div class="last-updated">
            Last Updated: March 24, 2026
        </div>
        
        <div class="warning-box">
            <strong>Please Read Carefully:</strong> These Terms & Conditions govern your use of our platform and participation in our events. By continuing, you acknowledge and agree to these legally binding terms.
        </div>

        <div class="disclaimer-content">
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>1. Use of the Platform</h3>
                </div>
                <div class="disclaimer-body">
                    <p>By using our website and services, you agree to: Use the platform only for lawful purposes; Provide accurate and complete information during registration; Not engage in any activity that disrupts or interferes with the platform; Respect other participants, speakers, and organizers.</p>
                    <p class="highlight-text">We reserve the right to restrict or terminate access if these terms are violated.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>2. Event Registration & Access</h3>
                </div>
                <div class="disclaimer-body">
                    <p>Registration is required to attend our events. Access credentials are personal and non-transferable. Sharing login details with others is strictly prohibited. We reserve the right to deny or revoke access in case of misuse.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>3. Payments & Pricing</h3>
                </div>
                <div class="disclaimer-body">
                    <p>All ticket prices are listed in USD unless stated otherwise. Payments must be completed to secure event access. We reserve the right to change pricing at any time without prior notice. Taxes or additional charges may apply based on your location.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>4. Refund & Cancellation Policy</h3>
                </div>
                <div class="disclaimer-body">
                    <p>All registrations are non-refundable unless explicitly stated. In case of event cancellation by AI Conf Connect, a refund or alternative option may be provided. No refunds will be issued for failure to attend or access the event.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>5. Intellectual Property</h3>
                </div>
                <div class="disclaimer-body">
                    <p>All content on the platform, including Event materials, Speaker presentations, Videos and recordings, and Branding and design, is the property of AI Conf Connect or its respective owners. You may not copy, reproduce, distribute, or use any content without prior written permission.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>6. Code of Conduct</h3>
                </div>
                <div class="disclaimer-body">
                    <p>We are committed to providing a safe and respectful environment. Participants must not: Engage in harassment, discrimination, or abusive behavior; Promote spam, unsolicited marketing, or harmful content; Disrupt sessions or networking environments.</p>
                    <p>Violation may result in immediate removal without refund.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>7. Recording & Media Usage</h3>
                </div>
                <div class="disclaimer-body">
                    <p>By attending our events, you agree that: Sessions may be recorded for future use; Your participation (chat, audio, or video) may be included in recordings; We may use event content for marketing and promotional purposes.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>8. Limitation of Liability</h3>
                </div>
                <div class="disclaimer-body">
                    <p>AI Conf Connect shall not be liable for Technical issues or interruptions during virtual events, Loss of data, access, or connectivity issues, or Any indirect, incidental, or consequential damages.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>9. Privacy</h3>
                </div>
                <div class="disclaimer-body">
                    <p>Your use of our platform is also governed by our Privacy Policy. We are committed to protecting your personal information and using it responsibly.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>10. Modifications to Terms</h3>
                </div>
                <div class="disclaimer-body">
                    <p>We reserve the right to update or modify these Terms & Conditions at any time. Changes will be effective immediately upon posting on this page.</p>
                    <p class="highlight-text">Continued use of our platform indicates acceptance of any changes.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>11. Contact Information</h3>
                </div>
                <div class="disclaimer-body">
                    <p>If you have any questions about these Terms & Conditions, you can contact us at:</p>
                    <p class="highlight-text"><strong>contact&#64;aiconfconnect.com</strong></p>
                </div>
            </div>
            
            <div class="alert-custom text-center mt-4">
                <strong>Final Note:</strong> By registering for or attending any AI Conf Connect event, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
            </div>
        </div>
    </div>

  `,
  styles: [`

    .page-hero { position: relative; padding: 110px 0 30px; overflow: hidden; }
    .page-hero-bg {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(0, 229, 160, 0.05), transparent 60%),
                  radial-gradient(ellipse at 70% 50%, rgba(76, 201, 240, 0.03), transparent 60%),
                  var(--bg-primary, #06060A);
    }
    .page-hero-content { position: relative; z-index: 1; text-align: center; }
    .page-hero-content h1 { font-size: 3.2rem; font-weight: 700; margin-bottom: 16px; letter-spacing: -0.03em; color: white; }
    .breadcrumb a { color: var(--accent-emerald, #00e5a0); text-decoration: none; }
    .breadcrumb-item.active { color: #888; }
    .breadcrumb { display: flex; list-style: none; padding: 0; gap: 8px; justify-content: center; }
    .breadcrumb-item + .breadcrumb-item::before { content: '/'; color: #555; padding-right: 8px; }

    .legal-container { max-width: 900px; margin: 0 auto; padding: 20px; }
    .last-updated { font-size: 0.9rem; color: #888; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.75rem; margin-bottom: 1.5rem; display: inline-block; }
    
    .warning-box { background: rgba(255, 152, 0, 0.1); border-left: 4px solid #ff9800; padding: 1.2rem; border-radius: 8px; margin: 1.5rem 0; color: #ddd; }
    .warning-box strong { color: #ff9800; }
    
    .disclaimer-card { border-radius: 16px; margin-bottom: 1.5rem; border: 1px solid rgba(0, 229, 160, 0.1); background: rgba(255,255,255,0.02); backdrop-filter: blur(12px); overflow: hidden;}
    .disclaimer-header { background: rgba(0, 229, 160, 0.05); padding: 1rem 1.5rem; border-bottom: 1px solid rgba(0, 229, 160, 0.1); }
    .disclaimer-header h3 { margin: 0; font-size: 1.3rem; color: white; }
    .disclaimer-body { padding: 1.5rem; color: #A1A1A8; line-height: 1.7; }
    
    .highlight-text { background: rgba(0, 229, 160, 0.05); padding: 1rem; border-radius: 8px; font-weight: 500; color: #eee; margin-top: 1rem; }
    .alert-custom { background-color: rgba(0, 229, 160, 0.08); border: 1px solid rgba(0, 229, 160, 0.2); color: var(--accent-emerald, #00e5a0); padding: 1.5rem; border-radius: 16px; }
    
    .text-muted { color: #888 !important; }

  `]
})
export class TermsComponent {}
