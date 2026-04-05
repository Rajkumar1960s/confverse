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
        <p>The AI industry's premier conference discovery platform — where knowledge meets opportunity.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-intro">
          <div class="intro-text">
            <h2>Our <span class="gradient-text">Mission</span></h2>
            <p>ConfVerse was founded with a singular vision: to democratize access to world-class artificial intelligence and technology knowledge. We believe that breakthrough ideas happen when brilliant minds connect, regardless of geography, background, or organization size.</p>
            <p>Through our carefully curated virtual conferences and real-time market intelligence, we bring together the sharpest minds in AI, machine learning, Web3, healthcare technology, and emerging fields. Every event delivers actionable insights — not just theory, but battle-tested strategies from practitioners building the future.</p>
          </div>
          <div class="intro-visual glass-card">
            <div class="visual-stat" *ngFor="let s of stats">
              <span class="vs-value">{{ s.value }}</span>
              <span class="vs-label">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-elevated);">
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
      background: radial-gradient(ellipse at 30% 50%, rgba(0, 229, 160, 0.06), transparent 60%),
                  radial-gradient(ellipse at 70% 50%, rgba(76, 201, 240, 0.04), transparent 60%),
                  var(--bg-primary);
    }
    .page-hero-content {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    .page-hero-content h1 {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 16px;
      letter-spacing: -0.03em;
    }
    .page-hero-content > p {
      font-size: 1.1rem;
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
      letter-spacing: -0.02em;
    }
    .intro-text p {
      font-size: 1.02rem;
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
    .visual-stat { text-align: center; }
    .vs-value {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      display: block;
      margin-bottom: 8px;
      color: var(--accent-emerald);
    }
    .vs-label {
      font-size: 0.82rem;
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
    .value-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
    .value-card h3 { font-size: 1.1rem; margin-bottom: 10px; }
    .value-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65; }

    @media (max-width: 768px) {
      .about-intro { grid-template-columns: 1fr; }
      .values-grid { grid-template-columns: 1fr; }
      .page-hero-content h1 { font-size: 2.5rem; }
    }
  `]
})
export class AboutComponent {
  stats = [
    { value: '6+', label: 'Conferences Planned' },
    { value: '50+', label: 'Expert Speakers' },
    { value: '5,000+', label: 'Expected Attendees' },
    { value: '80+', label: 'Countries' }
  ];

  values = [
    { icon: '🌍', title: 'Global Accessibility', description: 'Making world-class AI knowledge accessible to everyone, everywhere through virtual-first experiences.' },
    { icon: '📊', title: 'Market Intelligence', description: 'Going beyond conferences — providing real-time AI market insights, trends, and sector analysis.' },
    { icon: '🤝', title: 'Community First', description: 'Building lasting connections between researchers, builders, and visionaries across the global AI ecosystem.' },
    { icon: '🔬', title: 'Research-Driven', description: 'Bringing cutting-edge AI research from labs to practitioners through accessible, engaging presentations.' },
    { icon: '🛡️', title: 'Responsible AI', description: 'Championing ethical AI development, AI safety research, and responsible technology governance.' },
    { icon: '🚀', title: 'Future-Forward', description: 'Exploring agentic systems, multimodal AI, and next-gen technologies before they hit the mainstream.' }
  ];
}
