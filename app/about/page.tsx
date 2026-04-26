import { experience } from '@/lib/data';

export const metadata = {
  title: 'About — Rohil Varma',
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div>
          <p className="about-bio">
            <strong>I&apos;m Rohil.</strong> Application Engineer at Google, based in [ City ]. I&apos;ve
            spent the past few years building distributed systems, developer platforms, and the kind of
            internal tooling that makes entire engineering orgs move faster.
            <br /><br />
            I&apos;m drawn to problems at scale — where a naive solution works until it doesn&apos;t, and a
            thoughtful one runs for years without incident. I write RFCs before code. I think in queues,
            consistency guarantees, and failure modes.
            <br /><br />
            Outside of systems work, I&apos;m interested in the craft of engineering communication: how to
            write clearly about complex things, and how to run design reviews that actually improve
            outcomes rather than just check a box.
            <br /><br />
            When I&apos;m not in a terminal, I&apos;m [ something personal — hiking, reading, cooking, etc. ].
            I find it keeps the perspective honest.
          </p>
        </div>
        <div>
          {experience.map((item) => (
            <div key={`${item.role}-${item.company}`} className="exp-item">
              <div className="exp-role">
                {item.role}{' '}
                {item.company && (
                  <>
                    <span style={{ color: 'var(--muted)', fontWeight: 400 }}>·</span>{' '}
                    <span className="exp-co">{item.company}</span>
                  </>
                )}
              </div>
              <div className="exp-meta">{item.period}</div>
              {item.bullets.length > 0 && (
                <ul className="exp-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
