import { myCvInfo } from "../data";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
    
    return (
        <div className="flex flex-col md:justify-center md:min-h-[80vh] md:mx-70 mx-8 mt-10 md:mt-30 ">
            <h1 className="text-3xl md:text-5xl text-center md:text-left font-bold mb-3 md:mb-20">Projects</h1>
            <div className="md:mt-3 pb-5 md:pb-0">
                {myCvInfo.projects.map(p => <ProjectCard key={p.name} project={p} />)}
            </div>
        </div>
    )
}

export default ProjectsSection;