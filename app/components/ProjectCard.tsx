"use client";

import {project} from "../types/cv";
import { useState } from 'react';

function ProjectCard({project}: {project: project}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row md:justify-between mb-4 md:mb-16 items-start">
            <div className="md:w-[45%] text-center md:text-left mt-4 md:pr-8">
                <h2 className="text-xl md:text-2xl font-bold pb-2">{project.name}</h2>
                <p className="text-sm md:text-base text-gray-600 py-2 md:py-4">{project.description}</p>
                {project.link && (
                    <a href={project.link} 
                       target="_blank" 
                       className="text-xs font-mono font-bold text-gray-500 uppercase hover:underline"
                       rel="noopener noreferrer">
                        <span>View Project →</span>
                    </a>
                )}
            </div>

            <div className="md:w-[45%] mt-5 md:mt-0 flex flex-col items-center w-full">
                <div className="w-full flex justify-center relative overflow-hidden rounded-2xl border-black/5">
                    <img className="shadow-xl w-80 max-w-full md:w-full h-60 md:h-80 object-cover" src={project.images[currentIndex]} alt={project.name}/>
                </div>

                <div className="flex justify-center gap-2 mt-2 md:mt-6">
                    {project.images.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} 
                                className={`h-3 rounded-full ${index === currentIndex ? "w-4 bg-gray-500" : "w-3 bg-gray-300 hover:bg-gray-500"}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;