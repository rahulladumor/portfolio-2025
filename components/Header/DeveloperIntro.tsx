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
      className="flex flex-col gap-6 lg:gap-8"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div 
        animate={controls} 
        className="text-base sm:text-lg font-medium relative"
      >
        <motion.div
          className="absolute -inset-x-6 -inset-y-2 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                   blur-lg rounded-lg -z-10"
        />
        <Typewriter
          options={{
            strings: [
              "AWS Solutions Architect Professional",
              "Full Stack Cloud Architect",
              "Enterprise Solutions Expert"
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            wrapperClassName: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600",
            cursorClassName: "text-blue-500/50"
          }}
        />
      </motion.div>

      <div className="grid grid-cols-5 gap-3">
        <Suspense fallback={<div className="col-span-5 h-8 animate-pulse bg-gray-200 dark:bg-gray-800 rounded" />}>
          {techStack.map(({ Icon, color, name }, index) => (
            <TechStackIcon
              key={name}
              Icon={Icon}
              color={color}
              name={name}
              delay={index * 0.1}
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
        className="relative max-w-2xl mx-auto mt-4"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20 
                      blur-xl opacity-50 dark:opacity-30 rounded-full" />
        <span className="relative text-xl font-light text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed">
          <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 
                        bg-clip-text text-transparent">Transforming</span>{" "}
          businesses through{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-600 
                        bg-clip-text text-transparent">innovative</span>{" "}
          <span className="inline-flex items-center">
            cloud solutions
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1"
            />
          </span>{" "}
          and{" "}
          <span className="relative">
            enterprise architecture
            <motion.div 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
          </span>
        </span>
      </motion.p>
    </div>
  );
};

export default DeveloperIntro;
