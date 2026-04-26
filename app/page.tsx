import Link from 'next/link';
import { projects, stackGroups } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-eyebrow">Application Engineer · Google</div>
        <h1 className="hero-h">
          Building systems that <em>scale reliably</em> — from distributed infrastructure to the
          tools engineers reach for every day.
        </h1>
        <p className="hero-sub">
          I work at the intersection of platform complexity and developer experience. I care about
          observable, maintainable systems that outlive the sprint they shipped in.
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn-primary">View work</a>
          <Link href="/about" className="btn-secondary">About me</Link>
        </div>
        <div className="hero-metrics">
          <div className="metric-item">
            <div className="val">[ — ]</div>
            <div className="lbl">latency improvement</div>
          </div>
          <div className="metric-item">
            <div className="val">[ — ] yrs</div>
            <div className="lbl">production systems</div>
          </div>
          <div className="metric-item">
            <div className="val">[ — ]</div>
            <div className="lbl">engineers served</div>
          </div>
          <div className="metric-item">
            <div className="val">[ — ]</div>
            <div className="lbl">infra cost reduction</div>
          </div>
        </div>
      </div>

      <div className="divider" />

      {/* ── WORK ── */}
      <div className="section" id="work">
        <div className="section-label">Selected work — {projects.length} projects · click to read technical doc</div>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Link key={p.id} href={`/work/${p.slug}`} className="project-card" style={{ display: 'block' }}>
              <div className="proj-arrow">↗</div>
              <div className="proj-num">{p.id}</div>
              <div className="proj-title">{p.title}</div>
              <div className="proj-desc">{p.description}</div>
              <div className="proj-chips">
                {p.chips.map((chip) => (
                  <span key={chip} className="proj-chip">{chip}</span>
                ))}
                <span className="proj-chip accent">{p.accentChip}</span>
              </div>
              <div className="proj-outcomes">
                {p.outcomes.map((o) => (
                  <div key={o.label} className="outcome">
                    {o.value} <span>{o.label}</span>
                  </div>
                ))}
              </div>
              <div className="proj-read-more">Read technical doc →</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="divider" />

      {/* ── STACK ── */}
      <div className="section">
        <div className="section-label">Tech stack — depth map</div>
        <div className="stack-section">
          {stackGroups.map((group) => (
            <div key={group.title} className="stack-group">
              <div className="sg-title">{group.title}</div>
              {group.items.map((item) => (
                <div key={item.name} className="stack-item">
                  {item.name}
                  <span className={`depth${item.deep ? ' deep' : ''}`}>{item.depth}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div className="contact-strip" id="contact">
        <div>
          <div className="contact-h">Let&apos;s work on something that matters at scale.</div>
          <div className="contact-actions">
            <a href="mailto:rohilvarma96@gmail.com" className="btn-primary">rohilvarma96@gmail.com</a>
            <a href="https://github.com/rohilvarma" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub ↗</a>
            <a href="https://linkedin.com/in/rohilvarma" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </>
  );
}
