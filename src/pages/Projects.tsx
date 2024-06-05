const ProjectCard = () => (
  <div className="lg:h-[35rem] lg:w-96 h-80 w-60 bg-secondary lg:rounded-[7rem]"></div>
)
export const Projects = () => {
  return (
    <div id="projects" className="min-h-screen flex xl:flex-row flex-col justify-center items-center gap-10 flex-wrap">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

