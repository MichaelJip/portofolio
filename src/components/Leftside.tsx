import { descColor, hoverColor, mainColor } from "@/lib/colors";
import { Github, Instagram, Linkedin } from "lucide-react";

interface Props {
  description: string;
}

export default function Leftside({ description }: Props) {
  return (
    <div className="w-1/3 p-8 sticky top-4 h-fit">
      <h2 className="text-2xl font-bold" style={{ color: mainColor }}>
        Hi There I&apos;m Michael
      </h2>
      <div className="w-[24rem]">
        <h2 className="text-xl font-semibold" style={{ color: descColor }}>
          Mobile Developer
        </h2>
        <p className="text-gray-300 mt-1">{description}</p>
      </div>

      <div className="mt-4 flex space-x-3">
        <a
          href="https://github.com/MichaelJip"
          className={`text-gray-600 hover:text-[${hoverColor}]`}
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/michaeljip/"
          className={`text-gray-600 hover:text-[${hoverColor}]`}
        >
          <Linkedin />
        </a>
        <a href="#" className={`text-gray-600 hover:text-[${hoverColor}]`}>
          <Instagram />
        </a>
      </div>
    </div>
  );
}
