import { useEffect, useState } from "react";
import { contactLinks, navLinks } from "../assets/portfolioData";
import { GitHubIcon, LinkedInIcon } from "./Icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("about");
  const linkedInUrl = contactLinks.find((item) => item.label === "LinkedIn")?.href;
  const githubUrl = contactLinks.find((item) => item.label === "GitHub")?.href;
  const linkedInAppUrl = "linkedin://in/rithika-shree-yuvaraj-9862202a3";

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => {
      const marker = window.scrollY + 110;
      let current = sectionIds[0];

      sections.forEach((section) => {
        if (section && section.offsetTop <= marker) {
          current = section.id;
        }
      });

      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openLinkedIn = (event) => {
    event.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      window.open(linkedInUrl, "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = linkedInAppUrl;
    window.setTimeout(() => {
      window.location.href = linkedInUrl;
    }, 650);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 shadow-sm backdrop-blur-md">
      <nav className="container-main flex items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-bold tracking-tight text-[#0f172a] sm:text-xl">
          Rithika Shree Yuvaraj
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`border-b-2 px-3 py-1.5 text-base font-medium transition duration-200 ${
                    activeId === link.id
                      ? "border-[#7a1f2b] text-[#7a1f2b]"
                      : "border-transparent text-slate-700 hover:text-[#7a1f2b]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-2 flex items-center gap-2">
            <a
              href={linkedInUrl}
              onClick={openLinkedIn}
              className="rounded-full border border-slate-300 p-2 text-slate-700 transition duration-200 hover:border-[#7a1f2b] hover:text-[#7a1f2b]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-slate-300 p-2 text-slate-700 transition duration-200 hover:border-[#7a1f2b] hover:text-[#7a1f2b]"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition duration-200 hover:border-[#7a1f2b] hover:text-[#7a1f2b] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5 rotate-0"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              isOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5 rotate-0"
            }`}
          />
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-main px-6 py-3">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={`mobile-${link.id}`}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition duration-200 ${
                      activeId === link.id
                        ? "bg-[#7a1f2b]/10 text-[#7a1f2b]"
                        : "text-slate-700 hover:bg-slate-100 hover:text-[#7a1f2b]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex items-center gap-2">
              <a
                href={linkedInUrl}
                onClick={(event) => {
                  setIsOpen(false);
                  openLinkedIn(event);
                }}
                className="rounded-full border border-slate-300 p-2 text-slate-700 transition duration-200 hover:border-[#7a1f2b] hover:text-[#7a1f2b]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-slate-300 p-2 text-slate-700 transition duration-200 hover:border-[#7a1f2b] hover:text-[#7a1f2b]"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
