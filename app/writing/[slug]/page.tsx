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
      <Link href="/writing" className="back-btn">← Back to writing</Link>
      <div className="post-wrap">
        <div className="post-eyebrow">
          <span>{post.tag}</span>
          <span style={{ color: 'var(--faint)' }}>·</span>
          <span>{post.date}</span>
        </div>
        <h1 className="post-h">{post.title}</h1>
        <div className="post-body">
          <p>
            <strong>This is a placeholder post.</strong> Replace with your actual content. Images
            can be referenced from your <code>/public/</code> directory.
          </p>
          <h2>The problem</h2>
          <p>
            Your first paragraph. Describe the context — what system, what scale, what was going
            wrong or what opportunity you saw.
          </p>
          <h2>The approach</h2>
          <p>
            Walk through your thinking. What did you evaluate? What did you choose and why?
          </p>
          <pre>{`// code snippet example
func trace(ctx context.Context, op string) (context.Context, func()) {
    span := tracer.Start(ctx, op)
    return span.Context(), span.End
}`}</pre>
          <h2>What I&apos;d do differently</h2>
          <p>
            This is the section that signals senior-level thinking. Be honest and specific about
            what you learned.
          </p>
        </div>
      </div>
    </>
  );
}
