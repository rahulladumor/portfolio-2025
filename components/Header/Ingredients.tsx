import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

interface Expertise {
  name: string;
  description: string;
  color: string;
  keywords: string[];
}

const expertiseList: Expertise[] = [
  {
    name: "System_Architect",
    description: "Designing scalable cloud-native architectures",
    color: "text-amber-500",
    keywords: ["AWS", "Microservices", "Serverless", "Kubernetes"]
  },
  {
    name: "Tech_Innovator",
    description: "Building next-gen AI & blockchain solutions",
    color: "text-blue-500",
    keywords: ["AI/ML", "Web3", "Smart Contracts", "Innovation"]
  },
  {
    name: "Full_Stack",
    description: "Crafting end-to-end modern applications",
    color: "text-purple-500",
    keywords: ["TypeScript", "React", "Node.js", "GraphQL"]
  },
  {
    name: "DevOps_Master",
    description: "Optimizing development & deployment pipelines",
    color: "text-green-500",
    keywords: ["CI/CD", "Docker", "Terraform", "Monitoring"]
  }
];

const Ingredients: React.FC = () => {
  const [hoveredExpertise, setHoveredExpertise] = useState<string | null>(null);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (isTypingComplete) {
      const items = document.querySelectorAll('.expertise-item');
      items.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
          const expertise = (e.target as HTMLElement).getAttribute('data-expertise');
          setHoveredExpertise(expertise);
        });
        item.addEventListener('mouseleave', () => {
          setHoveredExpertise(null);
        });
      });
    }
  }, [isTypingComplete]);

  return (
    <motion.div
      className="relative mx-auto max-w-4xl perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 rounded-xl opacity-75 blur-xl"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
            "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(239, 68, 68, 0.2))",
            "linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(59, 130, 246, 0.2))",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="relative rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />

        <motion.div 
          className="relative bg-white/90 dark:bg-gray-800/90 p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl"
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="prose prose-lg dark:prose-invert mx-auto relative">
            {/* Glowing line effect */}
            <motion.div
              className="absolute -left-4 top-0 w-1 h-full rounded-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"
              animate={{
                opacity: [0.5, 1, 0.5],
                height: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <Typewriter
              options={{
                delay: 50,
                cursor: "▋",
                wrapperClassName: "text-lg md:text-xl font-mono"
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString("<span class='text-blue-500 font-semibold'>function</span> ")
                  .typeString("<span class='text-purple-500 font-semibold'>createInnovator</span>")
                  .typeString("<span class='text-gray-400'>()</span> {<br>")
                  .typeString("&nbsp;&nbsp;<span class='text-blue-500'>return</span> {<br>")
                  .typeString("&nbsp;&nbsp;&nbsp;&nbsp;name: <span class='text-green-500'>'Rahul Ladumor'</span>,<br>")
                  .typeString("&nbsp;&nbsp;&nbsp;&nbsp;passion: <span class='text-orange-500'>'Building Amazing Tech'</span>,<br>")
                  .typeString("&nbsp;&nbsp;&nbsp;&nbsp;expertise: [<br>")
                  .pasteString(
                    expertiseList.map((exp, index) => `
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span 
                        class='expertise-item ${exp.color} font-semibold cursor-pointer
                               hover:scale-105 inline-block transition-all duration-300
                               hover:shadow-lg hover:-translate-y-0.5'
                        data-expertise='${exp.name}'
                      >
                        ${exp.name}
                      </span>${index < expertiseList.length - 1 ? ',<br>' : '<br>'}
                    `).join("")
                  )
                  .typeString("&nbsp;&nbsp;&nbsp;&nbsp;],<br>")
                  .typeString("&nbsp;&nbsp;&nbsp;&nbsp;mission: <span class='text-yellow-500'>'Innovate and Scale'</span>,<br>")
                  .typeString("&nbsp;&nbsp;};<br>")
                  .typeString("}")
                  .callFunction(() => {
                    setIsTypingComplete(true);
                  })
                  .start();
              }}
            />
          </div>

          <AnimatePresence>
            {hoveredExpertise && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute left-1/2 -translate-x-1/2 -bottom-16 
                         bg-gray-800/95 backdrop-blur-sm text-white px-6 py-3 rounded-xl
                         shadow-2xl z-10 min-w-[250px] text-center border border-gray-700/50"
                style={{
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                }}
              >
                <motion.div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 
                            border-8 border-transparent border-b-gray-800/95"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                />
                {(() => {
                  const expertise = expertiseList.find(exp => exp.name === hoveredExpertise);
                  if (!expertise) return null;
                  return (
                    <>
                      <p className="font-medium mb-3 text-gray-100">{expertise.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {expertise.keywords.map((keyword, index) => (
                          <motion.span
                            key={keyword}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-xs px-3 py-1 bg-white/10 rounded-full
                                     border border-white/10 backdrop-blur-sm
                                     hover:bg-white/20 transition-colors duration-300"
                          >
                            {keyword}
                          </motion.span>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {isTypingComplete && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5">
            <div className="absolute inset-0 backdrop-blur-[1px] mix-blend-overlay" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Ingredients;
