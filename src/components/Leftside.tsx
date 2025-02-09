import { descColor, hoverColor, mainColor } from "@/lib/colors";
import { Github, Linkedin } from "lucide-react";

interface Props {
  description: string;
}

export default function Leftside({ description }: Props) {
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
