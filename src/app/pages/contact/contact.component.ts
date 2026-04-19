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
        <span class="section-label">Connect</span>
        <h1>Let's <span class="gradient-text">Connect</span></h1>
        <p>If you have a question, an idea, or want to partner with us, we're here.</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Contact</li>
            </ol>
        </nav>
      </div>
    </section>

    <section class="section pt-2">
      <div class="container">
        <div class="contact-grid">
            
            <div class="contact-info-card glass-card">
                <div class="contact-icon">📧</div>
                <h4 class="mb-3 text-white">Email Us</h4>
                <p class="mb-2"><strong style="color: white; font-size: 1.1rem;">contact&#64;aiconfconnect.com</strong></p>
                <p class="text-muted mb-3">For general inquiries, partnerships, and support</p>
                <span class="response-time">⏱️ We usually respond within 4–8 hours</span>
            </div>
            
            <div class="contact-info-card glass-card">
                <div class="contact-icon">📞</div>
                <h4 class="mb-3 text-white">Call Us</h4>
                <p class="mb-2"><strong style="color: white; font-size: 1.1rem;">+919703836289</strong></p>
                <p class="text-muted mb-3">24/7 Available</p>
                <span class="response-time">🎧 Priority support for partners</span>
            </div>
            
            <div class="contact-info-card glass-card">
                <div class="contact-icon">🌐</div>
                <h4 class="mb-3 text-white">Office Location</h4>
                <p class="mb-2"><strong style="color: white; font-size: 1.1rem;">Virtual Events</strong></p>
                <p class="text-muted mb-3">Global hub, connecting tech minds worldwide</p>
                <span class="response-time">🌍 Virtual-first organization</span>
            </div>

        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-elevated);">
      <div class="container">
        <div class="contact-split">
            <div class="contact-form-side">
                <h2 class="mb-3">Send Us a <span class="gradient-text">Message</span></h2>
                <p style="color: #A1A1A8; line-height: 1.7; margin-bottom: 2rem;">Whether you're interested in attending an event, becoming a speaker, sponsoring, or just have a question — we'd love to hear from you.</p>
                
                <form class="c-form" (ngSubmit)="sendEmail()" #contactForm="ngForm">
                    <div class="form-row">
                        <input type="text" class="c-input" name="name" [(ngModel)]="formData.name" placeholder="Your Name" required>
                        <input type="email" class="c-input" name="email" [(ngModel)]="formData.email" placeholder="Your Email" required>
                    </div>
                    <select class="c-input" name="interest" [(ngModel)]="formData.interest" style="width: 100%;" required>
                        <option value="" disabled selected>I'm interested in...</option>
                        <option value="Attending a Conference">Attending a Conference</option>
                        <option value="Becoming a Speaker">Becoming a Speaker</option>
                        <option value="Sponsorship Opportunities">Sponsorship Opportunities</option>
                        <option value="Partnership Inquiry">Partnership Inquiry</option>
                        <option value="General Question">General Question</option>
                    </select>
                    <textarea class="c-input" name="message" [(ngModel)]="formData.message" rows="5" placeholder="Your Message..." style="width: 100%;" required></textarea>
                    
                    <button type="submit" class="btn btn-primary" [disabled]="isSubmitting || !contactForm.form.valid" style="width: 100%; padding: 14px; position: relative;">
                        <span *ngIf="!isSubmitting && !submitSuccess">Send Message</span>
                        <span *ngIf="isSubmitting" style="animation: breathe 1s infinite alternate;">Sending... ⏳</span>
                        <span *ngIf="submitSuccess">Message Sent! ✅</span>
                    </button>
                    
                    <div *ngIf="submitError" style="color: #EF476F; margin-top: 10px; text-align: center; font-size: 0.9rem; font-weight: 500;">
                        Wait! Missing EmailJS Keys. Update your component files with Service ID.
                    </div>
                </form>
            </div>
            <div class="contact-faq-side">
                <h3 class="mb-4 text-white">Frequently Asked <span class="gradient-text">Questions</span></h3>
                
                <div class="faq-item">
                    <div class="faq-q">How do I register for a conference?</div>
                    <div class="faq-a">You can register directly through our Conferences page. You'll receive a confirmation email with access details.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">How can I become a speaker?</div>
                    <div class="faq-a">We're always looking for passionate industry experts. Fill out the contact form with "Becoming a Speaker", and our team will reach out.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">What sponsorship packages are available?</div>
                    <div class="faq-a">We offer Title Sponsorship, packages, and Showcase opportunities. Contact us for a custom proposal.</div>
                </div>
                <div class="faq-item">
                    <div class="faq-q">What is your refund policy?</div>
                    <div class="faq-a">All registrations are non-refundable unless AI Conf Connect cancels the event. Review our full Terms & Conditions for details.</div>
                </div>
                
            </div>
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
                  var(--bg-primary, #06060A);
    }
    .page-hero-content { position: relative; z-index: 1; text-align: center; }
    .page-hero-content h1 { font-size: 3.2rem; font-weight: 700; margin-bottom: 16px; letter-spacing: -0.03em; color: white; }
    .breadcrumb a { color: var(--accent-emerald, #00e5a0); text-decoration: none; }
    .breadcrumb-item.active { color: #888; }
    .breadcrumb { display: flex; list-style: none; padding: 0; gap: 8px; justify-content: center; margin-top: 1.5rem; }
    .breadcrumb-item + .breadcrumb-item::before { content: '/'; color: #555; padding-right: 8px; }

    .contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding-top: 20px;}
    .contact-info-card { padding: 40px 24px; text-align: center; border-radius: 16px; border: 1px solid rgba(255,255,255,0.05); background: rgba(255,255,255,0.02); transition: transform 0.3s; }
    .contact-info-card:hover { transform: translateY(-5px); border-color: rgba(0, 229, 160, 0.3); }
    .contact-icon { font-size: 2.5rem; margin-bottom: 20px; display: inline-block; background: rgba(0,229,160,0.1); width: 80px; height: 80px; line-height: 80px; border-radius: 50%; }
    .text-muted { color: #A1A1A8 !important; }
    .response-time { background: rgba(0, 229, 160, 0.08); color: var(--accent-emerald, #00e5a0); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; display: inline-block; margin-top: 10px; }
    
    .contact-split { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
    .c-form { display: flex; flex-direction: column; gap: 16px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .c-input { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); padding: 14px 20px; border-radius: 8px; color: white; font-family: inherit; font-size: 1rem; transition: border-color 0.3s;}
    .c-input:focus { border-color: var(--accent-emerald, #00e5a0); outline: none; background: rgba(255,255,255,0.06); }
    .c-input option { background: #1a1a24; }
    
    .faq-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 16px; transition: all 0.3s ease; }
    .faq-item:hover { border-color: rgba(0, 229, 160, 0.2); background: rgba(255,255,255,0.04); }
    .faq-q { font-weight: 600; color: white; margin-bottom: 8px; font-size: 1.05rem; }
    .faq-a { color: #A1A1A8; line-height: 1.6; font-size: 0.95rem; }

    @media (max-width: 992px) {
      .contact-grid { grid-template-columns: 1fr; }
      .contact-split { grid-template-columns: 1fr; gap: 40px; }
      .form-row { grid-template-columns: 1fr !important; }
      .page-hero-content h1 { font-size: 2.5rem; }
    }

  `]
})

export class ContactComponent {
  formData = {
    name: '',
    email: '',
    interest: '',
    message: ''
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  async sendEmail() {
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    // TODO: The user sets these!
    const serviceId = 'service_be1d1ps';
    const templateId = 'template_2fiohpg';
    const publicKey = 'nvgXJf3yFE5SfZ0ZH';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: this.formData.name,
        email: this.formData.email,
        interest: this.formData.interest,
        message: this.formData.message
      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        this.submitSuccess = true;
        this.formData = { name: '', email: '', interest: '', message: '' }; // Reset
        setTimeout(() => this.submitSuccess = false, 5000);
      } else {
        this.submitError = true;
      }
    } catch (error) {
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }
}
