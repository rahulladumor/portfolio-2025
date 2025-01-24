import { motion, useAnimation } from "framer-motion";
import { FC } from "react";
import { lazy, Suspense, useEffect, useState } from "react";
import { FaAws, FaDocker, FaNodeJs, FaPython } from "react-icons/fa";
import { SiGo, SiKubernetes, SiMongodb, SiServerless, SiTerraform, SiTypescript } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

// Lazy load the tech stack icons
const TechStackIcon = lazy(() => import("./TechStackIcon"));

const DeveloperIntro: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const techStack = [
    { Icon: FaAws, color: "#FF9900", name: "AWS Solutions" },
    { Icon: SiServerless, color: "#FD5750", name: "Serverless Architecture" },
    { Icon: FaNodeJs, color: "#339933", name: "Node.js Enterprise" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript Expert" },
    { Icon: SiGo, color: "#00ADD8", name: "Golang Development" },
    { Icon: FaPython, color: "#3776AB", name: "Python Solutions" },
    { Icon: SiKubernetes, color: "#326CE5", name: "Kubernetes Cloud" },
    { Icon: FaDocker, color: "#2496ED", name: "Docker Containers" },
    { Icon: SiTerraform, color: "#7B42BC", name: "Terraform IaC" },
    { Icon: SiMongodb, color: "#47A248", name: "MongoDB Atlas" },
  ];

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: [1, 1.02, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [controls, inView]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={ref}
      className="text-center mb-8"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div animate={controls} className="text-3xl md:text-4xl font-bold mb-4">
        <Typewriter
          options={{
            strings: [
              "Founder & CEO of CodeLamda Technologies",
              "AWS Solutions Architect Professional",
              "Full Stack Cloud Architect",
              "Enterprise Solutions Expert",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </motion.div>

      <div className="grid grid-cols-5 gap-4 mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          {techStack.map(({ Icon, color, name }, index) => (
            <TechStackIcon
              key={name}
              Icon={Icon}
              color={color}
              name={name}
              delay={index * 0.2}
              isHovering={isHovering}
              mousePosition={mousePosition}
            />
          ))}
        </Suspense>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 dark:text-gray-300 mt-4"
      >
        Transforming businesses through innovative cloud solutions and enterprise architecture
      </motion.p>
    </div>
  );
};

export default DeveloperIntro;
