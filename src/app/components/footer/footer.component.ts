import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-accent"></div>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a routerLink="/" class="footer-logo">
              <span class="logo-mark">◆</span>
              <span>Conf<span class="accent-text">Verse</span></span>
            </a>
            <p>Your gateway to the world's best AI and technology virtual conferences. Market insights, trending innovation, and expert-led events.</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" aria-label="Twitter/X" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="mailto:contact&#64;confverse.com" aria-label="Email" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,4 12,13 2,4"/></svg>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <h4>Platform</h4>
            <ul>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/events">Conferences</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Collaborate</h4>
            <ul>
              <li><a href="mailto:contact&#64;confverse.com">Sponsor an Event</a></li>
              <li><a href="mailto:contact&#64;confverse.com">Become a Speaker</a></li>
              <li><a href="mailto:contact&#64;confverse.com">Partner With Us</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Trending Topics</h4>
            <ul>
              <li><a href="#">Generative AI</a></li>
              <li><a href="#">Agentic Systems</a></li>
              <li><a href="#">AI Market Trends</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} ConfVerse. All rights reserved.</p>
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
      position: relative;
      padding: 80px 0 0;
      background: var(--bg-elevated);
      border-top: 1px solid var(--glass-border);
      overflow: hidden;
    }

    .footer-accent {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 500px;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--accent-emerald), transparent);
      filter: blur(8px);
      opacity: 0.4;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 48px;
      padding-bottom: 48px;
    }

    .footer-brand { max-width: 300px; }

    .footer-logo {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.35rem;
      font-weight: 700;
      color: white;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }

    .logo-mark { color: var(--accent-emerald); font-size: 1.1rem; }
    .accent-text { color: var(--accent-emerald); }

    .footer-brand p {
      color: var(--text-tertiary);
      font-size: 0.88rem;
      line-height: 1.7;
      margin-bottom: 24px;
    }

    .social-links { display: flex; gap: 10px; }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: var(--radius-md);
      background: var(--bg-surface);
      border: 1px solid var(--glass-border);
      color: var(--text-secondary);
      transition: all 0.3s ease;
    }

    .social-link:hover {
      border-color: var(--accent-emerald);
      color: var(--accent-emerald);
      transform: translateY(-2px);
    }

    .footer-links h4 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.88rem;
      font-weight: 600;
      color: white;
      margin-bottom: 20px;
      letter-spacing: -0.01em;
    }

    .footer-links ul { list-style: none; display: flex; flex-direction: column; gap: 12px; }
    .footer-links a { color: var(--text-tertiary); font-size: 0.85rem; }
    .footer-links a:hover { color: var(--accent-emerald); }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 0;
      border-top: 1px solid var(--glass-border);
    }

    .footer-bottom p { color: var(--text-muted); font-size: 0.82rem; }
    .footer-bottom-links { display: flex; gap: 24px; }
    .footer-bottom-links a { color: var(--text-muted); font-size: 0.82rem; }
    .footer-bottom-links a:hover { color: var(--text-secondary); }

    @media (max-width: 992px) {
      .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
    }

    @media (max-width: 576px) {
      .footer-grid { grid-template-columns: 1fr; gap: 32px; }
      .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
      .footer-bottom-links { flex-wrap: wrap; justify-content: center; gap: 16px; }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
