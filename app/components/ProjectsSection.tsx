import { myCvInfo } from "../data";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
    
    return (
        <div className="flex flex-col justify-center min-h-[80vh] mx-60 mt-30">
            <h1 className="text-5xl font-bold mb-20">Projects</h1>
            <div className="mt-3">
                {myCvInfo.projects.map(p => <ProjectCard key={p.name} project={p} />)}
            </div>
        </div>
    )
}

export default ProjectsSection;