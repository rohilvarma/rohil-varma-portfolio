'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isWork    = pathname === '/' || pathname.startsWith('/work');
  const isAbout   = pathname === '/about';
  const isWriting = pathname === '/writing' || pathname.startsWith('/writing');

  const navLink = (active: boolean) =>
    cn(
      'nav-link relative text-[12px] cursor-pointer transition-colors duration-[180ms] bg-transparent border-none p-0',
      active ? 'text-ink active' : 'text-muted hover:text-ink'
    );

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-center bg-base border-b border-b-[0.5px] border-line transition-colors duration-[180ms]">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-10 py-[18px] sm:px-10 max-sm:px-5 max-sm:py-[14px]">

        <Link href="/" className="text-[13px] font-medium tracking-[-0.01em] text-ink transition-colors duration-[180ms]">
          Rohil Varma
        </Link>

        <div className="flex gap-7 items-center max-sm:gap-[14px]">
          <Link href="/"        className={navLink(isWork)}>Work</Link>
          <Link href="/about"   className={navLink(isAbout)}>About</Link>
          <Link href="/writing" className={navLink(isWriting)}>Writing</Link>
          <a href="/#contact"   className={navLink(false)}>Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-muted border border-[0.5px] border-line px-[10px] py-1 rounded-full font-mono transition-colors duration-[180ms] max-sm:hidden">
            @ Google · 2022–present
          </span>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-8 h-8 rounded-full bg-transparent border border-[0.5px] border-line text-muted text-sm flex items-center justify-center cursor-pointer transition-all duration-[180ms] hover:border-ink hover:text-ink"
            >
              {theme === 'dark' ? '☀' : '☽'}
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}
