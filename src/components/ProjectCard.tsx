import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

export interface ProjectProps {
  projectTitle: string;
  description: string;
  badge: string[];
  image: string;
  website?: string;
}

export default function ProjectCard({
  badge,
  description,
  projectTitle,
  website,
  image,
}: ProjectProps) {
  return (
    <a href={website} target="_blank" rel="noopener noreferrer">
      <div className="sm:p-2 sm:py-4 lg:flex lg:mt-5 lg:p-4 transition duration-200 rounded-lg group hover:bg-white/5">
        <div className="mx-4 my-2 w-7/12 h-4/12 lg:w-2/12 lg:mx-0 lg:my-0 lg:h-1/12 border-4 border-white rounded-lg overflow-hidden">
          <Image
            src={image}
            width={280}
            height={280}
            alt="Movie Ticket"
            className="object-cover"
          />
        </div>
        <div className="mx-4 w-10/12">
          <h2 className="flex text-xl font-semibold text-[#f0f6ff] transition duration-200 group-hover:text-[#63b5fa]">
            {projectTitle}
            <ArrowUpRight
              className="mx-2 transition duration-100 ease-in-out transform group-hover:-translate-y-1 group-hover:opacity-100"
              size={18}
            />
          </h2>
          <p className={`text-sm lg:text-base w-4/6 text-[#f0f6ff]`}>
            {description}
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
