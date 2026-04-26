import { experience } from '@/lib/data';

export const metadata = { title: 'About — Rohil Varma' };

export default function AboutPage() {
  return (
    <section className="px-10 py-14 max-sm:px-5 max-sm:py-10">
      <p className="text-[13px] tracking-[0.1em] text-muted uppercase font-mono mb-8">About</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* Bio */}
        <p className="text-[16px] text-muted leading-[1.8]">
          <strong className="text-ink font-medium">I&apos;m Rohil.</strong> Application Engineer at
          Google, based in [ City ]. I&apos;ve spent the past few years building distributed systems,
          developer platforms, and the kind of internal tooling that makes entire engineering orgs
          move faster.
          <br /><br />
          I&apos;m drawn to problems at scale — where a naive solution works until it doesn&apos;t, and a
          thoughtful one runs for years without incident. I write RFCs before code. I think in
          queues, consistency guarantees, and failure modes.
          <br /><br />
          Outside of systems work, I&apos;m interested in the craft of engineering communication: how to
          write clearly about complex things, and how to run design reviews that actually improve
          outcomes rather than just check a box.
          <br /><br />
          When I&apos;m not in a terminal, I&apos;m [ something personal ]. I find it keeps the perspective
          honest.
        </p>

        {/* Experience */}
        <div>
          {experience.map((item) => (
            <div
              key={`${item.role}-${item.company}`}
              className="mb-[22px] pb-[22px] border-b border-b-[0.5px] border-line transition-colors duration-[180ms] last:border-b-0 last:mb-0 last:pb-0"
            >
              <div className="text-[13px] font-medium text-ink">
                {item.role}{' '}
                {item.company && (
                  <>
                    <span className="text-muted font-normal">·</span>{' '}
                    <span className="text-accent">{item.company}</span>
                  </>
                )}
              </div>
              <div className="text-[11px] font-mono text-muted mt-1">{item.period}</div>
              {item.bullets.length > 0 && (
                <ul className="mt-2 list-none p-0 space-y-0">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="exp-bullet text-[12px] text-muted leading-[1.6] py-[3px] flex gap-2">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
