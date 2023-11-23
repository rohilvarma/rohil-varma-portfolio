import { SkillItem, RenderImage, Heading, ExperienceItem } from "@/components";
import { profileDescription } from "@/data/data";

import { skills, workExperience } from "@/data/data";

export default function Home() {
  return (
    <div className="">
      <Heading heading={"hey, I'm Rohil 👋"} />
      <section className="">
        <p className="text-self">{profileDescription[0]}</p>

        <RenderImage />

        <p className="text-self">{profileDescription[1]}</p>

        <div className="text-self">{profileDescription[2]}</div>
        <ol className="timeline">
          {workExperience.map((workEx) => (
            <ExperienceItem experience={workEx} onlyTimeline={true} key={workEx.key} />
          ))}
        </ol>

        <div className="text-self">{profileDescription[3]}</div>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <SkillItem skillItem={skill} key={skill.key} />
          ))}
        </div>
      </section>
    </div>
  );
}
