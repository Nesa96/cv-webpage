import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { myCvInfo } from "../data";

function ResumeSection() {
    
    return (
        <div className="flex flex-col justify-center md:min-h-[80vh] md:mx-60">
            <h1 className="text-3xl text-center md:text-left md:text-5xl font-bold my-3 pt-5 md:pt-0 md:mt-30 md:mb-20">Resume</h1>
            <div className="flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold">Work Experience</h2>
                    <div className="md:w-[50%] mt-3">
                        {myCvInfo.experience.map(e => <ExperienceCard key={e.position} experience={e} />)}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:border-t md:border-gray-300 mt-3 md:mt-10 md:pt-10">
                    <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold">Education</h2>
                    <div className="md:w-[50%] mt-3">
                        {myCvInfo.education.map(e => <EducationCard key={e.title} education={e} />)}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:border-t md:border-gray-300 mt-3 md:mt-10 md:py-10">
                    <h2 className="text-2xl md:text-3xl text-center md:text-left font-bold">Certifications</h2>
                    <div className="md:w-[50%] mt-3">
                        {myCvInfo.certifications.map(e => <EducationCard key={e.title} education={e} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection;