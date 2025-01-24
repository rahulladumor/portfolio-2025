import Tippy from "@tippyjs/react";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const DISPLAY_COUNT = 3;

type WorkExperience = {
  id: number;
  logo: string;
  name: string;
  period: { start: string; end: string };
  position: string;
  location: string;
  summary: string;
  keyFocus: string[];
};

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    logo: "/images/work-experience/codelamda.svg",
    name: "CodeLamda Technologies",
    period: { start: "Sep 24", end: "Present" },
    position: "Founder & CEO",
    location: "Surat, Gujarat, India",
    summary: "Leading innovative cloud solutions and cutting-edge technology projects. Driving strategic technology decisions while maintaining hands-on involvement in project delivery and technical architecture.",
    keyFocus: [
      "Cloud Architecture",
      "AI/ML Solutions",
      "Strategic Leadership",
      "Technology Innovation",
      "Business Growth"
    ],
  },
  {
    id: 2,
    logo: "/images/work-experience/prodigybuild.svg",
    name: "ProdigyBuild",
    period: { start: "Jul 23", end: "Present" },
    position: "Lead Engineer",
    location: "United States",
    summary: "Spearheading the development of AI-powered SaaS platforms with focus on enterprise-grade serverless solutions. Leading EPIC planning and implementing AI-driven automation systems.",
    keyFocus: [
      "AI-Powered SaaS",
      "Serverless Architecture",
      "Enterprise Solutions",
      "Team Leadership",
      "Technical Strategy"
    ],
  },
  {
    id: 3,
    logo: "/images/work-experience/protectonce.svg",
    name: "ProtectOnce",
    period: { start: "May 22", end: "Aug 24" },
    position: "SDE 2",
    location: "San Francisco Bay Area",
    summary: "Developed a cutting-edge cybersecurity product with single-line code integration for web application security. Built innovative solutions using AWS, Linux System Administration, DevOps, Serverless, Node.js, and JavaScript. Part of the core team that led to successful acquisition by an Israeli company.",
    keyFocus: [
      "Web Application Security",
      "AWS Services",
      "DevOps & Serverless",
      "Node.js Development",
      "System Architecture"
    ],
  },
  {
    id: 4,
    logo: "/images/work-experience/primelab.svg",
    name: "PrimeLab",
    period: { start: "Apr 22", end: "Jun 22" },
    position: "Blockchain Developer",
    location: "United States",
    summary: "Led development of NFTs and Blockchain technologies, managing multiple microservices including wallet services, transaction service, and user service. Developed libraries for DynamoDB and worked with GoLang for building robust protocols.",
    keyFocus: [
      "Blockchain Development",
      "NFT Technologies",
      "Microservices Architecture",
      "GoLang",
      "DynamoDB"
    ],
  },
  {
    id: 5,
    logo: "/images/work-experience/nds.svg",
    name: "NDS Global",
    period: { start: "Aug 21", end: "May 22" },
    position: "Senior Software Developer",
    location: "India",
    summary: "Developed and implemented enterprise chatbot solutions using AWS Lex and Azure. Designed conversation flows, integrated with enterprise systems, and optimized solutions based on user feedback and usage data.",
    keyFocus: [
      "AWS Lex",
      "Azure Integration",
      "Chatbot Development",
      "Enterprise Systems",
      "Data Analytics"
    ],
  },
  {
    id: 6,
    logo: "/images/work-experience/appgambit.svg",
    name: "AppGambit",
    period: { start: "Jul 20", end: "Jul 21" },
    position: "Full Stack Cloud Developer",
    location: "Surat, Gujarat, India",
    summary: "Developed high-scale systems including audit logger using ElasticSearch and IVR system. Managed systems handling 1M+ requests per minute using AWS services (ECS, EKS, Fargate, ECR). Focused on performance tuning and cloud infrastructure optimization.",
    keyFocus: [
      "AWS Services",
      "ElasticSearch",
      "High-Scale Systems",
      "IVR Development",
      "Cloud Infrastructure"
    ],
  },
  {
    id: 7,
    logo: "/images/work-experience/appgambit.svg",
    name: "AppGambit",
    period: { start: "Jan 20", end: "Jul 20" },
    position: "Cloud Engineer",
    location: "Surat, Gujarat, India",
    summary: "Designed and implemented cloud-based solutions, managed containerized applications, and utilized multiple cloud service providers. Focused on analyzing business requirements, monitoring system performance, and resolving complex issues.",
    keyFocus: [
      "Cloud Architecture",
      "Container Management",
      "Performance Monitoring",
      "System Design",
      "Cloud Optimization"
    ],
  },
  {
    id: 8,
    logo: "/images/work-experience/bynebits.svg",
    name: "Bynebits",
    period: { start: "Dec 17", end: "Jul 19" },
    position: "Software Developer",
    location: "Indore, Madhya Pradesh, India",
    summary: "Built scalable web applications using Node.js and AWS serverless technologies. Developed RenagatePartner platform for company investment insights and visualization. Designed efficient database architectures and implemented complex data processing systems.",
    keyFocus: [
      "Node.js",
      "AWS Serverless",
      "Database Architecture",
      "Data Analytics",
      "System Optimization"
    ],
  },
  {
    id: 9,
    logo: "/images/work-experience/creative.svg",
    name: "Creative Infotech",
    period: { start: "Apr 16", end: "Sep 17" },
    position: "Full Stack Developer",
    location: "Surat, Gujarat, India",
    summary: "Developed an E-commerce application using PHP Codeigniter with three panels for local women's clothing business. Implemented real-time cart management, session handling, and optimized database performance through caching and best practices.",
    keyFocus: [
      "PHP Codeigniter",
      "E-commerce Development",
      "Database Optimization",
      "Session Management",
      "Performance Tuning"
    ],
  }
];

type Props = {
  data: WorkExperience;
  isFirst: boolean;
  isLast: boolean;
};

const WorkExperience: React.FC<Props> = ({ data, isFirst, isLast }) => (
  <div className="flex group">
    <div className={clsx("ml-1 w-1 flex-shrink-0 bg-neutral-500/25", { "rounded-t": isFirst, "rounded-b": isLast })} />

    <div className="-ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full shadow-lg bg-teal-500/80 dark:bg-white/80 group-hover:w-6 transition-[width]" />

    <div className="mt-5 ml-8 grid gap-2 pb-2">
      <div className="relative w-[100px] h-10">
        <Image src={data.logo} alt={data.name} width={100} height={40} className="object-contain" />
      </div>

      <div>
        <h3>
          <span className="text-base font-bold">{data.name}</span>{" "}
          <span className="text-xs">
            ({data.period.start} - {data.period.end})
          </span>
        </h3>
        <h4>{data.position}</h4>
      </div>

      <h5 className="my-1 flex gap-2 items-center text-xs">
        <FaLocationArrow />
        <span>{data.location}</span>
      </h5>

      <p className="prose prose-sm prose-neutral dark:prose-invert">{data.summary}</p>

      <p className="text-xs leading-relaxed prose-sm prose-neutral dark:prose-invert">
        <strong>Key Focus:</strong> {data.keyFocus.join(", ")}
      </p>
    </div>
  </div>
);

const WorkExperienceTimeline = () => {
  const [showMore, setShowMore] = useState(workExperiences.length > DISPLAY_COUNT ? false : true);

  return (
    <div id={Section.WorkExperience}>
      {getSectionHeading(Section.WorkExperience)}

      <div className="flex flex-col">
        {workExperiences
          .filter((_, index) => (showMore ? true : index < DISPLAY_COUNT))
          .map((data, index) => (
            <WorkExperience key={data.id} data={data} isFirst={index === 0} isLast={index === workExperiences.length - 1} />
          ))}
      </div>

      {!showMore && (
        <Tippy content={`Show ${workExperiences.length - DISPLAY_COUNT} More`} placement="right">
          <div className="inline-block ml-8 p-2 cursor-pointer" onClick={() => setShowMore(true)}>
            <MdMoreHoriz size="24" />
          </div>
        </Tippy>
      )}
    </div>
  );
};

export default WorkExperienceTimeline;
