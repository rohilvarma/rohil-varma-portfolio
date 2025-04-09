import Title from "@/components/Title";
import { uses } from "@/lib/constants";
import Link from "next/link";

const UsesPage = () => {
  return (
    <main>
      <Title title="/uses" />
      <p className="mt-2 text-primary">
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

      <div className="mt-8">
        {uses.map((u, i) => {
          return (
            <div key={i} className="grid grid-cols-2">
              <h1 className="font-bold text-3xl">{u.heading}</h1>
              <ul className="">
                {u.items.map((item, index) => (
                  <li key={index} className="mb-8">
                    <Link href={item.link} className="text-xl font-medium">{item.item}</Link>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
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
