import { FaAws, FaNodeJs, FaDocker, FaPython } from 'react-icons/fa';
import { SiTypescript, SiServerless, SiKubernetes, SiMongodb, SiGo, SiTerraform } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const DeveloperIntro: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const techStack = [
    { Icon: FaAws, color: '#FF9900', name: 'AWS' },
    { Icon: SiServerless, color: '#FD5750', name: 'Serverless' },
    { Icon: FaNodeJs, color: '#339933', name: 'Node.js' },
    { Icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
    { Icon: SiGo, color: '#00ADD8', name: 'Golang' },
    { Icon: FaPython, color: '#3776AB', name: 'Python' },
    { Icon: SiKubernetes, color: '#326CE5', name: 'Kubernetes' },
    { Icon: FaDocker, color: '#2496ED', name: 'Docker' },
    { Icon: SiTerraform, color: '#7B42BC', name: 'Terraform' },
    { Icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  ];

  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center space-y-8 relative p-8"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        perspective: '1000px'
      }}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Developer Title with 3D Effect */}
      <motion.div
        animate={controls}
        className="space-y-3 relative"
        style={{
          transform: isHovering
            ? `rotateX(${(mousePosition.y - 300) / 20}deg) rotateY(${(mousePosition.x - 300) / 20}deg)`
            : 'none',
          transition: 'transform 0.3s ease-out'
        }}
      >
        <motion.h2 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent
                         hover:from-orange-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500">
            Senior Software Engineer
          </span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          AWS Expert & Cloud Architect
        </motion.p>
      </motion.div>

      {/* Tech Stack Icons Grid with Hover Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-5 gap-6 max-w-2xl mx-auto p-4 relative"
        style={{
          transform: isHovering
            ? `rotateX(${(mousePosition.y - 300) / 40}deg) rotateY(${(mousePosition.x - 300) / 40}deg)`
            : 'none',
          transition: 'transform 0.3s ease-out'
        }}
      >
        {techStack.map((tech, index) => {
          const IconComponent = tech.Icon;
          return (
            <motion.div
              key={tech.name}
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                zIndex: 1,
                boxShadow: '0 0 20px rgba(0,0,0,0.2)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 0.1 * index,
                duration: 0.5
              }}
              className="flex flex-col items-center gap-2 group relative"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.div
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                <IconComponent 
                  className="text-3xl transition-all duration-300 ease-in-out
                           hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" 
                  style={{ color: tech.color }}
                />
              </motion.div>
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300
                           absolute -bottom-4 bg-gray-800 text-white px-2 py-1 rounded-md
                           transform group-hover:scale-110">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Animated Code Snippet Background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
        animate={{
          opacity: [0.03, 0.05, 0.03],
          scale: [1, 1.02, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <pre className="text-xs whitespace-pre-wrap">
          {`
const developer = {
  name: "Rahul Ladumor",
  expertise: [
    "AWS Solutions Architecture",
    "Serverless Applications",
    "Cloud Native Development",
    "DevOps & Infrastructure",
    "Microservices Architecture"
  ],
  passion: "Building scalable cloud solutions"
};
          `}
        </pre>
      </motion.div>

      {/* Glowing Effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                      rgba(59, 130, 246, 0.1) 0%, 
                      rgba(147, 51, 234, 0.05) 25%, 
                      transparent 50%)`,
          transition: 'background 0.3s ease-out'
        }}
      />
    </motion.div>
  );
};

export default DeveloperIntro;
