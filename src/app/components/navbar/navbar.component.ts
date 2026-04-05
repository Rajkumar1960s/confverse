import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">
          <span class="logo-mark">◆</span>
          <span class="logo-text">Conf<span class="accent-text">Verse</span></span>
        </a>

        <div class="nav-links" [class.active]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          <a routerLink="/events" routerLinkActive="active" (click)="closeMenu()">Conferences</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
        </div>

        <div class="nav-actions">
          <a routerLink="/events" class="btn btn-primary btn-nav">Explore Events</a>
        </div>

        <button class="hamburger" [class.active]="menuOpen" (click)="toggleMenu()" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 18px 0;
      transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      background: transparent;
    }

    .navbar.scrolled {
      background: rgba(12, 12, 14, 0.92);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
      padding: 12px 0;
    }

    .nav-container {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: white;
      z-index: 1001;
      letter-spacing: -0.02em;
    }

    .logo-mark {
      color: var(--accent-emerald);
      font-size: 1.2rem;
    }

    .accent-text {
      color: var(--accent-emerald);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 40px;
    }

    .nav-links a {
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--text-secondary);
      position: relative;
      padding: 4px 0;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--accent-emerald);
      transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: white;
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      align-items: center;
    }

    .btn-nav {
      padding: 10px 24px;
      font-size: 0.82rem;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1001;
      padding: 4px;
    }

    .hamburger span {
      width: 22px;
      height: 2px;
      background: white;
      transition: all 0.3s ease;
      display: block;
    }

    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-links {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(12, 12, 14, 0.98);
        backdrop-filter: blur(24px);
        flex-direction: column;
        justify-content: center;
        gap: 36px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: 1000;
      }
      .nav-links.active { opacity: 1; pointer-events: all; }
      .nav-links a { font-size: 1.3rem; }
      .nav-actions { display: none; }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = '';
  }
}
