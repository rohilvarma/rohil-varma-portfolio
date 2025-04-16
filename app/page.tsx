import SkillBadge from "@/components/SkillBadge";
import Title from "@/components/Title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { projects, skills, snippets, socials, workEx } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-6 md:space-y-8 lg:space-y-12 mb-6 lg:mb-0">
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={{
              width: "fit-content",
              height: "fit-content",
              borderRadius: "50%",
            }}
          >
            <div className="">
              <Image
                src="/profile.jpeg"
                width={75}
                height={75}
                alt="Profile Photo"
                className="rounded-full"
              />
            </div>
            <div className="flex-grow w-full">
              <Title title="Rohil Varma" hoverText="@rohilvarma" size={2} />
              <p className="text-muted-foreground -mt-2">Software Engineer</p>
            </div>
          </motion.div>
          <div className="text-primary mt-4">
            I&apos;m a developer and a keyboard-enthusiast. I work at{" "}
            <Link
              className="link"
              href="https://www2.deloitte.com/ui/en.html"
              target="_blank"
            >
              Deloitte
            </Link>{" "}
            as a backend engineer, where I build finance solutions while
            pursuing personal projects that make my own daily life a little
            easier.
          </div>
          <div className="">
            <Title title="Writing" size={2} />
            <ul className="text-muted-foreground duration-100 ease-linear list-disc list-inside pl-2">
              {snippets.map((sn, i) => (
                <li key={i}>
                  <Link href={sn.link} className="link">
                    {sn.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <Title title="Code" size={2} />
            <ul className="text-muted-foreground duration-100 ease-linear list-disc list-inside pl-2">
              {projects.slice(0, 3).map((pr, i) => (
                <li key={i}>
                  <Link href={pr.source} className="link">
                    {pr.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <Title title="Socials" size={2} />
            <ul className="text-2xl flex items-center gap-2 flex-wrap">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <li key={i} className="">
                    <Link href={social.link} target="_blank">
                      <Icon />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          <div className="">
            <Title title="Work" size={2} />
            <div className="space-y-4">
              {workEx.map((ex, index) => {
                return (
                  <motion.div
                    key={index}
                    className="flex gap-2 items-center"
                    initial={{
                      opacity: 0,
                      y: index * 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    <Avatar className="border-2 border-muted">
                      <AvatarImage src={ex.icon.src} />
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <h2 className="font-semibold">{ex.company}</h2>
                      <div className="text-muted-foreground text-xs flex items-center justify-between">
                        <p className="">{ex.designation}</p>
                        <p className="">
                          {ex.from} - {ex.to}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              <Button className="w-full">
                <Link
                  href="/Rohil Varma.pdf"
                  target="_blank"
                  download="Rohil Varma.pdf"
                  className="flex items-center gap-2"
                >
                  <Download /> Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="">
            <Title title="Skills" size={2} />
            <div className="">
              {Object.entries(skills).map(([category, items], index) => (
                <motion.div
                  key={category}
                  className="mb-4"
                  initial={{
                    opacity: 0,
                    y: index * 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                >
                  <h3 className="text-lg font-semibold capitalize mb-1">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {items.map((item, index) => (
                      <SkillBadge key={index} name={item} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
