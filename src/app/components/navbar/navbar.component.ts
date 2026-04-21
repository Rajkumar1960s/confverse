import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled" [class.visible]="navVisible" [class.menu-open]="menuOpen">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo" (click)="closeMenu()">
          <img src="/images/logo.png" alt="ConfVerse icon" class="nav-logo-img" />
          <span class="logo-text">Conf<span class="logo-accent">Verse</span></span>
        </a>

        <div class="nav-links" [class.active]="menuOpen">
          <a *ngFor="let link of navLinks; let i = index"
            [routerLink]="link.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{exact: link.exact}"
            (click)="closeMenu()"
            [style.transition-delay]="menuOpen ? (i * 70 + 150) + 'ms' : '0ms'"
            class="nav-link">
            <span class="link-text">{{ link.label }}</span>
            <span class="link-indicator"></span>
          </a>
        </div>

        <div class="nav-actions">
          <a href="https://live.aiconfconnect.com/" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-nav">
            <span class="btn-text">Register Now</span>
            <span class="btn-shine"></span>
          </a>
        </div>

        <button class="hamburger" [class.active]="menuOpen" (click)="toggleMenu()" aria-label="Toggle navigation menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Progress bar -->
      <div class="nav-progress" *ngIf="isScrolled">
        <div class="nav-progress-fill" [style.width.%]="scrollProgress"></div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 18px 0;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      background: transparent;
      opacity: 0; pointer-events: none;
    }
    .navbar.visible { opacity: 1; pointer-events: all; }
    .navbar.scrolled {
      background: rgba(5, 5, 8, 0.92);
      backdrop-filter: blur(40px) saturate(180%);
      -webkit-backdrop-filter: blur(40px) saturate(180%);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      padding: 10px 0;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }
    /* When menu is open, always give navbar a solid background so the X and logo are visible */
    .navbar.menu-open {
      background: rgba(5, 5, 8, 0.98);
      opacity: 1; pointer-events: all;
    }
    .nav-container {
      max-width: 1240px; margin: 0 auto; padding: 0 32px;
      display: flex; align-items: center; justify-content: space-between;
    }

    /* ─── Logo ─── */
    .nav-logo {
      display: flex; align-items: center; gap: 10px;
      font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700;
      color: white; z-index: 1002; letter-spacing: -0.02em;
    }
    .nav-logo-img {
      width: 34px; height: 34px; object-fit: contain;
      filter: drop-shadow(0 0 10px rgba(0, 229, 160, 0.4));
    }
    .logo-diamond {
      position: relative;
      display: flex; align-items: center; justify-content: center;
      width: 34px; height: 34px;
    }
    .diamond-inner {
      color: var(--accent-emerald); font-size: 1.4rem;
      animation: diamond-pulse 3s ease-in-out infinite;
      filter: drop-shadow(0 0 10px rgba(0, 229, 160, 0.5));
    }
    .logo-diamond::after {
      content: ''; position: absolute; inset: -4px;
      border: 1px solid rgba(0, 229, 160, 0.2); border-radius: 50%;
      animation: diamond-ring 4s ease-in-out infinite;
    }
    @keyframes diamond-pulse {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(0, 229, 160, 0.5)); }
      50% { transform: scale(1.12); filter: drop-shadow(0 0 18px rgba(0, 229, 160, 0.7)); }
    }
    @keyframes diamond-ring {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.4; }
      50% { transform: scale(1.2) rotate(90deg); opacity: 0.8; }
    }
    .logo-accent { color: var(--accent-emerald); }
    .logo-text { position: relative; }

    /* ─── Links ─── */
    .nav-links { display: flex; align-items: center; gap: 6px; }
    .nav-link {
      font-size: 0.88rem; font-weight: 500; color: var(--text-secondary);
      position: relative; padding: 8px 18px; border-radius: var(--radius-full);
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      overflow: hidden;
    }
    .link-text { position: relative; z-index: 1; }
    .link-indicator {
      position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
      width: 0; height: 2px; border-radius: 1px;
      background: var(--accent-emerald);
      transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 0 10px rgba(0, 229, 160, 0.4);
    }
    .nav-link:hover {
      color: white;
      background: rgba(255, 255, 255, 0.04);
    }
    .nav-link:hover .link-indicator,
    .nav-link.active .link-indicator { width: 20px; }
    .nav-link.active { color: white; }

    /* ─── CTA Button ─── */
    .nav-actions { display: flex; align-items: center; }
    .btn-nav {
      padding: 10px 26px; font-size: 0.82rem;
      position: relative; overflow: hidden;
    }
    .btn-shine {
      position: absolute; top: -50%; left: -75%; width: 50%; height: 200%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
      transform: skewX(-25deg);
      animation: btn-shine-move 3s ease-in-out infinite;
    }
    @keyframes btn-shine-move {
      0% { left: -75%; }
      50%, 100% { left: 150%; }
    }

    /* ─── Hamburger ─── */
    .hamburger {
      display: none; flex-direction: column; gap: 6px; background: none;
      border: none; cursor: pointer; z-index: 1002; padding: 6px;
      border-radius: 8px; transition: background 0.3s ease;
    }
    .hamburger:hover { background: rgba(255,255,255,0.06); }
    .hamburger span {
      width: 22px; height: 2px; background: white; display: block;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border-radius: 2px;
    }
    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
    .hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

    /* ─── Progress Bar ─── */
    .nav-progress {
      position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
      background: rgba(255,255,255,0.03);
    }
    .nav-progress-fill {
      height: 100%;
      background: var(--gradient-brand);
      transition: width 0.1s linear;
      border-radius: 0 2px 2px 0;
      box-shadow: 0 0 12px rgba(0, 229, 160, 0.3);
    }

    /* ─── Mobile ─── */
    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-links {
        position: fixed; top: 0; left: 0; right: 0;
        width: 100%; height: 100vh; height: 100dvh;
        background: rgba(5, 5, 8, 0.98);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        flex-direction: column; justify-content: center; align-items: center; gap: 8px;
        opacity: 0; visibility: hidden;
        pointer-events: none;
        transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.45s;
        z-index: 1001;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
      .nav-links.active {
        opacity: 1; visibility: visible; pointer-events: all;
      }
      .nav-link {
        font-size: 1.5rem; padding: 14px 28px;
        opacity: 0; transform: translateY(20px);
        transition: opacity 0.4s ease, transform 0.4s ease, color 0.3s ease, background 0.3s ease;
      }
      .nav-links.active .nav-link {
        opacity: 1; transform: translateY(0);
      }
      .nav-actions { display: none; }
    }
  `]
})
export class NavbarComponent implements OnInit, OnDestroy {
  isScrolled = false;
  navVisible = false;
  menuOpen = false;
  scrollProgress = 0;
  private scrollListener: (() => void) | null = null;
  private isBrowser: boolean;

  navLinks = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Conferences', path: '/events', exact: false },
    { label: 'About', path: '/about', exact: false },
    { label: 'Contact', path: '/contact', exact: false }
  ];

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      setTimeout(() => { this.navVisible = true; }, 200);

      this.scrollListener = () => {
        this.isScrolled = window.scrollY > 50;
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      };
      window.addEventListener('scroll', this.scrollListener, { passive: true });
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
    // Ensure body scroll is restored if component is destroyed while menu is open
    if (this.isBrowser && this.menuOpen) {
      this.renderer.removeClass(this.document.body, 'nav-menu-open');
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.isBrowser) {
      if (this.menuOpen) {
        this.renderer.addClass(this.document.body, 'nav-menu-open');
      } else {
        this.renderer.removeClass(this.document.body, 'nav-menu-open');
      }
    }
  }

  closeMenu() {
    this.menuOpen = false;
    if (this.isBrowser) {
      this.renderer.removeClass(this.document.body, 'nav-menu-open');
    }
  }
}
