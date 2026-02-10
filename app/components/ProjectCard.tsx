"use client";

import {project} from "../types/cv";
import { useState } from 'react';
import { Monitor, Cloud } from "lucide-react";

function ProjectCard({project}: {project: project}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row md:justify-between mb-14 md:mb-32 items-center md:items-center gap-4 lg:gap-16">
            
            <div className="md:w-[45%] text-center md:text-left">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold pb-2 text-gray-900 dark:text-gray-400">{project.name}</h2>
                
                <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 py-2 md:py-4 leading-relaxed">
                    {project.description} 
                    <a href={project.code_link} target="_blank" className="ml-1 underline decoration-gray-300 hover:text-black">
                        code in Github
                    </a>
                </p>

                <ul className="space-y-3 mt-2 md:mt-0 mb-5 md:ml-3 text-xs md:text-sm lg:text-base text-gray-500 dark:text-gray-400 italic">
                    {project.top_points.map((s, i) => (
                        <li key={i} className="flex gap-2 justify-center md:justify-start">
                            <span className="text-blue-400">✦</span>{s}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start items-center">
                        <div className="flex flex-row group relative justify-center gap-3">
                            {project.frontend_tools.map((tool) => 
                                <span key={tool} className="text-[10px] lg:text-[13px] uppercase font-bold text-gray-400 tracking-widest flex items-center gap-1">
                                    <Monitor size={14}/>
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-gray-200 p-2 text-[8px] text-gray-600 group-hover:scale-100">
                                        Frontend Stack
                                    </span>
                                    {tool}
                                </span>)}
                        </div>
                        <div className="flex flex-row group relative items-center gap-3">
                            {project.backend_tools.map((tool) => 
                                <span key={tool} className="text-[10px] lg:text-[13px] uppercase font-bold text-gray-400 tracking-widest flex items-center gap-1">
                                    <Cloud size={14}/>
                                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 transition-all rounded bg-gray-200 p-2 text-[8px] text-gray-600 group-hover:scale-100">
                                        Backend Stack
                                    </span>
                                    {tool}
                                </span>)}
                        </div>
                </div>

                
            </div>

            <div className="md:w-[50%] flex flex-col items-center w-full">
                {project.link && (
                    <div className="my-2">
                        <a href={project.link} 
                           target="_blank" 
                           className="text-xs font-mono font-bold text-gray-500 uppercase hover:underline"
                           rel="noopener noreferrer">
                            <span>View Project →</span>
                        </a>
                    </div>
                )}
                
                <div className="w-[90%] sm:w-[80%] md:w-full relative overflow-hidden rounded-2xl shadow-2xl border dark:border-white/5 border-black/5">
                    <img 
                        className="w-full h-auto object-cover aspect-video transition-transform duration-500 hover:scale-[1.02] dark:brightness-85" 
                        src={project.images[currentIndex]} 
                        alt={project.name}
                    />
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {project.images.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCurrentIndex(index)} 
                            className={`h-1.5 transition-all duration-300 rounded-full ${
                                index === currentIndex ? "w-4 bg-gray-600" : "w-2 bg-gray-300 dark:bg-gray-400 hover:bg-gray-400 dark:hover:bg-gray-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;