import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface TechStackIconProps {
  Icon: IconType;
  color: string;
  name: string;
}

const TechStackIcon: React.FC<TechStackIconProps> = ({ Icon, color, name }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.2, 
        rotate: 5,
        zIndex: 1,
        boxShadow: '0 0 20px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center gap-2 group relative"
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      <motion.div
        whileHover={{ rotateY: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon 
          className="text-3xl transition-all duration-300 ease-in-out
                   hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" 
          style={{ color }}
          aria-label={name}
          role="img"
        />
      </motion.div>
      <span 
        className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   absolute -bottom-4 bg-gray-800 text-white px-2 py-1 rounded-md
                   transform group-hover:scale-110"
        role="tooltip"
      >
        {name}
      </span>
    </motion.div>
  );
};

export default TechStackIcon;
