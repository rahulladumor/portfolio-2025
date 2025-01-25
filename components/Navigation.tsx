import { ThemeContext } from "contexts/ThemeProvider";
import { sectionsArray } from "data/sections";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import useWindowDimensions, { Breakpoints } from "hooks/useWindowDimensions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiCommand, FiGithub, FiTerminal, FiX } from "react-icons/fi";
import { SiTypescript } from "react-icons/si";
import { animateScroll, scroller } from "react-scroll";
import { Section } from "types/Sections";

const Tippy = dynamic(() => import("@tippyjs/react"), { ssr: false });

interface CommandItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  shortcut?: string;
  action: () => void;
}

const Navigation = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width > Breakpoints.lg;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [commandBarOpen, setCommandBarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandBarOpen(true);
      } else if (e.key === "Escape") {
        setCommandBarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (commandBarOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [commandBarOpen]);

  const goToSection = (section: Section) => {
    scroller.scrollTo(section, { duration: 500, smooth: true });
    setActiveSection(section);
    if (!isDesktop) setMenuOpen(false);
  };

  const commandItems: CommandItem[] = [
    ...sectionsArray.map(({ id, icon, title }) => ({
      id,
      title: `Go to ${title}`,
      icon,
      shortcut: `⌘${id.charAt(0).toUpperCase()}`,
      action: () => goToSection(id)
    })),
    {
      id: "theme",
      title: `Switch to ${isDarkMode ? "Light" : "Dark"} Theme`,
      icon: isDarkMode ? FaSun : FaMoon,
      shortcut: "⌘D",
      action: toggleTheme
    },
    {
      id: "github",
      title: "View GitHub Profile",
      icon: FiGithub,
      shortcut: "⌘G",
      action: () => window.open('https://github.com/rahulladumor', '_blank')
    }
  ];

  const filteredCommands = commandItems.filter(
    item => item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const MobileMenu = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-4 z-50
                      w-[280px] overflow-hidden rounded-xl
                      bg-gray-900/95 backdrop-blur-xl
                      border border-gray-700/50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3
                          border-b border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-gray-300">
                  Navigation
                </span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 text-xs rounded
                            bg-gray-800 text-gray-500 font-mono">
                  esc
                </kbd>
                <span className="text-xs text-gray-500">to close</span>
              </div>
            </div>

            {/* Search */}
            <div className="p-2 border-b border-gray-700/50">
              <div className="flex items-center gap-2 px-2 py-1.5
                          bg-gray-800/50 rounded-lg">
                <FiCommand className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sections..."
                  className="w-full bg-transparent border-none outline-none
                          text-sm text-gray-300 placeholder-gray-500"
                  autoFocus
                />
              </div>
            </div>

            {/* Sections */}
            <div className="p-1.5">
              <div className="text-xs font-medium text-gray-500 px-2 py-1.5">
                SECTIONS
              </div>
              {sectionsArray.map(({ id, icon: Icon, title }, index) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.05 }
                  }}
                  onClick={() => {
                    goToSection(id);
                    setMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 p-2
                          text-left rounded-lg
                          hover:bg-blue-500/10 group
                          transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-gray-500 
                                group-hover:text-blue-400" />
                  <span className="flex-1 text-sm text-gray-300">
                    {title}
                  </span>
                  <kbd className="px-1.5 py-0.5 text-xs rounded
                              bg-gray-800 text-gray-500 font-mono">
                    ⌘{id.charAt(0).toUpperCase()}
                  </kbd>
                </motion.button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-1.5 border-t border-gray-700/50">
              <div className="text-xs font-medium text-gray-500 px-2 py-1.5">
                QUICK ACTIONS
              </div>
              <motion.button
                onClick={() => window.open('https://github.com/rahulladumor', '_blank')}
                className="w-full flex items-center gap-2 p-2
                        text-left rounded-lg
                        hover:bg-blue-500/10 group
                        transition-colors duration-200"
              >
                <FiGithub className="w-4 h-4 text-gray-500 
                              group-hover:text-blue-400" />
                <span className="flex-1 text-sm text-gray-300">
                  GitHub Profile
                </span>
                <kbd className="px-1.5 py-0.5 text-xs rounded
                            bg-gray-800 text-gray-500 font-mono">
                  ⌘G
                </kbd>
              </motion.button>
              <motion.button
                onClick={toggleTheme}
                className="w-full flex items-center gap-2 p-2
                        text-left rounded-lg
                        hover:bg-blue-500/10 group
                        transition-colors duration-200"
              >
                {isDarkMode 
                  ? <FaMoon className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
                  : <FaSun className="w-4 h-4 text-gray-500 group-hover:text-blue-400" />
                }
                <span className="flex-1 text-sm text-gray-300">
                  Toggle Theme
                </span>
                <kbd className="px-1.5 py-0.5 text-xs rounded
                            bg-gray-800 text-gray-500 font-mono">
                  ⌘D
                </kbd>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Fixed Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 z-50 p-4
                  flex items-center gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-lg bg-gray-900/90
                  border border-gray-700/50 backdrop-blur-sm
                  text-gray-300 hover:text-white
                  hover:border-gray-600 transition-all duration-200
                  ${isMenuOpen ? 'bg-blue-500/10 border-blue-500/50' : ''}`}
        >
          <FiTerminal className={`w-5 h-5 transition-colors duration-200
                              ${isMenuOpen ? 'text-blue-400' : 'group-hover:text-blue-400'}`} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-900/90
                  border border-gray-700/50 backdrop-blur-sm
                  text-gray-300 hover:text-white
                  hover:border-gray-600 transition-colors duration-200
                  group"
        >
          {isDarkMode 
            ? <FaMoon className="w-5 h-5 group-hover:text-blue-400" />
            : <FaSun className="w-5 h-5 group-hover:text-blue-400" />
          }
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://github.com/rahulladumor', '_blank')}
          className="p-2 rounded-lg bg-gray-900/90
                  border border-gray-700/50 backdrop-blur-sm
                  text-gray-300 hover:text-white
                  hover:border-gray-600 transition-colors duration-200
                  group"
        >
          <FiGithub className="w-5 h-5 group-hover:text-blue-400" />
        </motion.button>
      </motion.nav>

      <MobileMenu />
    </>
  );
};

export default Navigation;
