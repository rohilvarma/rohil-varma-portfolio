import { Heading, ProjectCard } from '@/components';
import { githubRepos } from '@/data/data';

const ProjectPage = () => {

  return (
    <div className="">
      <Heading heading='Portfolio Gallery' />
      <div className="grid sm:grid-cols-2 gap-2">
      {
        githubRepos.map((repo, index) => (
          <ProjectCard {...repo} key={index} />
        ))
      }
      </div>
    </div>
  )
}

export default ProjectPage