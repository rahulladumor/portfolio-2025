import Tippy from "@tippyjs/react";
import clsx from "clsx";
import links from "data/links";
import type { IconType } from "react-icons";
import { FaDev, FaGithubAlt, FaGlobe, FaLinkedinIn, FaMediumM } from "react-icons/fa";

type Profile = {
  title: string;
  icon: IconType;
  link: string;
  className: string;
};

const profiles: Profile[] = [
  {
    title: "CodeLamda",
    icon: FaGlobe,
    link: links.website,
    className: "bg-[#2c3e50]",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: links.linkedin,
    className: "bg-[#2867b2]",
  },
  {
    title: "GitHub",
    icon: FaGithubAlt,
    link: links.github,
    className: "bg-[#211f1f]",
  },
  {
    title: "Medium",
    icon: FaMediumM,
    link: links.medium,
    className: "bg-[#00ab6c]",
  },
  {
    title: "DEV Community",
    icon: FaDev,
    link: links.dev,
    className: "bg-[#0a0a0a]",
  },
];

const Profiles = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    {profiles.map(({ title, icon: Icon, link, className }) => (
      <Tippy key={title} content={title}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-lg text-white transition-transform hover:scale-110",
            className
          )}
        >
          <Icon />
        </a>
      </Tippy>
    ))}
  </div>
);

export default Profiles;
