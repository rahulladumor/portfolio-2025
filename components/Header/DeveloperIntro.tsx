import { FaAws, FaNodeJs, FaDocker, FaPython } from 'react-icons/fa';
import { SiTypescript, SiServerless, SiKubernetes, SiMongodb, SiGo, SiTerraform } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

// Lazy load the tech stack icons
const TechStackIcon = lazy(() => import('./TechStackIcon'));

const DeveloperIntro: React.FC = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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
    if (inView) {
      controls.start({
        scale: [1, 1.02, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
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
    <motion.div 
      ref={ref}
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
      role="region"
      aria-label="Developer Introduction"
    >
      {/* Floating Particles Background */}
      <div 
        className="absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
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
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent
                         hover:from-orange-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-500">
            Senior Software Engineer
          </span>
        </motion.h1>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Suspense fallback={<div className="animate-pulse h-8 w-8 bg-gray-200 rounded-full"></div>}>
            {techStack.map(({ Icon, color, name }) => (
              <TechStackIcon
                key={name}
                Icon={Icon}
                color={color}
                name={name}
              />
            ))}
          </Suspense>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeveloperIntro;
