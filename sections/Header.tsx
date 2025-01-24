import Ingredients from "components/Header/Ingredients";
import DeveloperIntro from "components/Header/DeveloperIntro";
import Profiles from "components/Header/Profiles";
import NoSSR from "components/NoSSR";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import Image from "next/image";

const Header: React.FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="header" className="h-screen grid place-items-center place-content-center gap-4 relative">
      {/* Modern Developer Intro */}
      <NoSSR>
        <DeveloperIntro />
      </NoSSR>

      {/* Logo */}
      <Image src="/images/rd-logo.png" width={485} height={128} alt="Rahul Ladumor" priority />

      {/* Text Version */}
      <h1 className="sr-only">
        Rahul Ladumor
        <br />
        Senior Software Engineer & AWS Expert
        <br />
        Surat, Gujarat, India
      </h1>

      {/* Ingredients */}
      <Ingredients />

      {/* Social Profiles */}
      <Profiles />
    </div>
  );
};

export default Header;
