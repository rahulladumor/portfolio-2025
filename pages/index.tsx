import "animate.css";

import SEO from "components/SEO";
import { sectionSEO } from "data/seo";
import type { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Header } from "sections";
import { getArticles } from "services";
import { Article, Section } from "types/Sections";

// Dynamically import components for better performance
const AboutMe = dynamic(() => import("sections/AboutMe"));
const Achievements = dynamic(() => import("sections/Achievements"));
const Blog = dynamic(() => import("sections/Blog"));
const Certifications = dynamic(() => import("sections/Certifications"));
const Contact = dynamic(() => import("sections/Contact"));
const Education = dynamic(() => import("sections/Education"));
const Footer = dynamic(() => import("sections/Footer"));
const Languages = dynamic(() => import("sections/Languages"));
const Music = dynamic(() => import("sections/Music"));
const Philanthropy = dynamic(() => import("sections/Philanthropy"));
const Projects = dynamic(() => import("sections/Projects"));
const Skills = dynamic(() => import("sections/Skills"));
const WorkExperience = dynamic(() => import("sections/WorkExperience"));

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await getArticles();
  return { props: { articles } };
};

type Props = {
  articles: Article[];
};

const Home: NextPage<Props> = ({ articles }) => {
  const [activeSection, setActiveSection] = useState<Section>(Section.AboutMe);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id as Section;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.5 },
    );

    // Observe all sections
    Object.values(Section).forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title={sectionSEO[activeSection].title}
        description={sectionSEO[activeSection].description}
        keywords={sectionSEO[activeSection].keywords.join(", ")}
      />

      <div className="w-5/6 mx-auto md:container grid gap-16 pt-16 lg:pt-8 lg:pl-24">
        <Header />

        <AboutMe />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <WorkExperience />
          <Education />
        </div>

        <Skills />
        <Projects />

        {isClient && <Blog articles={articles} />}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Languages />
          <Certifications />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Achievements />
          <Philanthropy />
        </div>

        <Music />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
