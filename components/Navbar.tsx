'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isWork = pathname === '/' || pathname.startsWith('/work');
  const isAbout = pathname === '/about';
  const isWriting = pathname === '/writing' || pathname.startsWith('/writing');

  return (
    <nav className="nav">
      <Link href="/" className="nav-name">Rohil Varma</Link>
      <div className="nav-links">
        <Link href="/" className={`nav-link ${isWork ? 'active' : ''}`}>Work</Link>
        <Link href="/about" className={`nav-link ${isAbout ? 'active' : ''}`}>About</Link>
        <Link href="/writing" className={`nav-link ${isWriting ? 'active' : ''}`}>Writing</Link>
        <a href="/#contact" className="nav-link">Contact</a>
      </div>
      <div className="nav-right">
        <div className="nav-avail">@ Google · 2022–present</div>
        {mounted && (
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '☀' : '☽'}
          </button>
        )}
      </div>
    </nav>
  );
}
