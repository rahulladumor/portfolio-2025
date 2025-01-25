import DeveloperIntro from "components/Header/DeveloperIntro";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import useWindowDimensions from "hooks/useWindowDimensions";
import Image from "next/image";
import { Section } from "types/Sections";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <section id={Section.AboutMe} className="h-screen grid place-items-center place-content-center gap-4 relative">
      {/* Modern Developer Intro */}
      <NoSSR>
        <DeveloperIntro />
      </NoSSR>

      {/* Logo */}
      <Image
        src="/images/rd-logo.png"
        width={485}
        height={128}
        alt="Rahul Ladumor - Founder & CEO of CodeLamda Technologies"
        priority
      />

      {/* Text Version - Enhanced for SEO */}
      <h1 className="sr-only">
        Rahul Ladumor
        <br />
        Founder & CEO at CodeLamda Technologies
        <br />
        Full Stack Developer & AWS Solutions Architect
        <br />
        Cloud Computing Expert | Enterprise Solutions
        <br />
        Surat, Gujarat, India
      </h1>

      {/* Founder Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
        Founder & CEO @ CodeLamda
      </div>

      {/* Social Profiles */}
      <Profiles />
    </section>
  );
};

export default Header;
