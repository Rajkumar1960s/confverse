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
        <h1><span class="gradient-text">Disclaimer</span></h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Disclaimer</li>
            </ol>
        </nav>
      </div>
    </section>

    <div class="container py-5 legal-container">
        <div class="text-center mb-5">
            <h2 class="mb-3"><span class="gradient-text">Important Legal</span> Information</h2>
            <p class="lead text-muted">The information provided on AI Conf Connect and its associated platforms is for general informational and educational purposes only. By using our website and participating in our events, you agree to this Disclaimer.</p>
        </div>
        
        <div class="last-updated">
            Last Updated: March 24, 2026
        </div>
        
        <div class="warning-box">
            <strong>Please Read Carefully:</strong> This Disclaimer contains important information about the limitations of liability and the nature of information provided on our platform.
        </div>

        <div class="disclaimer-content">
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>1. General Information</h3>
                </div>
                <div class="disclaimer-body">
                    <p>All content shared through our platform, including event sessions, speaker presentations, blogs, and materials, is intended to provide insights and knowledge.</p>
                    <p>While we strive for accuracy and relevance, we make no guarantees regarding Completeness, Reliability, Accuracy, or Timeliness.</p>
                    <p class="highlight-text">Any reliance you place on this information is strictly at your own risk.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>2. No Professional Advice</h3>
                </div>
                <div class="disclaimer-body">
                    <p>The content presented at our events or on our platform does not constitute Legal advice, Financial advice, Investment advice, or Medical or professional advice.</p>
                    <p>You should consult qualified professionals before making decisions based on any information provided.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>3. External Links & Third-Party Content</h3>
                </div>
                <div class="disclaimer-body">
                    <p>Our platform may include links to external websites, tools, or services. We do not Control or endorse third-party content nor Guarantee their accuracy or reliability.</p>
                    <p>We are not responsible for any loss or damage caused by third-party services.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>4. Event Content & Speaker Views</h3>
                </div>
                <div class="disclaimer-body">
                    <p>Opinions expressed by speakers, panelists, or participants are their own and do not necessarily reflect the views of AI Conf Connect.</p>
                    <p>We are not responsible for Statements made by speakers, Accuracy of third-party content, or Outcomes resulting from implementation of shared ideas.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>5. Technical Limitations</h3>
                </div>
                <div class="disclaimer-body">
                    <p>As our events are conducted virtually, we do not guarantee Uninterrupted access, Error-free streaming, or Compatibility across all devices.</p>
                    <p>We are not liable for technical issues such as Internet disruptions, Platform downtime, or Device-related problems.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>6. Limitation of Liability</h3>
                </div>
                <div class="disclaimer-body">
                    <p>To the fullest extent permitted by law, AI Conf Connect shall not be held liable for Any direct or indirect loss, Business or financial loss, Data loss or interruption, or Any damages arising from use of our platform or event participation.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>7. Changes to This Disclaimer</h3>
                </div>
                <div class="disclaimer-body">
                    <p>We may update this Disclaimer at any time without prior notice.</p>
                    <p class="highlight-text">Continued use of our platform indicates acceptance of any changes.</p>
                </div>
            </div>
            
            <div class="disclaimer-card glass-card">
                <div class="disclaimer-header">
                    <h3>8. Contact Us</h3>
                </div>
                <div class="disclaimer-body">
                    <p>If you have any questions regarding this Disclaimer, you can contact us at:</p>
                    <p class="highlight-text"><strong>contact&#64;aiconfconnect.com</strong></p>
                </div>
            </div>
            
            <div class="alert-custom text-center mt-4">
                <strong>Final Note:</strong> By accessing our website or participating in any AI Conf Connect event, you acknowledge that you have read, understood, and agreed to this Disclaimer.
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
export class DisclaimerComponent {}
