import Link from 'next/link';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.slug === id);
  if (!project) return {};
  return { title: `${project.title} — Rohil Varma` };
}

const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-surface border border-dashed border-line rounded-md px-5 py-4 text-[13px] text-muted font-mono my-3 leading-[1.6] transition-colors duration-[180ms]">
    <span className="text-faint">// </span>{children}
  </div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="doc-section-title text-[12px] font-mono text-muted tracking-[0.08em] uppercase mb-3 flex items-center gap-2">
    {children}
  </div>
);

export default async function ProjectDocPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idx = projects.findIndex((p) => p.slug === id);
  if (idx === -1) notFound();

  const project = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <Link href="/" className="text-[11px] text-muted font-mono inline-flex items-center gap-[6px] tracking-[0.04em] px-10 py-5 transition-colors duration-[180ms] hover:text-ink max-sm:px-5 max-sm:py-4">
        ← Back to work
      </Link>

      <div className="px-10 pb-20 max-w-[720px] max-sm:px-5 max-sm:pb-16">

        {/* Header */}
        <div className="text-[10px] font-mono text-faint tracking-[0.1em] uppercase mb-[14px] flex items-center gap-2">
          Technical documentation · {project.id}
        </div>
        <h2 className="text-[clamp(22px,3.5vw,32px)] font-light tracking-[-0.025em] leading-[1.2] text-ink mb-6">
          {project.title}
        </h2>

        {/* Meta strip */}
        <div className="flex gap-5 flex-wrap py-[14px] border-y border-y-[0.5px] border-line mb-9 transition-colors duration-[180ms]">
          {[
            { k: 'Role',      v: project.meta.role  },
            { k: 'Year',      v: project.meta.year  },
            { k: 'Team size', v: project.meta.team  },
            { k: 'Stack',     v: project.meta.stack },
          ].map(({ k, v }) => (
            <div key={k}>
              <div className="text-[10px] font-mono text-faint uppercase tracking-[0.06em] mb-[3px]">{k}</div>
              <div className="text-[13px] text-ink font-medium">{v}</div>
            </div>
          ))}
        </div>

        {/* TOC */}
        <div className="bg-surface border border-[0.5px] border-line rounded-md px-5 py-4 mb-9 transition-colors duration-[180ms]">
          <div className="text-[10px] font-mono text-muted tracking-[0.08em] uppercase mb-[10px]">Contents</div>
          <ul className="list-none flex flex-col gap-[5px]">
            {[
              ['#sec-idea',       '01 — The idea'],
              ['#sec-problem',    '02 — The problem at scale'],
              ['#sec-approach',   '03 — Approach & architecture'],
              ['#sec-tradeoffs',  '04 — Technical trade-offs'],
              ['#sec-impl',       '05 — Implementation notes'],
              ['#sec-results',    '06 — Results'],
              ['#sec-retro',      '07 — Retrospective'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-[12px] text-accent font-mono hover:underline">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="mb-10" id="sec-idea">
          <SectionTitle>01 — The idea</SectionTitle>
          <Placeholder>Describe what this project is and why it exists. What was the original spark — a product need, a performance cliff, a tech debt emergency? 2–3 sentences is enough.</Placeholder>
        </div>

        <div className="mb-10" id="sec-problem">
          <SectionTitle>02 — The problem at scale</SectionTitle>
          <Placeholder>Quantify the before-state. Not &quot;performance was bad&quot; — write &quot;our service processed X RPM at peak; p99 latency had degraded to Xms.&quot; Numbers make the problem real.</Placeholder>
          <Placeholder>Describe your constraints. What could you NOT do? Constraints prove engineering maturity.</Placeholder>
        </div>

        <div className="mb-10" id="sec-approach">
          <SectionTitle>03 — Approach &amp; architecture</SectionTitle>
          <Placeholder>Describe the approach you chose. Walk through the high-level architecture: components, data flow, key interactions.</Placeholder>
          <Placeholder>List 2–3 alternatives you considered and why you didn&apos;t pick them. One sentence each.</Placeholder>
        </div>

        <div className="mb-10" id="sec-tradeoffs">
          <SectionTitle>04 — Technical trade-offs</SectionTitle>
          <table className="w-full border-collapse text-[13px] my-3">
            <thead>
              <tr>
                {['Decision', 'Chosen over', 'Rationale'].map((h) => (
                  <th key={h} className="text-[10px] font-mono text-muted uppercase tracking-[0.06em] px-3 py-2 border-b border-b-[0.5px] border-line text-left font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['[ e.g. Eventual consistency ]', '[ Strong consistency ]',  '[ Why — what you gained, what you accepted ]'],
                ['[ Decision 2 ]',               '[ Alternative 2 ]',       '[ Rationale 2 ]'],
                ['[ Decision 3 ]',               '[ Alternative 3 ]',       '[ Rationale 3 ]'],
              ].map(([d, a, r], i) => (
                <tr key={i}>
                  <td className="px-3 py-[10px] border-b border-b-[0.5px] border-faint text-ink font-medium align-top leading-[1.5] w-[35%]">{d}</td>
                  <td className="px-3 py-[10px] border-b border-b-[0.5px] border-faint text-muted align-top leading-[1.5]">{a}</td>
                  <td className="px-3 py-[10px] border-b border-b-[0.5px] border-faint text-muted align-top leading-[1.5]">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-10" id="sec-impl">
          <SectionTitle>05 — Implementation notes</SectionTitle>
          <Placeholder>1–3 specific technical decisions worth noting: data structures, algorithms, schema design, concurrency model.</Placeholder>
          <Placeholder>Describe non-obvious gotchas you hit. What surprised you? What took longer than expected?</Placeholder>
        </div>

        <div className="mb-10" id="sec-results">
          <SectionTitle>06 — Results</SectionTitle>
          {[
            { metric: 'p99 latency',          delta: '[ before ] → [ after ]', pos: true  },
            { metric: 'Throughput',            delta: '[ before ] → [ after ]', pos: false },
            { metric: 'Infrastructure cost',   delta: '[ delta ]',              pos: false },
            { metric: 'Incidents post-deploy', delta: '[ count ]',              pos: false },
          ].map((r) => (
            <div key={r.metric} className="flex justify-between items-baseline py-[10px] border-b border-b-[0.5px] border-faint transition-colors duration-[180ms]">
              <span className="text-[13px] text-muted">{r.metric}</span>
              <span className={`text-sm font-medium font-mono ${r.pos ? 'text-pos' : 'text-faint italic'}`}>{r.delta}</span>
            </div>
          ))}
        </div>

        <div className="mb-10" id="sec-retro">
          <SectionTitle>07 — Retrospective</SectionTitle>
          <Placeholder>What would you do differently if you started over? Be specific, not self-deprecating. This section signals intellectual honesty and continued growth.</Placeholder>
        </div>

        {/* CTAs */}
        <div className="flex gap-[10px] mt-10 pt-5 border-t border-t-[0.5px] border-line flex-wrap transition-colors duration-[180ms]">
          <button className="bg-ink text-base text-[13px] px-5 py-[10px] rounded-md border-none cursor-pointer transition-opacity duration-[180ms] hover:opacity-80">
            GitHub repo ↗
          </button>
          <button className="bg-transparent text-ink text-[13px] px-5 py-[10px] border border-[0.5px] border-line rounded-md cursor-pointer transition-colors duration-[180ms] hover:border-ink">
            Live demo ↗
          </button>
        </div>
      </div>

      {/* Prev / Next */}
      <div className="flex justify-between items-center px-10 py-6 border-t border-t-[0.5px] border-line transition-colors duration-[180ms] max-sm:px-5 max-sm:py-5">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="text-[12px] font-mono text-muted transition-colors duration-[180ms] hover:text-accent">
            ← {prev.title}
          </Link>
        ) : <span />}
        <span className="text-[11px] font-mono text-faint">{idx + 1} / {projects.length}</span>
        {next ? (
          <Link href={`/work/${next.slug}`} className="text-[12px] font-mono text-muted transition-colors duration-[180ms] hover:text-accent">
            {next.title} →
          </Link>
        ) : <span />}
      </div>
    </>
  );
}
