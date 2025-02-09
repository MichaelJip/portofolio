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
    <a
      href={companyWebsite}
      target="_blank"
      rel="noopener noreferrer"
      className="flex mt-5 p-4 transition duration-200 rounded-lg group hover:bg-white/5"
    >
      <h1 className="w-2/12 text-xl text-gray-300">
        {startYear} - {lastYear}
      </h1>
      <div className="w-10/12">
        <h2 className="flex text-xl font-semibold text-[#f0f6ff] transition duration-200 group-hover:text-[#63b5fa]">
          {jobPosition} - {company}
          <ArrowUpRight
            className="mx-2 transition duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:opacity-100"
            size={18}
          />
        </h2>
        <p className={`w-4/6 text-[#f0f6ff]`}>{descriptionJob}</p>
        <div>
          {badge.map((val, i) => (
            <Badge
              key={val + i}
              variant={"secondary"}
              className={
                i === 0
                  ? `mt-1 bg-[#63b5fa] hover:bg-[#63b5fa]`
                  : `mx-2 bg-[#63b5fa] hover:bg-[#63b5fa]`
              }
            >
              {val}
            </Badge>
          ))}
        </div>
      </div>
    </a>
  );
}
