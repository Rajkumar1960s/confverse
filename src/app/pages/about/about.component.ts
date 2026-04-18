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
        <h1>Building the Future of <span class="gradient-text">Tech Conversations</span></h1>
        <p>AI Conf Connect is more than an event company — it is a platform built to connect people, ideas, and technologies shaping the future of innovation.</p>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a routerLink="/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">About</li>
            </ol>
        </nav>
      </div>
    </section>

    <section class="section pt-0">
      <div class="container" style="text-align: center; max-width: 900px; margin: 0 auto;">
          <p class="about-lead">In a fast-evolving tech world, staying ahead requires more than information. It demands access to real insights, meaningful conversations, and practical knowledge.</p>
          <p class="about-lead">That's exactly what we deliver — curated experiences designed to inform, connect, and inspire the global tech community.</p>
          <div class="features-row mt-4">
              <div class="faint-badge">✨ Curated tech experiences</div>
              <div class="faint-badge">🎯 Expert-led sessions</div>
              <div class="faint-badge">🤝 Meaningful networking</div>
          </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-elevated);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What We Do</span>
          <h2>Beyond Traditional <span class="gradient-text">Conferences</span></h2>
        </div>
        <div class="values-grid">
          <div class="value-card glass-card">
            <span class="value-icon">🎙️</span>
            <h3>High-Impact Conferences</h3>
            <p>Virtual, hybrid, and physical events focused on real-world applications.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">👨‍🏫</span>
            <h3>Expert-Led Sessions</h3>
            <p>Speakers are industry practitioners actively building and innovating.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">🤝</span>
            <h3>Meaningful Networking</h3>
            <p>Environments where conversations lead to opportunities and growth.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">📈</span>
            <h3>Future-Focused Topics</h3>
            <p>From AI and automation to emerging tech trends that matter next.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="about-intro">
            <div class="intro-text pr-4">
                <h2>Why <span class="gradient-text">AI Conf Connect</span> Exists</h2>
                <p>Let's be honest. Most conferences today are too generic, overly promotional, and lack real value for attendees.</p>
                <p>We built AI Conf Connect to change that. We believe that every event should deliver:</p>
                <ul class="clean-list">
                    <li><span class="check">✓</span> Clarity instead of confusion</li>
                    <li><span class="check">✓</span> Insights instead of noise</li>
                    <li><span class="check">✓</span> Connections instead of cold networking</li>
                    <li><span class="check">✓</span> Value instead of sales pitches</li>
                </ul>
                <p>If someone attends our event, they should leave smarter, more connected, and more prepared for the future.</p>
            </div>
            <div class="intro-card glass-card p-4">
                <h3 class="gradient-text mb-3">Our Mission</h3>
                <p class="mb-5">To empower individuals and organizations with actionable knowledge, meaningful connections, and future-ready insights through world-class tech events.</p>
                
                <h3 class="gradient-text mb-3">Our Vision</h3>
                <p>To become a global hub for tech innovation, where ideas are shared, collaborations are formed, and the future is built together.</p>
            </div>
        </div>
      </div>
    </section>

    <section class="section" style="background: var(--bg-elevated);">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Differentiation</span>
          <h2>What Makes <span class="gradient-text">Us Different</span></h2>
        </div>
        <div class="values-grid">
          <div class="value-card glass-card">
            <span class="value-icon">⭐</span>
            <h3>Curated Over Crowded</h3>
            <p>Focus on quality, not quantity. Every session, speaker, and topic is carefully selected.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">👔</span>
            <h3>Builders Over Speakers</h3>
            <p>We prioritize people who are actively working in the industry, not just talking about it.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">👥</span>
            <h3>Community Over Audience</h3>
            <p>We are building a long-term ecosystem, not one-time attendees.</p>
          </div>
          <div class="value-card glass-card">
            <span class="value-icon">🚀</span>
            <h3>Execution Over Hype</h3>
            <p>We focus on practical insights that people can apply immediately.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section text-center">
      <div class="container pt-4 pb-5">
          <h2 class="mb-4">Let's Build <span class="gradient-text">the Future Together</span></h2>
          <p class="mb-5" style="max-width: 600px; margin: 0 auto; color: var(--text-secondary); font-size: 1.1rem; line-height: 1.6;">The future of technology is not created in isolation. It is built through conversations, collaboration, and shared knowledge.</p>
          <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
              <a routerLink="/events" class="btn btn-primary px-4 py-2">Explore Events</a>
              <a routerLink="/contact" class="btn btn-secondary px-4 py-2">Partner With Us</a>
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

    .about-lead { font-size: 1.15rem; color: #A1A1A8; line-height: 1.8; margin-bottom: 20px; }
    .features-row { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
    .faint-badge { background: rgba(0, 229, 160, 0.1); color: var(--accent-emerald, #00e5a0); padding: 8px 16px; border-radius: 30px; font-weight: 500; font-size: 0.95rem; }

    .about-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    .intro-text h2 { font-size: 2.2rem; margin-bottom: 24px; color: white; }
    .intro-text p { font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
    .clean-list { list-style: none; padding: 0; margin-bottom: 24px; }
    .clean-list li { margin-bottom: 12px; color: #A1A1A8; font-size: 1.05rem; display: flex; align-items: flex-start; gap: 10px; }
    .check { color: var(--accent-emerald, #00e5a0); font-weight: bold; }
    .intro-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 40px; border-radius: 16px; backdrop-filter: blur(12px); }
    .intro-card p { color: #A1A1A8; font-size: 1.05rem; line-height: 1.7; }
    
    .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .value-card { padding: 36px 28px; text-align: center; border-radius: 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(0, 229, 160, 0.1); backdrop-filter: blur(12px); overflow: hidden; transition: transform 0.3s; }
    .value-card:hover { transform: translateY(-5px); border-color: rgba(0, 229, 160, 0.3); }
    .value-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }
    .value-card h3 { font-size: 1.1rem; margin-bottom: 12px; color: white; }
    .value-card p { font-size: 0.95rem; color: #A1A1A8; line-height: 1.6; margin: 0; }

    @media (max-width: 992px) {
      .values-grid { grid-template-columns: repeat(2, 1fr); }
      .about-intro { grid-template-columns: 1fr; }
    }
    @media (max-width: 768px) {
      .values-grid { grid-template-columns: 1fr; }
      .page-hero-content h1 { font-size: 2.5rem; }
    }

  `]
})
export class AboutComponent {
}
