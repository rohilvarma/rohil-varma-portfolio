import SkillBadge from "@/components/SkillBadge";
import Title from "@/components/Title";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { snippets } from "@/lib/constants";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Snippets | Rohil Varma",
  description: "A collection of my frequently used code snippets.",
};

const SnippetsPage = () => {
  return (
    <main className="">
      <Title title="<snippets />" />
      <p className="">
        Ever found yourself searching for that one code snippet you know
        you&apos;ve used before? Yeah, me too. That&apos;s why I created this
        page - it&apos;s my go-to place for frequently used code bits. Feel free
        to explore and use them in your projects!
      </p>
      <section className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {snippets.map((snippet, index) => {
          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: index*10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              whileHover={{
                y: -5,
              }}
            >
              <Link href={snippet.link}>
                <Card className="max-w-sm">
                  <CardHeader>
                    <CardTitle>{snippet.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="flex items-center gap-2 flex-wrap">
                    {snippet.tags.map((tag, i) => (
                      <SkillBadge key={i} name={tag} />
                    ))}
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
};
export default SnippetsPage;
