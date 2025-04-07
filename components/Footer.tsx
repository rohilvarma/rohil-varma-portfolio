import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { footerContent } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between border-t-2 border-t-muted py-12 mt-12">
      <div className="flex items-center gap-6">
        {footerContent.map((f, index) => (
          <Link key={index} href={f.link}>
            {f.name}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
