import React from "react";

export default function Footer() {
  return (
    <div className="lg:py-2">
      <p className={`text-sm mt-2 lg:mt-0 lg:text-lg text-[#dde4ee]`}>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold"
        >
          Visual Studio Code{" "}
        </a>
        by yours truly. Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold"
        >
          Next.js{" "}
        </a>
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold"
        >
          Tailwind CSS{" "}
        </a>
        , deployed with{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold"
        >
          Vercel
        </a>
        .
      </p>
    </div>
  );
}
