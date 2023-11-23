import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="text-self">
      <Link href={'https://www.linkedin.com/in/rohil-varma/'} className="pt-6 flex items-center">
        Contact me <GoArrowUpRight size={20} />
      </Link>
    </div>
  )
}

export default Footer