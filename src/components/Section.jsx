import { useEffect, useRef, useState } from "react";

function Section({ id, title, subtitle, centered = false, children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={`py-14 sm:py-16 section-reveal ${visible ? "is-visible" : ""}`}>
      <div className={`container-main ${centered ? "text-center" : ""}`}>
        <h2 className="section-title">{title}</h2>
        {subtitle ? <p className={`section-subtitle ${centered ? "mx-auto" : ""}`}>{subtitle}</p> : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default Section;
