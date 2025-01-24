import Tippy from "@tippyjs/react";
import clsx from "clsx";
import links from "data/links";
import { useCallback } from "react";
import type { IconType } from "react-icons";
import { FaDev, FaGithubAlt, FaGlobe, FaLinkedinIn, FaMediumM } from "react-icons/fa";

interface Profile {
  title: string;
  icon: IconType;
  link: string;
  className: string;
}

const profiles: Profile[] = [
  {
    title: "LinkedIn",
    icon: FaLinkedinIn,
    link: links.linkedin,
    className: "bg-[#0A66C2]",
  },
  {
    title: "GitHub",
    icon: FaGithubAlt,
    link: links.github,
    className: "bg-[#333333]",
  },
  {
    title: "Medium",
    icon: FaMediumM,
    link: links.medium,
    className: "bg-[#000000]",
  },
  {
    title: "Dev.to",
    icon: FaDev,
    link: links.dev,
    className: "bg-[#0A0A0A]",
  },
  {
    title: "Portfolio",
    icon: FaGlobe,
    link: links.portfolio,
    className: "bg-[#4B5563]",
  },
];

const Profiles = () => {
  const handleKeyPress = useCallback((event: React.KeyboardEvent, link: string) => {
    if (event.key === "Enter" || event.key === " ") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-2"
      role="navigation"
      aria-label="Social Media Profiles"
    >
      {profiles.map(({ title, icon: Icon, link, className }) => (
        <Tippy key={title} content={title}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex h-10 w-10 items-center justify-center rounded-lg text-white transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2",
              className,
            )}
            aria-label={`Visit ${title} profile`}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => handleKeyPress(e, link)}
          >
            <Icon aria-hidden="true" />
          </a>
        </Tippy>
      ))}
    </nav>
  );
};

export default Profiles;
