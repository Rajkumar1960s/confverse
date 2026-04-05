import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="container page-hero-content">
        <span class="section-label">About Us</span>
        <h1>Empowering <span class="gradient-text">Innovation</span> Through Connection</h1>
        <p>Learn about our mission to build a global hub for tech innovation.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-intro">
          <div class="intro-text">
            <h2>Our <span class="gradient-text">Mission</span></h2>
            <p>ConfVerse was founded with a singular vision: to democratize access to world-class technology knowledge. We believe that breakthrough ideas happen when brilliant minds connect, regardless of geography, background, or organization size.</p>
            <p>Through our carefully curated virtual conferences, we bring together the sharpest minds in AI, machine learning, Web3, healthcare technology, and emerging fields. Every event is designed to deliver actionable insights — not just theory, but battle-tested strategies from practitioners who are building the future.</p>
          </div>
          <div class="intro-visual glass-card">
            <div class="visual-stat" *ngFor="let s of stats">
              <span class="vs-value gradient-text">{{ s.value }}</span>
              <span class="vs-label">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--primary-deeper);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Our Values</span>
          <h2>What Drives <span class="gradient-text">Us</span></h2>
        </div>
        <div class="values-grid">
          <div class="value-card glass-card" *ngFor="let v of values">
            <span class="value-icon">{{ v.icon }}</span>
            <h3>{{ v.title }}</h3>
            <p>{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container" style="text-align: center;">
        <div class="section-header">
          <span class="section-label">Join Us</span>
          <h2>Ready to Be Part of <span class="gradient-text">Something Big?</span></h2>
          <p>Whether you want to attend, speak, or sponsor — there's a place for you at ConfVerse.</p>
        </div>
        <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
          <a routerLink="/events" class="btn btn-primary">Explore Events →</a>
          <a routerLink="/contact" class="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative;
      padding: 160px 0 80px;
      overflow: hidden;
    }
    .page-hero-bg {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 30% 50%, rgba(0, 212, 255, 0.08), transparent 60%),
                  radial-gradient(ellipse at 70% 50%, rgba(124, 58, 237, 0.06), transparent 60%),
                  var(--primary-dark);
    }
    .page-hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    .page-hero-content h1 {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 16px;
    }
    .page-hero-content > p {
      font-size: 1.15rem;
      color: var(--text-secondary);
      max-width: 560px;
      margin: 0 auto;
    }
    .about-intro {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }
    .intro-text h2 {
      font-size: 2.5rem;
      margin-bottom: 24px;
    }
    .intro-text p {
      font-size: 1.05rem;
      color: var(--text-secondary);
      line-height: 1.8;
      margin-bottom: 16px;
    }
    .intro-visual {
      padding: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .visual-stat {
      text-align: center;
    }
    .vs-value {
      font-family: 'Outfit', sans-serif;
      font-size: 2.5rem;
      font-weight: 900;
      display: block;
      margin-bottom: 8px;
    }
    .vs-label {
      font-size: 0.85rem;
      color: var(--text-tertiary);
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .value-card {
      padding: 36px 28px;
      text-align: center;
    }
    .value-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: 16px;
    }
    .value-card h3 {
      font-size: 1.1rem;
      margin-bottom: 10px;
    }
    .value-card p {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .about-intro { grid-template-columns: 1fr; }
      .values-grid { grid-template-columns: 1fr; }
      .page-hero-content h1 { font-size: 2.5rem; }
    }
  `]
})
export class AboutComponent {
  stats = [
    { value: '5+', label: 'Conferences Planned' },
    { value: '15+', label: 'Expert Speakers' },
    { value: '5,000+', label: 'Expected Attendees' },
    { value: '80+', label: 'Countries' }
  ];

  values = [
    { icon: '🌍', title: 'Accessibility', description: 'Making world-class tech knowledge accessible to everyone, everywhere through virtual-first experiences.' },
    { icon: '💡', title: 'Actionable Insights', description: 'Every session is designed to deliver practical takeaways that you can implement in your work immediately.' },
    { icon: '🤝', title: 'Community First', description: 'Building lasting connections between researchers, builders, and visionaries across the global tech ecosystem.' },
    { icon: '🔬', title: 'Research-Driven', description: 'Bringing cutting-edge research from labs to practitioners through accessible, engaging presentations.' },
    { icon: '🛡️', title: 'Responsible Innovation', description: 'Championing ethical AI development, responsible technology, and inclusive design principles.' },
    { icon: '🚀', title: 'Future-Forward', description: 'Staying ahead of the curve by exploring emerging technologies before they hit the mainstream.' }
  ];
}
