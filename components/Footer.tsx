import { GoArrowUpRight } from "react-icons/go";
import { socialMediaLinks } from "@/data/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-self flex items-center gap-x-4">
      <Link href={socialMediaLinks['github']} target="_blank" className="pt-6 hover:text-white duration-150 ease-in-out flex items-center">
        GitHub <GoArrowUpRight size={20} />
      </Link>
      <Link href={socialMediaLinks['linkedin']} target="_blank" className="pt-6 hover:text-white duration-150 ease-in-out flex items-center">
        LinkedIn <GoArrowUpRight size={20} />
      </Link>
    </div>
  )
}

export default Footer