import SkillBadge from "@/components/SkillBadge";
import Title from "@/components/Title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/constants";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { GrDeploy } from "react-icons/gr";

export const metadata: Metadata = {
  title: "Projects | Rohil Varma",
  description: "Things that I have worked on, things that I am working on.",
};

const ProjectsPage = () => {
  return (
    <main className="">
      <Title title="/pruh-JEKTs" />
      <p className="text-primary">
        These are the projects &apos;ve been pouring my coffee and creativity
        into. From slick web apps to useful tools, each one&apos;s got a story
        and probably a few late-night coding sessions behind it.
      </p>
      <section id="tech-stack" className="mt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: index*10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -5,
              }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex justify-between items-start">
                    <span className="font-bold">{project.title}</span>
                    <Badge
                      variant={project.status.variant}
                      className="rounded-full"
                    >
                      {project.status.name}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, i) => (
                    <SkillBadge key={i} name={t} />
                  ))}
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-2 mt-auto">
                  <Link href={project.source}>
                    <Button variant="secondary" className="w-full">
                      <FaGithub /> Source Code
                    </Button>
                  </Link>
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      <Button className="w-full">
                        <GrDeploy />
                        Website
                      </Button>
                    </Link>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <section id="projects" className=""></section>
    </main>
  );
};
export default ProjectsPage;
