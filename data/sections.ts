import { AiFillSafetyCertificate } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import { FaAward, FaDev, FaPaperPlane, FaSignLanguage, FaTools } from "react-icons/fa";
import { MdBook, MdMusicNote, MdPerson, MdSchool, MdWork } from "react-icons/md";
import { Section, SectionArray, SectionMap } from "types/Sections";

const sectionsList: SectionMap = {
  [Section.AboutMe]: {
    icon: MdPerson,
    title: "About Me",
  },
  [Section.WorkExperience]: {
    icon: MdWork,
    title: "Work Experience",
  },
  [Section.Education]: {
    icon: MdSchool,
    title: "Education",
  },
  [Section.Skills]: {
    icon: FaTools,
    title: "Skills",
  },
  [Section.Projects]: {
    icon: MdBook,
    title: "Projects",
  },
  [Section.Blog]: {
    icon: FaDev,
    title: "Blog",
  },
  [Section.Languages]: {
    icon: FaSignLanguage,
    title: "Languages",
  },
  [Section.Achievements]: {
    icon: FaAward,
    title: "Achievements",
  },
  [Section.Certifications]: {
    icon: AiFillSafetyCertificate,
    title: "Certifications",
  },
  [Section.Philanthropy]: {
    icon: BiDonateHeart,
    title: "Philanthropy",
  },
  [Section.Music]: {
    icon: MdMusicNote,
    title: "Music",
  },
  [Section.Contact]: {
    icon: FaPaperPlane,
    title: "Contact",
  },
};

export const sectionsArray: SectionArray = Object.entries(sectionsList).map(([id, { icon, title }]) => ({
  id: id as Section,
  icon,
  title,
}));

export default sectionsList;
