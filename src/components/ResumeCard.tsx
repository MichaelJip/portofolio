import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

export interface ResumeProps {
  startYear: number;
  lastYear: number | string;
  jobPosition: string;
  company: string;
  descriptionJob: string;
  badge: string[];
  companyWebsite?: string;
}

export default function ResumeCard({
  startYear,
  badge,
  company,
  descriptionJob,
  jobPosition,
  lastYear,
  companyWebsite,
}: ResumeProps) {
  return (
    <a href={companyWebsite} target="_blank" rel="noopener noreferrer">
      <div
        className="p-2 lg:flex lg:mt-5 lg:p-4 transition duration-200 rounded-lg
      group hover:bg-white/5 sm:py-3"
      >
        <h1 className="lg:w-2/12 text-sm md:text-lg lg:text-xl text-gray-300">
          {startYear} - {lastYear}
        </h1>
        <div className="lg:w-10/12">
          <h2 className="md:flex lg:flex text-sm lg:text-xl font-semibold text-[#f0f6ff] transition duration-200 group-hover:text-[#63b5fa]">
            {jobPosition} - {company}
            <ArrowUpRight
              className="lg:mx-2 transition duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:opacity-100"
              size={18}
            />
          </h2>
          <p className={`sm:text-sm lg:w-4/6 text-[#f0f6ff]`}>
            {descriptionJob}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {badge.map((val, i) => (
              <Badge
                key={val + i}
                variant="secondary"
                className="bg-[#63b5fa] hover:bg-[#63b5fa]"
              >
                {val}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
