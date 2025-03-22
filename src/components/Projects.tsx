"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 text-center mb-8">
          A small selection of{" "}
          <span className="text-purple-500 text-opacity-100">Academic projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => {
            // Check if odd (left side) or even (right side) card
            const isLeftCard = item.id % 2 !== 0; // Odd IDs (1,3) are left cards
            
            return (
              <div 
                className="lg:min-h-[32rem] h-[28rem] sm:w-96 w-[80vw] relative block"
                key={item.id}
              >
                {/* Clickable overlay - covers the entire card */}
                <a 
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 w-full h-full z-10 cursor-pointer"
                  aria-label={`Visit ${item.title} project`}
                />
                
                <div className="h-full w-full bg-gray-900 rounded-2xl shadow-lg border border-white/10 overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300">
                  {/* Project Image */}
                  <div className="relative w-full h-[20vh] lg:h-[30vh] overflow-hidden bg-[#13162D]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="font-bold lg:text-2xl md:text-xl text-base text-white mb-2 line-clamp-1">
                      {item.title}
                    </h2>
                    
                    <p className="lg:text-xl lg:font-normal font-light text-sm mb-4 text-[#BEC1DD] line-clamp-2">
                      {item.des}
                    </p>
                    
                    <div className="mt-auto">
                      {/* Bottom row with tech stack and link */}
                      <div className="flex items-center justify-between">
                        {/* Left side content - "Check Live Site" for left cards (1,3), Tech Stack for right cards (2,4) */}
                        {isLeftCard ? (
                          <div className="inline-flex items-center text-purple group-hover:underline">
                            <span className="lg:text-xl md:text-sm text-sm whitespace-nowrap">Check Live Site</span>
                            <FaLocationArrow className="ml-3" color="#CBACF9" />
                          </div>
                        ) : (
                          <div className="flex items-center">
                            {item.iconLists.slice(0, 4).map((icon, index) => (
                              <div
                                key={index}
                                className="border border-white/[.2] rounded-full bg-gray-800 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-1"
                              >
                                <img src={icon} alt={`tech-icon-${index}`} className="p-2" />
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Right side content - Tech Stack for left cards (1,3), "Check Live Site" for right cards (2,4) */}
                        {isLeftCard ? (
                          <div className="flex items-center">
                            {item.iconLists.slice(0, 4).map((icon, index) => (
                              <div
                                key={index}
                                className="border border-white/[.2] rounded-full bg-gray-800 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center mr-1"
                              >
                                <img src={icon} alt={`tech-icon-${index}`} className="p-2" />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="inline-flex items-center text-purple group-hover:underline">
                            <span className="lg:text-xl md:text-sm text-sm whitespace-nowrap">Check Live Site</span>
                            <FaLocationArrow className="ml-3" color="#CBACF9" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;