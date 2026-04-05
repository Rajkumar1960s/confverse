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
          <span class="logo-icon">⚡</span>
          <span class="logo-text">Conf<span class="gradient-text">Verse</span></span>
        </a>

        <div class="nav-links" [class.active]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          <a routerLink="/events" routerLinkActive="active" (click)="closeMenu()">Conferences</a>
          <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact Us</a>
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
      padding: 16px 0;
      transition: all 0.3s ease;
      background: transparent;
    }

    .navbar.scrolled {
      background: rgba(10, 14, 39, 0.9);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding: 10px 0;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'Outfit', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      color: white;
      z-index: 1001;
    }

    .logo-icon {
      font-size: 1.5rem;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 36px;
    }

    .nav-links a {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-secondary);
      position: relative;
      padding: 4px 0;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
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
      gap: 12px;
    }

    .btn-nav {
      padding: 10px 24px;
      font-size: 0.85rem;
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
      width: 24px;
      height: 2px;
      background: white;
      transition: all 0.3s ease;
      display: block;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    @media (max-width: 768px) {
      .hamburger {
        display: flex;
      }

      .nav-links {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(10, 14, 39, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        justify-content: center;
        gap: 32px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: 1000;
      }

      .nav-links.active {
        opacity: 1;
        pointer-events: all;
      }

      .nav-links a {
        font-size: 1.25rem;
      }

      .nav-actions {
        display: none;
      }
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
