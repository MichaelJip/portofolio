import { ProjectProps } from '@/components/ProjectCard';
import { ResumeProps } from '@/components/ResumeCard';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ResumeArchiveProps {
  year: number;
  project: string;
  madeAt: string;
  buildWith: string[];
  title?: string;
  link?: string;
}

export const ResumeData: ResumeProps[] = [
  {
    startYear: 2025,
    lastYear: 'Now',
    company: 'PT Alba Digital Teknologi',
    jobPosition: 'Frontend Developer',
    descriptionJob:
      'Acted as a Technical Consultant, collaborating with clients to identify business requirements and deliver tailored solutions in Microsoft Dynamics NAV/Business Central. Designed and developed new features, including creating reports, pages, and tables to meet client-specific needs, ensuring data visualization and print-ready outputs.',
    companyWebsite: 'https://albatech.id',
    badge: [
      'JavaScript',
      'TypeScript',
      'React Native',
      'Android',
      'NextJs',
      'ReactJs',
    ],
  },
  {
    startYear: 2024,
    lastYear: 2025,
    company: 'PT Altitude Solutions',
    jobPosition: 'Technical Consultant',
    descriptionJob:
      'Acted as a Technical Consultant, collaborating with clients to identify business requirements and deliver tailored solutions in Microsoft Dynamics NAV/Business Central. Designed and developed new features, including creating reports, pages, and tables to meet client-specific needs, ensuring data visualization and print-ready outputs.',
    companyWebsite: 'https://altitudesolutions.co.id',
    badge: [
      'AL (Programming Language)',
      'Microsoft Dynamics 365 Business Central',
    ],
  },
  {
    startYear: 2022,
    lastYear: 2024,
    company: 'PT Alba Digital Teknologi',
    jobPosition: 'Mobile Developer',
    descriptionJob:
      'Developed scalable and high-performance mobile app using React Native or Expo Go framework. Conducted code reviews, optimizations, and maintenance of codebase and features to ensure efficiency and reliability.',
    companyWebsite: 'https://albatech.id',
    badge: ['JavaScript', 'TypeScript', 'React Native', 'Android', 'Expo Go'],
  },
];

export const ProjectData: ProjectProps[] = [
  {
    image: '/GoFinance.jpg',
    projectTitle: 'Go Finance',
    description:
      'Go Finance is a demo ticketing platform for finance-related seminars and workshops, featuring secure payments and seamless authentication.',
    website: 'https://gofinance.michaeljip.com',
    badge: [
      'TypeScript',
      'React Js',
      'NodeJS',
      'MongoDB',
      'Next Js',
      'Cloudinary',
      'Midtrans',
      'Zoho',
      'Express Js',
    ],
  },
  {
    image: '/MovieProject.png',
    projectTitle: 'Beli Ticket Bioskop',
    description:
      'This project was a great learning experience, especially handling secure storage, API validation, and payment integration. One of the biggest challenges was structuring the backend for scalability, but using TypeScript and clean architecture principles really helped!',
    website: 'https://github.com/MichaelJip/Frontend-Ticket',
    badge: ['TypeScript', 'React', 'NodeJS', 'Express Js', 'MongoDB', 'Redux'],
  },
  {
    image: '/MJSalonKasir.png',
    projectTitle: 'MJ Salon Kasir',
    description:
      ' MJ Salon Kasir, a Point of Sales (P.O.S) system for salon management. This journey has been an incredible learning experience, combining Flutter for the frontend and Laravel 11 for the backend.',
    website: 'https://www.youtube.com/watch?v=jwgR6Na-sQ4',
    badge: ['Dart', 'Flutter', 'Laravel 11', 'MySQL'],
  },
];

export const ResumeArchiveData: ResumeArchiveProps[] = [
  {
    project: 'Sun Education Group',
    link: 'https://dreambigmakeit.suneducationgroup.com/',
    buildWith: ['TypeScript', 'Next Js', 'Tailwinds', 'Hero UI', 'Axios'],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Website',
  },
  {
    project: 'One Plus',
    link: 'https://onepulse-462341266354.asia-southeast1.run.app/',
    buildWith: ['TypeScript', 'Next Js', 'Tailwinds', 'Hero UI'],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Website',
  },
  {
    project: 'Atara Advisiors',
    link: 'https://ataraadvisors.vercel.app/',
    buildWith: ['TypeScript', 'Next Js', 'Tailwinds', 'Hero UI', 'Axios'],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Website',
  },
  {
    project: 'Sun Education Digital',
    link: 'https://sun-education-digital-6kl4.vercel.app/',
    buildWith: [
      'TypeScript',
      'Next Js',
      'Tailwinds',
      'Zustand',
      'React Query',
      'Axios',
    ],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Website',
  },
  {
    project: 'Lumora',
    link: 'https://play.google.com/store/apps/details?id=com.lumora.albatech&hl=id',
    buildWith: [
      'TypeScript',
      'React Native',
      'Firebase',
      'Zustand',
      'React Query',
    ],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Mobile',
  },
  {
    project: 'Lumora',
    link: '',
    buildWith: ['TypeScript', 'Next Js', 'Tailwinds', 'Zustand', 'React Query'],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Website',
  },
  {
    project: 'Sunshine HRIS',
    link: 'https://play.google.com/store/apps/details?id=com.albatech.sunshine&hl=id',
    buildWith: [
      'TypeScript',
      'React Native',
      'Firebase',
      'Zustand',
      'React Query',
    ],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Mobile',
  },
  {
    project: 'Sunshine HRIS',
    link: '',
    buildWith: ['TypeScript', 'Next Js', 'Tailwinds', 'Zustand', 'React Query'],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Website',
  },
  {
    project: 'SMART by Syntegra Service',
    link: 'https://play.google.com/store/apps/details?id=com.syntegra.albatech&hl=id',
    buildWith: [
      'TypeScript',
      'React Native',
      'Firebase',
      'Zustand',
      'React Query',
    ],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Mobile',
  },
  {
    project: 'SMART by Syntegra Service',
    link: '',
    buildWith: ['TypeScript', 'Next Js', 'Tailwinds', 'Zustand', 'React Query'],
    madeAt: 'PT Alba Digital Teknologi',
    year: 2025,
    title: 'Website',
  },
  {
    project: 'Go Finance',
    link: 'https://www.gofinance.michaeljip.com',
    buildWith: [
      'TypeScript',
      'React Js',
      'NodeJS',
      'MongoDB',
      'Next Js',
      'Cloudinary',
      'Midtrans',
      'Zoho',
      'Express Js',
    ],
    madeAt: '',
    year: 2025,
    title: 'Website',
  },
  {
    year: 2025,
    project: 'Web Beli Tiket Bioskop',
    madeAt: '',
    buildWith: ['ReactJs', 'NodeJs', 'MongoDB', 'TypeScript'],
    title: 'Github',
    link: 'https://github.com/MichaelJip/Frontend-Ticket',
  },
  {
    year: 2024,
    project: 'MJ Salon Kasir',
    madeAt: '',
    buildWith: ['Dart', 'Flutter', 'Laravel 11'],
    title: 'Youtube',
    link: 'https://www.youtube.com/watch?v=jwgR6Na-sQ4',
  },
  {
    year: 2023,
    project: 'E-PPID Perhutani',
    madeAt: 'Freelance',
    buildWith: ['Dart', 'Flutter'],
    title: '',
    link: 'https://play.google.com/store/apps/details?id=com.perhutani.eppid&hl=en',
  },
  {
    year: 2023,
    project: 'Platinum Adi Sentosa Warehouse',
    madeAt: 'PT Alba Digital Teknologi',
    buildWith: ['TypeScript', 'ReactJS'],
    title: '',
    link: '',
  },
  {
    year: 2022,
    project: 'Sun Education',
    madeAt: 'PT Alba Digital Teknologi',
    buildWith: ['TypeScript', 'React Native'],
    title: '',
    link: 'https://play.google.com/store/apps/details?id=com.sunedu.app&hl=en&pli=1',
  },
  {
    year: 2022,
    project: 'MOVES CRM',
    madeAt: 'PT Alba Digital Teknologi',
    buildWith: ['TypeScript', 'React Native'],
    title: '',
    link: 'https://play.google.com/store/apps/details?id=com.albatech.moves&hl=en',
  },
];
