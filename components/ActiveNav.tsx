"use client";

import { useEffect, useState } from "react";

const sections = ["work", "experience", "contact"];

export default function ActiveNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const getLinkClass = (section: string) => {
    return `nav-link whitespace-nowrap transition ${
      activeSection === section
        ? "text-white"
        : "text-white/60 hover:text-white"
    }`;
  };

  return (
    <div className="flex shrink-0 items-center gap-3 text-[11px] min-[360px]:gap-4 min-[360px]:text-xs sm:gap-5 sm:text-sm md:gap-8">
      <a href="#work" className={getLinkClass("work")}>
        Work
      </a>

      <a
        href="#experience"
        className={`${getLinkClass("experience")} hidden sm:block`}
      >
        Experience
      </a>

      <a
        href="/Kyle-Abad-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-link hidden whitespace-nowrap text-white/60 transition hover:text-white md:block"
      >
        Resume ↗
      </a>

      <a href="#contact" className={getLinkClass("contact")}>
        Contact
      </a>
    </div>
  );
}