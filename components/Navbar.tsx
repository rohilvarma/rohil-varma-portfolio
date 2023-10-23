import Link from "next/link";
import { navLinks } from "@/data/data";

const Navbar = () => {
  return (
    <nav className="py-16">
      <div className="flex gap-4">
        {navLinks.map((navLink) => (
          <Link key={navLink.key} href={navLink.url} className="nav-link">
            {navLink.link}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
