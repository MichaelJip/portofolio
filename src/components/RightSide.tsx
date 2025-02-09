import { ProjectData, ResumeData } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import AboutMe from "./AboutMe";
import ProjectCard from "./ProjectCard";
import ResumeCard from "./ResumeCard";

export default function RightSide() {
  return (
    <div className="w-2/3 p-10 space-y-6">
      <div className="h-auto">
        <AboutMe />
      </div>
      <div className="h-auto">
        {ResumeData.map((val, index) => (
          <ResumeCard
            key={index}
            startYear={val.startYear}
            lastYear={val.lastYear}
            company={val.company}
            jobPosition={val.jobPosition}
            descriptionJob={val.descriptionJob}
            badge={val.badge}
            companyWebsite={val.companyWebsite}
          />
        ))}
      </div>
      <div className="h-auto">
        <a
          href="/data/Michael_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="flex text-[#f0f6ff] transition duration-200 hover:text-[#63b5fa] font-semibold text-xl">
            View Full Resume
            <ArrowUpRight
              className="mx-1 transition duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:opacity-100"
              size={18}
            />
          </p>
        </a>
      </div>
      <div className="h-auto">
        {ProjectData.map((val, index) => (
          <ProjectCard
            key={index}
            website={val.website}
            projectTitle={val.projectTitle}
            badge={val.badge}
            description={val.description}
            image={val.image}
          />
        ))}
      </div>
      <div className="h-auto">
        <Link href={"/archive"}>
          <p className="flex text-[#f0f6ff] transition duration-200 hover:text-[#63b5fa] font-semibold text-xl">
            View Full Project Archive
            <ArrowUpRight
              className="mx-1 transition duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:opacity-100"
              size={18}
            />
          </p>
        </Link>
      </div>
    </div>
  );
}
