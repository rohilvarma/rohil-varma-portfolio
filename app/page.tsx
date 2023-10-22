import RenderImage from "@/components/RenderImage";


export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1 className="font-medium text-2xl">hey, I&apos;m Rohil 👋</h1>
      </main>
      <section className="">
        <p className="my-8 text-self">
          As a software engineer, my journey began with a fascination for HTML
          during my school years. With a strong grasp of Java and a knack for
          web development, I embarked on a fast-track trajectory. 
        </p>

        {/* Add Image section over here */}
        <RenderImage />

        <p className="text-self">
          Constantly seeking growth opportunities and currently expanding my
          skill set with Next.js and Django. I am driven by the
          satisfaction of overcoming challenges and believe in breaking down
          complex problems into manageable solutions. With a goal to become a
          highly knowledgeable full-stack engineer, I am determined to leave a
          lasting impact in the world of software engineering.
        </p>
      </section>
    </div>
  );
}
