import ExperienceItem from "@/components/ExperienceItem";
import Heading from "@/components/Heading";
import { workExperience, educationExperience } from "@/data/data";

const ExperiencePage = () => {
  return (
    <div className="text-selection">
      <Heading heading={"Work Experience"} />
      <ol className="timeline">
        {workExperience.map((workEx) => (
          <ExperienceItem experience={workEx} onlyTimeline={false} key={workEx.key} />
        ))}
      </ol>

      <div className="my-4">&nbsp;</div>

      <Heading heading={"Education"} />
      <ol className="timeline">
        {educationExperience.map((eduEx) => (
          <ExperienceItem experience={eduEx} onlyTimeline={false} key={eduEx.key} />
        ))}
      </ol>
    </div>
  );
};

export default ExperiencePage;
