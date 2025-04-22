"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 text-center mb-8">
          A small selection of{" "}
          <span className="text-purple-500 text-opacity-100">Academic projects</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="flex justify-center mb-16">
              <PinContainer 
                title={project.title} 
                href={project.link || "#"}
                containerClassName="h-[420px]"
              >
                <div className="flex basis-full flex-col p-6 tracking-tight text-slate-100/50 w-[26rem] h-[30rem]">
                  {/* Project image */}
                  <div className="w-full h-52 mb-6 overflow-hidden rounded-xl bg-[#13162D] flex items-center justify-center">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* Project title */}
                  <h3 className="max-w-xs !pb-3 !m-0 font-bold text-2xl text-slate-100">
                    {project.title}
                  </h3>
                  
                  {/* Project description */}
                  <div className="text-base !m-0 !p-0 font-normal mb-6">
                    <span className="text-slate-400">
                      {project.des}
                    </span>
                  </div>
                  
                  {/* Tech icons */}
                  <div className="flex items-center mt-auto gap-3 flex-wrap">
                    {project.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-gray-800 w-10 h-10 flex justify-center items-center"
                      >
                        <img src={icon} alt={`tech-icon-${index}`} className="p-2.5" />
                      </div>
                    ))}
                    
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="ml-auto bg-purple-500 rounded-full w-10 h-10 flex justify-center items-center hover:bg-purple-600 transition-colors"
                      >
                        <FaLocationArrow className="text-white text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;