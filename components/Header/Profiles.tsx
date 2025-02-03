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
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-4">
        {profiles.map(({ title, icon: Icon, link, className }) => (
          <Tippy key={title} content={title} placement="bottom" arrow={false}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "w-10 h-10 rounded-lg flex items-center justify-center text-white transition-transform hover:scale-110",
                className
              )}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => handleKeyPress(e, link)}
            >
              <Icon size={20} />
            </a>
          </Tippy>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=rahulladumor"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0A66C2] hover:bg-[#004182] text-white font-sans px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all hover:scale-105"
      >
        <FaLinkedinIn size={16} />
        Follow on LinkedIn
      </a>
    </div>
  );
};

export default Profiles;
