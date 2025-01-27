import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type Props = {
  icon?: IconType;
  children: React.ReactNode;
};

const Heading: React.FC<Props> = ({ icon: Icon, children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className="flex items-center gap-3 mb-8 group">
      <div className="relative">
        {Icon && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-2 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 
                    dark:from-blue-900/20 dark:to-purple-900/20 shadow-sm"
          >
            <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </motion.div>
        )}
      </div>

      <span className="font-bold uppercase text-sm tracking-wider text-gray-800 dark:text-gray-200 
                    relative group-hover:text-blue-600 dark:group-hover:text-blue-400 
                    transition-colors duration-300">
        {children}
      </span>

      <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                    dark:from-blue-400/20 dark:to-purple-400/20" />
    </div>
  </motion.div>
);

export default Heading;
