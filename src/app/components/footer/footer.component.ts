import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <footer class="footer">
      <div class="footer-aurora"></div>
      <div class="footer-glow"></div>

      <div class="container">
        <!-- Top CTA Banner -->
        <div class="footer-cta-banner">
          <div class="fcb-content">
            <h3>Ready to Shape the Future of AI?</h3>
            <p>Join 25,000+ professionals who trust ConfVerse for world-class AI conferences, market intelligence, and global networking.</p>
          </div>
          <a href="https://aixplore-eta.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-footer-cta">
            Register Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <span class="flogo-diamond">◆</span>
              <span>Conf<span class="gradient-text">Verse</span></span>
            </div>
            <p>The leading platform for AI and technology virtual conferences. Curated events, market intelligence, and a global community of innovators.</p>
            <div class="footer-newsletter">
              <span class="nl-label">Stay Updated</span>
              <div class="newsletter-row" *ngIf="!subscribed">
                <input type="email" [(ngModel)]="email" placeholder="your&#64;email.com">
                <button class="nl-btn" (click)="subscribe()">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </button>
              </div>
              <div class="newsletter-success" *ngIf="subscribed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                Thanks for subscribing!
              </div>
            </div>
            <div class="footer-social">
              <a href="#" class="social-icon" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter/X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="mailto:contact&#64;confverse.com" class="social-icon" aria-label="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <h4>Platform</h4>
            <ul>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/events">Conferences</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>For Partners</h4>
            <ul>
              <li><a routerLink="/contact">Become a Speaker</a></li>
              <li><a routerLink="/contact">Become a Sponsor</a></li>
              <li><a routerLink="/contact">Host an Event</a></li>
              <li><a routerLink="/contact">Media & Press</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:contact&#64;confverse.com">contact&#64;confverse.com</a></li>
              <li><a href="mailto:Anna&#64;confverse.com">Anna&#64;confverse.com</a></li>
              <li><a href="#" target="_blank">LinkedIn</a></li>
              <li><a href="#" target="_blank">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ year }} ConfVerse. All rights reserved. Built for the global AI community.</p>
          <div class="footer-bottom-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative; padding: 0 0 0;
      background: #030305;
      overflow: hidden;
    }

    /* Aurora Glow */
    .footer-aurora {
      position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
      width: 800px; height: 400px;
      background: radial-gradient(ellipse at center, rgba(0, 229, 160, 0.06) 0%, transparent 70%);
      filter: blur(80px);
      pointer-events: none;
    }
    .footer-glow {
      position: absolute; top: 0; left: 50%; transform: translateX(-50%);
      width: 600px; height: 2px;
      background: linear-gradient(90deg, transparent, var(--accent-emerald), transparent);
      filter: blur(4px); opacity: 0.6;
    }

    /* CTA Banner */
    .footer-cta-banner {
      display: flex; align-items: center; justify-content: space-between;
      padding: 48px 48px;
      margin-bottom: 64px;
      background: linear-gradient(135deg, rgba(0, 229, 160, 0.06), rgba(76, 201, 240, 0.04));
      border: 1px solid rgba(0, 229, 160, 0.1);
      border-radius: var(--radius-xl);
      position: relative; z-index: 1;
      margin-top: 80px;
    }
    .fcb-content h3 {
      font-size: 1.5rem; margin-bottom: 8px; font-weight: 700;
    }
    .fcb-content p {
      font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;
    }
    .btn-footer-cta {
      flex-shrink: 0; padding: 14px 32px;
    }

    /* Grid */
    .footer-grid {
      display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px; padding-bottom: 48px;
      position: relative; z-index: 1;
    }

    /* Brand */
    .footer-brand { max-width: 340px; }
    .footer-logo {
      display: flex; align-items: center; gap: 10px;
      font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem;
      font-weight: 800; margin-bottom: 20px;
    }
    .flogo-diamond {
      color: var(--accent-emerald); font-size: 1.2rem;
      filter: drop-shadow(0 0 8px rgba(0, 229, 160, 0.4));
      animation: diamond-pulse 3s ease-in-out infinite;
    }
    @keyframes diamond-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }
    .footer-brand > p {
      color: var(--text-tertiary); font-size: 0.88rem; line-height: 1.75; margin-bottom: 28px;
    }

    /* Newsletter */
    .footer-newsletter { margin-bottom: 24px; }
    .nl-label {
      display: block; font-family: 'Space Grotesk', sans-serif;
      font-size: 0.82rem; font-weight: 600; color: var(--text-secondary);
      margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;
    }
    .newsletter-row { display: flex; gap: 8px; }
    .newsletter-row input {
      flex: 1; padding: 12px 16px; border-radius: var(--radius-md);
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      color: var(--text-primary); font-size: 0.88rem; font-family: 'DM Sans', sans-serif;
      transition: all 0.3s ease;
    }
    .newsletter-row input:focus {
      outline: none; border-color: var(--accent-emerald);
      box-shadow: 0 0 0 3px rgba(0, 229, 160, 0.1);
    }
    .newsletter-row input::placeholder { color: var(--text-muted); }
    .nl-btn {
      width: 44px; height: 44px; border-radius: var(--radius-md);
      background: var(--accent-emerald); color: #0C0C0E;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.3s ease; flex-shrink: 0;
    }
    .nl-btn:hover {
      transform: translateX(2px); box-shadow: 0 4px 20px rgba(0, 229, 160, 0.3);
    }
    .newsletter-success {
      display: flex; align-items: center; gap: 8px;
      color: var(--accent-emerald); font-size: 0.88rem; font-weight: 500;
    }

    /* Social Icons */
    .footer-social { display: flex; gap: 10px; }
    .social-icon {
      width: 40px; height: 40px; border-radius: var(--radius-md);
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      display: flex; align-items: center; justify-content: center;
      color: var(--text-secondary); transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .social-icon:hover {
      background: rgba(0, 229, 160, 0.1); border-color: rgba(0, 229, 160, 0.2);
      color: var(--accent-emerald); transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 229, 160, 0.15);
    }

    /* Links */
    .footer-links h4 {
      font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem;
      font-weight: 600; color: white; margin-bottom: 24px;
      text-transform: uppercase; letter-spacing: 1px;
    }
    .footer-links ul { list-style: none; display: flex; flex-direction: column; gap: 14px; }
    .footer-links a {
      color: var(--text-tertiary); font-size: 0.88rem;
      display: inline-flex; align-items: center; gap: 0;
      transition: all 0.3s ease;
    }
    .footer-links a:hover {
      color: var(--accent-emerald); transform: translateX(4px);
    }

    /* Bottom */
    .footer-bottom {
      display: flex; justify-content: space-between; align-items: center;
      padding: 28px 0;
      border-top: 1px solid rgba(255,255,255,0.05);
      position: relative; z-index: 1;
    }
    .footer-bottom p { color: var(--text-muted); font-size: 0.82rem; }
    .footer-bottom-links { display: flex; gap: 24px; }
    .footer-bottom-links a { color: var(--text-muted); font-size: 0.82rem; }
    .footer-bottom-links a:hover { color: var(--text-secondary); }

    /* Responsive */
    @media (max-width: 992px) {
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
      .footer-cta-banner { flex-direction: column; gap: 24px; text-align: center; padding: 36px 28px; }
    }
    @media (max-width: 576px) {
      .footer-grid { grid-template-columns: 1fr; gap: 32px; }
      .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
      .footer-bottom-links { justify-content: center; flex-wrap: wrap; gap: 16px; }
      .footer-cta-banner { margin-top: 48px; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
  email = '';
  subscribed = false;

  subscribe() {
    if (this.email) {
      this.subscribed = true;
    }
  }
}
