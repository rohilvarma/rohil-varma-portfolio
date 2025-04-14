import Title from "@/components/Title";
import { uses } from "@/lib/constants";
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
        If you’ve ever wondered what I’m using be it software, hardware, fonts,
        etc. then this page is dedicated for that. Based on{" "}
        <Link
          href="https://uses.tech/"
          className="underline dark:text-neutral-500 dark:hover:text-neutral-600 text-neutral-900 hover:text-neutral-500 duration-200 ease-linear"
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
                  <li key={index} className="mb-8">
                    <Link href={item.link} className="text-xl font-medium">
                      {item.item}
                    </Link>
                    <p className="text-muted-foreground">{item.description}</p>
                  </li>
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
