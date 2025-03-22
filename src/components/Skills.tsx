import { motion } from 'framer-motion';
import { SkillsIcons } from "./SkillsIcons";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C++", "Java"],
    color: "from-blue-400 to-blue-600",
    icon: "💻",
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React.js", "TailwindCSS", "ShadCN UI"],
    color: "from-pink-400 to-pink-600",
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
    color: "from-green-400 to-green-600",
    icon: "⚙️",
  },
  {
    title: "DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    color: "from-red-400 to-red-600",
    icon: "🚀",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-transparent text-white relative overflow-hidden" id="skills">
      <div className="relative py-20">
        {/* Background grid (more subtle) */}
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:50px_50px]" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Technical Expertise
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto mb-50">
              Comprehensive skillset across the full development stack, from
              frontend design to backend architecture and deployment
            </p>
          </motion.div>

          <div className="relative">
            {/* Center Skills Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
                
                {/* Main circle - fully opaque */}
                <div className="relative w-36 h-36 rounded-full flex items-center justify-center shadow-xl mb-15">
                  <div className="text-center">
                    <SkillsIcons />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connecting Lines Container */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px]">
              {/* Horizontal line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
              
              {/* Vertical lines */}
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="absolute top-0 h-24 w-px bg-slate-700/50"
                  style={{
                    left: `${25 + (index * 16.66)}%`,
                    transform: 'translateX(-50%)',
                  }}
                />
              ))}
            </div>

            {/* Categories grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-24">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center mt-20"
                >
                  {/* Category card */}
                  <div className={`px-6 py-3 rounded-xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 mb-6 w-full`}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{category.icon}</span>
                      <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        className="px-4 py-2 rounded-lg bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/40 transition-all duration-300"
                      >
                        <span className="text-sm text-slate-300 whitespace-nowrap">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;