'use client'
import Link from "next/link";
import { navLinks } from "@/data/data";
import { usePathname } from "next/navigation";
import { GoDownload } from "react-icons/go";

const Navbar = () => {

  const pathName = usePathname()

  return (
    <nav className="py-16">
      <div className="flex gap-4">
        {navLinks.map((navLink) => (
          <Link key={navLink.key} href={navLink.url} className={`${pathName === navLink.url && "text-neutral-200"} nav-link`}>
            {navLink.link}
          </Link>
        ))}
        <Link href="/Rohil Varma.pdf" className="nav-link ml-auto flex items-center" target='_blank' download="Rohil Varma.pdf">resume <GoDownload /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
