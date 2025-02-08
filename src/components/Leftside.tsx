import { Github, Instagram, Linkedin } from "lucide-react";

interface Props {
  description: string;
}

export default function Leftside({ description }: Props) {
  return (
    <div className="w-1/3 p-6 sticky top-4 h-fit">
      <h2 className="text-2xl font-bold">Hi There I&apos;m Michael</h2>
      <h2 className="text-xl font-semibold">Mobile Developer</h2>
      <p className="text-gray-400">{description}</p>

      <div className="mt-4 flex space-x-3">
        <a
          href="https://github.com/MichaelJip"
          className="text-gray-600 hover:text-white"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/michaeljip/"
          className="text-gray-600 hover:text-white"
        >
          <Linkedin />
        </a>
        <a href="#" className="text-gray-600 hover:text-white">
          <Instagram />
        </a>
      </div>
    </div>
  );
}
