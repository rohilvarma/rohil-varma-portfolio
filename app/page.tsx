import WavingEmoji from "@/components/WavingEmoji";
import profile from "@/public/profile.jpeg";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="font-bold text-6xl flex items-center gap-4">
              <span className="">Hi, I&apos;m Rohil</span>
              <WavingEmoji />
            </h1>
            <div className="">
              <div className="text-muted-foreground text-xl mt-4 mb-2 flex items-start gap-2">
                I love building solutions in and{" "}
                .
              </div>
              <div className="flex items-center gap-2">
                <Link target="_blank" href="https://github.com/rohilvarma">
                  <FaGithub size={25} />
                </Link>
                <Link target="_blank" href="https://linkedin.com/in/rohilvarma">
                  <FaLinkedin size={25} />
                </Link>
              </div>
            </div>
          </div>
          <Image
            src={profile.src}
            width={225}
            height={225}
            alt="@rohilvarma"
            className="rounded-full border-4 border-blue-600"
          />
        </div>
      </section>
      <section className="grid grid-cols-5 mt-8">
        <div className="col-span-3"></div>
        <div className="col-span-2">
          <Work />
        </div>
      </section>
    </main>
  );
}
