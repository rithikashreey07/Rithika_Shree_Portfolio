function ProjectCard({ project, featured = false }) {
  const cardBase =
    "card-transition rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-xl sm:p-6";

  const impactStatement = project.impact || project.problemSolution;
  const lowerType = project.type.toLowerCase();
  const isMobileProject = lowerType.includes("mobile");
  const frameClass = isMobileProject ? "project-frame-mobile" : "project-frame-web";

  return (
    <article className={`${cardBase} ${featured ? "lg:p-7" : "h-full"} flex flex-col`}>
      {featured ? (
        <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className={frameClass}>
            <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover object-top" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7a1f2b]">Featured Project</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a]">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">{impactStatement}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-transition rounded-md bg-[#7a1f2b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5f1722]"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn-transition rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#7a1f2b]"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className={frameClass}>
            <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover object-top" />
          </div>

          <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#0f172a]">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{project.impact || project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-transition rounded-md bg-[#7a1f2b] px-4 py-2 text-sm font-semibold text-white hover:bg-[#5f1722]"
            >
              GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-transition rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#7a1f2b]"
            >
              Live Demo
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
