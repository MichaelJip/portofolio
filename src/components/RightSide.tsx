import React from "react";
import AboutMe from "./AboutMe";
import ResumeCard from "./ResumeCard";
import { ResumeData } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
        <a href="">
          <p className="flex text-[#f0f6ff] transition duration-200 hover:text-[#63b5fa] font-semibold text-xl">
            View Full Resume
            <ArrowUpRight
              className="mx-1 transition duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:opacity-100"
              size={18}
            />
          </p>
        </a>
      </div>
    </div>
  );
}
