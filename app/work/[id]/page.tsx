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

export default async function ProjectDocPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idx = projects.findIndex((p) => p.slug === id);
  if (idx === -1) notFound();

  const project = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      <Link href="/" className="back-btn">← Back to work</Link>

      <div className="doc-wrap">
        <div className="doc-tag">Technical documentation · {project.id}</div>
        <h2 className="doc-h">{project.title}</h2>

        <div className="doc-meta">
          <div className="doc-meta-item">
            <div className="k">Role</div>
            <div className="v">{project.meta.role}</div>
          </div>
          <div className="doc-meta-item">
            <div className="k">Year</div>
            <div className="v">{project.meta.year}</div>
          </div>
          <div className="doc-meta-item">
            <div className="k">Team size</div>
            <div className="v">{project.meta.team}</div>
          </div>
          <div className="doc-meta-item">
            <div className="k">Stack</div>
            <div className="v">{project.meta.stack}</div>
          </div>
        </div>

        <div className="doc-toc">
          <div className="doc-toc-title">Contents</div>
          <ul className="doc-toc-list">
            <li><a href="#sec-idea">01 — The idea</a></li>
            <li><a href="#sec-problem">02 — The problem at scale</a></li>
            <li><a href="#sec-approach">03 — Approach &amp; architecture</a></li>
            <li><a href="#sec-tradeoffs">04 — Technical trade-offs</a></li>
            <li><a href="#sec-impl">05 — Implementation notes</a></li>
            <li><a href="#sec-results">06 — Results</a></li>
            <li><a href="#sec-retro">07 — Retrospective</a></li>
          </ul>
        </div>

        <div className="doc-section" id="sec-idea">
          <div className="doc-section-title">01 — The idea</div>
          <div className="doc-body">
            <div className="doc-placeholder">
              Describe what this project is and why it exists. What was the original spark — a
              product need, a performance cliff, a tech debt emergency? 2–3 sentences is enough.
            </div>
          </div>
        </div>

        <div className="doc-section" id="sec-problem">
          <div className="doc-section-title">02 — The problem at scale</div>
          <div className="doc-body">
            <div className="doc-placeholder">
              Quantify the before-state. Not &quot;performance was bad&quot; — write &quot;our service
              processed X RPM at peak; p99 latency had degraded to Xms.&quot; Numbers make the
              problem real.
            </div>
            <div className="doc-placeholder">
              Describe your constraints. What could you NOT do? Constraints prove engineering
              maturity.
            </div>
          </div>
        </div>

        <div className="doc-section" id="sec-approach">
          <div className="doc-section-title">03 — Approach &amp; architecture</div>
          <div className="doc-body">
            <div className="doc-placeholder">
              Describe the approach you chose. Walk through the high-level architecture: components,
              data flow, key interactions. Add a diagram here if you have one.
            </div>
            <div className="doc-placeholder">
              List 2–3 alternatives you considered and why you didn&apos;t pick them. One sentence each.
            </div>
          </div>
        </div>

        <div className="doc-section" id="sec-tradeoffs">
          <div className="doc-section-title">04 — Technical trade-offs</div>
          <div className="doc-body">
            <table className="tradeoff-table">
              <thead>
                <tr>
                  <th>Decision</th>
                  <th>Chosen over</th>
                  <th>Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>[ e.g. Eventual consistency ]</td>
                  <td>[ Strong consistency ]</td>
                  <td>[ Why — what you gained, what you accepted ]</td>
                </tr>
                <tr>
                  <td>[ Decision 2 ]</td>
                  <td>[ Alternative 2 ]</td>
                  <td>[ Rationale 2 ]</td>
                </tr>
                <tr>
                  <td>[ Decision 3 ]</td>
                  <td>[ Alternative 3 ]</td>
                  <td>[ Rationale 3 ]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="doc-section" id="sec-impl">
          <div className="doc-section-title">05 — Implementation notes</div>
          <div className="doc-body">
            <div className="doc-placeholder">
              1–3 specific technical decisions worth noting: data structures, algorithms, schema
              design, concurrency model. Use inline code snippets where they add clarity.
            </div>
            <div className="doc-placeholder">
              Describe non-obvious gotchas you hit. What surprised you? What took longer than
              expected?
            </div>
          </div>
        </div>

        <div className="doc-section" id="sec-results">
          <div className="doc-section-title">06 — Results</div>
          <div className="result-row">
            <div className="metric">p99 latency</div>
            <div className="delta pos">[ before ] → [ after ]</div>
          </div>
          <div className="result-row">
            <div className="metric">Throughput</div>
            <div className="delta ph">[ before ] → [ after ]</div>
          </div>
          <div className="result-row">
            <div className="metric">Infrastructure cost</div>
            <div className="delta ph">[ delta ]</div>
          </div>
          <div className="result-row">
            <div className="metric">Incidents post-deploy</div>
            <div className="delta ph">[ count ]</div>
          </div>
        </div>

        <div className="doc-section" id="sec-retro">
          <div className="doc-section-title">07 — Retrospective</div>
          <div className="doc-body">
            <div className="doc-placeholder">
              What would you do differently if you started over? Be specific, not self-deprecating.
              This section signals intellectual honesty and continued growth.
            </div>
          </div>
        </div>

        <div className="doc-ctas">
          <button className="btn-primary">GitHub repo ↗</button>
          <button className="btn-secondary">Live demo ↗</button>
        </div>
      </div>

      <div className="doc-nav-footer">
        {prev ? (
          <Link href={`/work/${prev.slug}`} className="doc-nav-btn">← {prev.title}</Link>
        ) : (
          <span style={{ visibility: 'hidden' }} className="doc-nav-btn">prev</span>
        )}
        <span className="doc-nav-pos">{idx + 1} / {projects.length}</span>
        {next ? (
          <Link href={`/work/${next.slug}`} className="doc-nav-btn">{next.title} →</Link>
        ) : (
          <span style={{ visibility: 'hidden' }} className="doc-nav-btn">next</span>
        )}
      </div>
    </>
  );
}
