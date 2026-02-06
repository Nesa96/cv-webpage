"use client";

import {project} from "../types/cv";
import { useState } from 'react';

function ProjectCard({project}: {project: project}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="flex flex-row justify-between mb-16 items-start">
            <div className="w-[45%] mt-4 pr-8">
                <h2 className="text-2xl font-bold pb-2">{project.name}</h2>
                <p className="text-gray-600 py-4">{project.description}</p>
                {project.link && (
                    <a href={project.link} target="_blank" className="text-xs font-mono font-bold text-gray-500 uppercase hover:underline">
                        <span>View Project →</span>
                    </a>
                )}
            </div>

            <div className="w-[45%] flex flex-col items-center">
                <div className="w-full relative overflow-hidden rounded-2xl border-black/5">
                    <img className="shadow-xl w-full h-79 object-cover" src={project.images[currentIndex]} alt={project.name}/>
                </div>

                <div className="flex justify-center gap-2 mt-6">
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