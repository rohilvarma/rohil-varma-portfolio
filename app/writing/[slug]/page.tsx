import Link from 'next/link';
import { posts } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} — Rohil Varma` };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Link href="/writing" className="text-[11px] text-muted font-mono inline-flex items-center gap-[6px] tracking-[0.04em] px-10 py-5 transition-colors duration-[180ms] hover:text-ink max-sm:px-5 max-sm:py-4">
        ← Back to writing
      </Link>

      <div className="px-10 pb-20 max-w-[680px] max-sm:px-5 max-sm:pb-16">
        <div className="text-[11px] font-mono text-muted tracking-[0.08em] uppercase flex items-center gap-3 mb-5">
          <span>{post.tag}</span>
          <span className="text-faint">·</span>
          <span>{post.date}</span>
        </div>

        <h1 className="text-[clamp(22px,3.5vw,32px)] font-light tracking-[-0.025em] leading-[1.2] text-ink mb-8">
          {post.title}
        </h1>

        <div className="text-[15px] text-muted leading-[1.8] [&_p]:mb-[18px] [&_strong]:text-ink [&_strong]:font-medium [&_h2]:text-[16px] [&_h2]:font-medium [&_h2]:text-ink [&_h2]:tracking-[-0.015em] [&_h2]:mt-9 [&_h2]:mb-3 [&_code]:font-mono [&_code]:text-[12px] [&_code]:bg-chip [&_code]:px-[5px] [&_code]:py-[2px] [&_code]:rounded-[3px] [&_code]:text-ink [&_pre]:bg-surface [&_pre]:border [&_pre]:border-[0.5px] [&_pre]:border-line [&_pre]:rounded-md [&_pre]:p-5 [&_pre]:my-5 [&_pre]:overflow-x-auto [&_pre]:font-mono [&_pre]:text-[12px] [&_pre]:text-ink [&_pre]:leading-[1.6]">
          <p>
            <strong>This is a placeholder post.</strong> Replace with your actual content. Images can
            be referenced from your <code>/public/</code> directory.
          </p>
          <h2>The problem</h2>
          <p>
            Your first paragraph. Describe the context — what system, what scale, what was going
            wrong or what opportunity you saw.
          </p>
          <h2>The approach</h2>
          <p>Walk through your thinking. What did you evaluate? What did you choose and why?</p>
          <pre>{`// code snippet example
func trace(ctx context.Context, op string) (context.Context, func()) {
    span := tracer.Start(ctx, op)
    return span.Context(), span.End
}`}</pre>
          <h2>What I&apos;d do differently</h2>
          <p>
            This is the section that signals senior-level thinking. Be honest and specific about what
            you learned.
          </p>
        </div>
      </div>
    </>
  );
}
