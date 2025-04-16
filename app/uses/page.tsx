import Title from "@/components/Title";
import { uses } from "@/lib/constants";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Uses | Rohil Varma",
  description: "A list of (almost) everything I use.",
};

const UsesPage = () => {
  return (
    <main>
      <Title title="/uses" />
      <p className="text-primary">
        If you&apos;ve ever wondered about the tools I use - whether it&apos;s software, hardware, fonts, or anything else - this page has all the details. Inspired by {" "}
        <Link
          href="https://uses.tech/"
          className="link"
        >
          uses.tech
        </Link>
        .
      </p>
      <Image
        src="/assets/uses.JPG"
        alt="Setup"
        width={1980}
        height={1080}
        quality={100}
        className="w-full h-full"
      />
      <div className="mt-8">
        {uses.map((u, i) => {
          return (
            <div key={i} className="grid md:grid-cols-2 gap-4 sm:gap-0">
              <h1 className="font-bold text-3xl">{u.heading}</h1>
              <ul className="list-disc pl-4 md:pl-0 md:list-none">
                {u.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className="mb-8"
                    initial={{
                      opacity: 0,
                      y: index * 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    <Link href={item.link} className="text-xl font-medium">
                      {item.item}
                    </Link>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
};
export default UsesPage;
