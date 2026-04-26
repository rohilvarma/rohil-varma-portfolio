import Link from 'next/link';
import { posts } from '@/lib/data';

export const metadata = {
  title: 'Writing — Rohil Varma',
};

export default function WritingPage() {
  return (
    <div className="section" style={{ maxWidth: '720px' }}>
      <div className="section-label">Writing — thoughts on systems, craft, and engineering at scale</div>
      <div className="blog-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/writing/${post.slug}`} className="blog-item">
            <div className="blog-title">{post.title}</div>
            <div className="blog-meta">
              <span className="blog-tag">{post.tag}</span>
              <span className="blog-date">{post.date}</span>
              <span className="blog-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
