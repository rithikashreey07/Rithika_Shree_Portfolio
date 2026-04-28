import { contactLinks, experience, projects, skills } from "../assets/portfolioData";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

function PortfolioPage() {
  const featuredProject = projects.find((project) => project.title === "Greencodex Technologies Landing Page");
  const remainingProjects = projects.filter((project) => project.title !== "Greencodex Technologies Landing Page");
  const linkedInUrl = contactLinks.find((item) => item.label === "LinkedIn")?.href;
  const githubUrl = contactLinks.find((item) => item.label === "GitHub")?.href;

  return (
    <main id="home">
      <section className="container-main relative py-20 text-center sm:py-24">
        <div className="pointer-events-none absolute -left-8 top-10 h-24 w-24 rounded-full bg-[#7a1f2b]/10 blur-[1px]" />
        <div className="pointer-events-none absolute -right-4 top-24 h-16 w-16 rounded-full bg-[#7a1f2b]/15 blur-[1px]" />
        <div className="pointer-events-none absolute left-1/2 top-6 h-8 w-8 -translate-x-1/2 rounded-full bg-[#7a1f2b]/10 blur-[1px]" />
        <div className="hero-panel">
          <div className="hero-accent-line" />
          <h1 className="fade-in type-hero-name text-slate-900">Rithika Shree Yuvaraj</h1>
          <p className="fade-in delay-1 type-hero-role mt-4 text-[#7a1f2b]">Full Stack Developer</p>
          <p className="fade-in delay-2 type-body mx-auto mt-3 max-w-2xl text-slate-600">
            I build scalable web and mobile applications using React, Node.js, and Flutter.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-transition rounded-full border border-slate-300 p-2 text-slate-700 hover:border-[#7a1f2b] hover:text-[#7a1f2b]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-transition rounded-full border border-slate-300 p-2 text-slate-700 hover:border-[#7a1f2b] hover:text-[#7a1f2b]"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#projects" className="btn-transition type-button rounded-md bg-[#7a1f2b] px-5 py-2.5 text-white hover:bg-[#5f1722]">
              View Projects
            </a>
            <a href="#contact" className="btn-transition type-button rounded-md border border-slate-300 px-5 py-2.5 text-slate-700 hover:border-[#7a1f2b]">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <Section id="skills" title="Skills" subtitle="Core technologies across frontend, backend, mobile, database, and tools." centered>
        <div className="section-panel">
          <div className="grid gap-4 text-left md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, stack]) => (
              <article key={category} className="skill-card">
                <h4 className="type-label text-slate-900">{category}</h4>
                <div className="skill-pill-wrap">
                  {stack.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects" subtitle="Real-world product and system development projects.">
        <div className="section-panel">
          <div className="fade-left mt-2">
            {featuredProject ? <ProjectCard project={featuredProject} featured /> : null}
          </div>

          <div className="mt-6 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
            {remainingProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <article className="section-panel card-transition max-w-4xl">
          <h3 className="type-card-title text-slate-900">{experience.role}</h3>
          <p className="type-card-text mt-1 font-medium text-slate-500">Duration: {experience.duration}</p>
          <ul className="type-card-text mt-4 space-y-2 text-slate-700">
            {experience.points.map((point) => (
              <li key={point}>- {point}</li>
            ))}
          </ul>
        </article>
      </Section>

      <Section id="about" title="About" subtitle="Professional summary and development focus.">
        <div className="section-panel grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="fade-left max-w-2xl">
            <p className="type-body text-slate-700">
              I come from an Electronics and Communication Engineering background with hands-on experience in MERN
              stack and Flutter development. I have built real-world applications with complete frontend and backend
              integration, including dashboards and role-based workflows. My focus is on building scalable,
              maintainable, and user-friendly systems that solve practical business problems.
            </p>
          </div>
          <div className="fade-right mx-auto w-full max-w-[230px] sm:max-w-[250px] lg:justify-self-end">
            <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
              <img
                src="/profile-photo.jpeg"
                alt="Rithika Shree Yuvaraj"
                className="aspect-[3/4] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact" subtitle="Open to full-time opportunities and collaboration" centered>
        <div className="section-panel mx-auto max-w-3xl lg:text-left">
          <h3 className="type-card-title text-slate-900">Open to full-time opportunities and collaboration</h3>
          <p className="type-card-text mt-2 text-slate-600">Let&apos;s connect for developer roles and product-focused projects.</p>
          <div className="mt-5 space-y-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Phone" || item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Phone" || item.label === "Email" ? undefined : "noreferrer"}
                className="btn-transition type-card-text block rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 hover:border-[#7a1f2b]"
              >
                <span className="type-label text-slate-900">{item.label}:</span> {item.value}
              </a>
            ))}
          </div>
          <div className="mt-5">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rithikashreey07@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn-transition type-button inline-block rounded-md bg-[#7a1f2b] px-5 py-2.5 text-white hover:bg-[#5f1722]"
            >
              Email Me
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default PortfolioPage;
