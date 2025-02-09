import { ResumeProps } from "@/components/ResumeCard";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ResumeData: ResumeProps[] = [
  {
    startYear: 2024,
    lastYear: "Present",
    company: "PT Altitude Solutions",
    jobPosition: "Technical Consultant",
    descriptionJob:
      "Acted as a Technical Consultant, collaborating with clients to identify business requirements and deliver tailored solutions in Microsoft Dynamics NAV/Business Central. Designed and developed new features, including creating reports, pages, and tables to meet client-specific needs, ensuring data visualization and print-ready outputs.",
    companyWebsite: "https://altitudesolutions.co.id",
    badge: [
      "AL (Programming Language)",
      "Microsoft Dynamics 365 Business Central",
    ],
  },
  {
    startYear: 2022,
    lastYear: 2024,
    company: "PT Alba Digital Teknologi",
    jobPosition: "Mobile Developer",
    descriptionJob:
      "Developed scalable and high-performance mobile app using React Native or Expo Go framework. Conducted code reviews, optimizations, and maintenance of codebase and features to ensure efficiency and reliability.",
    companyWebsite: "https://albatech.id",
    badge: ["JavaScript", "TypeScript", "React Native", "Android", "Expo Go"],
  },
];
