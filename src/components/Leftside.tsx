"use client";
import { descColor, hoverColor, mainColor } from "@/lib/colors";
import { Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  description: string;
}

const smoothScroll = (id: string, setActive: (section: string) => void) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 50, // Adjust for navbar if needed
      behavior: "smooth",
    });
    setActive(id); // Update active section
  }
};

export default function Leftside({ description }: Props) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["resume-section", "projects-section"];
      let foundActive = false;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }

      // If no section is active, reset to default (prevents last item from staying active)
      if (!foundActive) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:w-1/3 p-2 lg:p-8 lg:sticky lg:top-4 lg:h-fit ">
      <h2
        className="text-lg lg:text-2xl font-bold"
        style={{ color: mainColor }}
      >
        Hi There I&apos;m Michael
      </h2>
      <div className="lg:w-[24rem]">
        <h2
          className="sm:text-xl lg:text-xl font-semibold"
          style={{ color: descColor }}
        >
          Mobile Developer
        </h2>
        <p className="text-gray-300 mt-1 text-sm">{description}</p>
      </div>

      <div className="hidden mt-4 lg:flex flex-col space-y-3">
        <a
          onClick={() => smoothScroll("resume-section", setActiveSection)}
          className={`cursor-pointer transition duration-300 ease-in-out ${
            activeSection === "resume-section"
              ? "text-white font-bold"
              : "text-gray-400"
          }`}
        >
          Go to Resume
        </a>
        <a
          onClick={() => smoothScroll("projects-section", setActiveSection)}
          className={`cursor-pointer transition duration-300 ease-in-out ${
            activeSection === "projects-section"
              ? "text-white font-bold"
              : "text-gray-400"
          }`}
        >
          Go to Projects
        </a>
      </div>

      <div className="mt-4 flex space-x-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/MichaelJip"
          className={`text-gray-600 hover:text-[${hoverColor}]`}
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/michaeljip/"
          className={`text-gray-600 hover:text-[${hoverColor}]`}
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
}
