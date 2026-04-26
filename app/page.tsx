import Link from 'next/link';
import { projects, stackGroups } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="px-10 pt-20 pb-16 max-sm:px-5 max-sm:pt-12 max-sm:pb-10">
        <p className="text-[11px] tracking-[0.1em] text-muted uppercase font-mono mb-[22px]">
          Application Engineer · Google
        </p>
        <h1 className="text-[clamp(26px,4vw,40px)] font-light leading-[1.2] tracking-[-0.025em] text-ink mb-[22px] max-w-[660px]">
          Building systems that{' '}
          <em className="not-italic text-accent">scale reliably</em>{' '}
          — from distributed infrastructure to the tools engineers reach for every day.
        </h1>
        <p className="text-[15px] text-muted leading-[1.65] max-w-[480px] mb-9">
          I work at the intersection of platform complexity and developer experience. I care about
          observable, maintainable systems that outlive the sprint they shipped in.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a href="#work" className="bg-ink text-base text-[13px] px-5 py-[10px] rounded-md border-none cursor-pointer transition-opacity duration-[180ms] hover:opacity-80">
            View work
          </a>
          <Link href="/about" className="bg-transparent text-ink text-[13px] px-5 py-[10px] border border-[0.5px] border-line rounded-md cursor-pointer transition-colors duration-[180ms] hover:border-ink">
            About me
          </Link>
        </div>

        <div className="flex gap-9 pt-11 border-t border-t-[0.5px] border-line mt-11 flex-wrap transition-colors duration-[180ms]">
          {[
            { val: '[ — ]',      lbl: 'latency improvement' },
            { val: '[ — ] yrs',  lbl: 'production systems'  },
            { val: '[ — ]',      lbl: 'engineers served'    },
            { val: '[ — ]',      lbl: 'infra cost reduction' },
          ].map((m) => (
            <div key={m.lbl}>
              <div className="text-2xl font-medium text-ink tracking-[-0.03em]">{m.val}</div>
              <div className="text-[11px] text-muted mt-[3px] font-mono">{m.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="h-px border-none bg-line mx-10 max-sm:mx-5" />

      {/* ── WORK ── */}
      <section className="px-10 py-14 max-sm:px-5 max-sm:py-10" id="work">
        <p className="text-[13px] tracking-[0.1em] text-muted uppercase font-mono mb-8">
          Selected work — {projects.length} projects · click to read technical doc
        </p>
        <div className="grid gap-px bg-line border border-[0.5px] border-line rounded-lg overflow-hidden [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))] transition-colors duration-[180ms]">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/work/${p.slug}`}
              className="group relative block bg-base p-7 transition-colors duration-[180ms] hover:bg-surface"
            >
              <span className="absolute top-[26px] right-[26px] text-[13px] text-accent opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                ↗
              </span>
              <div className="text-[11px] font-mono text-faint mb-4">{p.id}</div>
              <div className="text-[16px] font-medium text-ink tracking-[-0.015em] mb-2 leading-[1.25]">{p.title}</div>
              <div className="text-[13px] text-muted leading-[1.55] mb-[18px]">{p.description}</div>
              <div className="flex gap-[5px] flex-wrap mb-[18px]">
                {p.chips.map((chip) => (
                  <span key={chip} className="text-[11px] font-mono text-chip-ink bg-chip px-[7px] py-[3px] rounded-[3px] transition-colors duration-[180ms]">
                    {chip}
                  </span>
                ))}
                <span className="text-[11px] font-mono text-accent-dim bg-accent-tint px-[7px] py-[3px] rounded-[3px] transition-colors duration-[180ms]">
                  {p.accentChip}
                </span>
              </div>
              <div className="flex gap-[14px] pt-[14px] border-t border-t-[0.5px] border-line flex-wrap transition-colors duration-[180ms]">
                {p.outcomes.map((o) => (
                  <div key={o.label} className="text-[12px] text-ink font-medium">
                    {o.value} <span className="text-muted font-normal">{o.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-[12px] text-accent font-mono inline-flex items-center gap-1">
                Read technical doc →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="h-px border-none bg-line mx-10 max-sm:mx-5" />

      {/* ── STACK ── */}
      <section className="px-10 py-14 max-sm:px-5 max-sm:py-10">
        <p className="text-[13px] tracking-[0.1em] text-muted uppercase font-mono mb-8">
          Tech stack — depth map
        </p>
        <div className="grid gap-7 [grid-template-columns:repeat(auto-fit,minmax(190px,1fr))]">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <div className="text-[11px] tracking-[0.08em] uppercase text-muted font-mono mb-3 pb-2 border-b border-b-[0.5px] border-line transition-colors duration-[180ms]">
                {group.title}
              </div>
              {group.items.map((item) => (
                <div key={item.name} className="text-[13px] text-muted py-[5px] border-b border-b-[0.5px] border-faint flex justify-between items-center transition-colors duration-[180ms]">
                  {item.name}
                  <span className={`text-[10px] font-mono ${item.deep ? 'text-accent' : 'text-faint'}`}>
                    {item.depth}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <div id="contact" className="px-10 py-12 border-t border-t-[0.5px] border-line flex items-start justify-between flex-wrap gap-6 transition-colors duration-[180ms] max-sm:px-5 max-sm:py-10">
        <div>
          <p className="text-[20px] font-light tracking-[-0.02em] text-ink max-w-[340px] leading-[1.35]">
            Let&apos;s work on something that matters at scale.
          </p>
          <div className="flex gap-[10px] flex-wrap mt-3">
            <a href="mailto:rohilvarma96@gmail.com" className="bg-ink text-base text-[13px] px-5 py-[10px] rounded-md cursor-pointer transition-opacity duration-[180ms] hover:opacity-80">
              rohilvarma96@gmail.com
            </a>
            <a href="https://github.com/rohilvarma" target="_blank" rel="noopener noreferrer" className="bg-transparent text-ink text-[13px] px-5 py-[10px] border border-[0.5px] border-line rounded-md cursor-pointer transition-colors duration-[180ms] hover:border-ink">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/rohilvarma" target="_blank" rel="noopener noreferrer" className="bg-transparent text-ink text-[13px] px-5 py-[10px] border border-[0.5px] border-line rounded-md cursor-pointer transition-colors duration-[180ms] hover:border-ink">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
