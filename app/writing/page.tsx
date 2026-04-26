import Link from 'next/link';
import { posts } from '@/lib/data';

export const metadata = { title: 'Writing — Rohil Varma' };

export default function WritingPage() {
  return (
    <section className="px-10 py-14 max-w-[720px] max-sm:px-5 max-sm:py-10">
      <p className="text-[13px] tracking-[0.1em] text-muted uppercase font-mono mb-8">
        Writing — thoughts on systems, craft, and engineering at scale
      </p>

      <div className="flex flex-col">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group flex items-baseline justify-between py-[18px] border-b border-b-[0.5px] border-line gap-4 transition-colors duration-[180ms] first:border-t first:border-t-[0.5px]"
          >
            <span className="text-sm font-normal text-ink tracking-[-0.01em] transition-colors duration-[180ms] group-hover:text-accent">
              {post.title}
            </span>
            <div className="flex gap-3 items-center shrink-0">
              <span className="text-[10px] font-mono text-muted bg-chip px-[6px] py-[2px] rounded-[3px]">
                {post.tag}
              </span>
              <span className="text-[11px] font-mono text-faint">{post.date}</span>
              <span className="text-faint text-[12px] transition-colors duration-[180ms] group-hover:text-accent">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
