import React from "react";
import AboutMe from "./AboutMe";

export default function RightSide() {
  return (
    <div className="w-2/3 p-6 space-y-6">
      <div className="h-auto">
        <AboutMe />
      </div>
      <div className="h-[1000px] bg-gray-200 p-6 rounded-lg">
        <p>More Dynamic Content...</p>
      </div>
    </div>
  );
}
