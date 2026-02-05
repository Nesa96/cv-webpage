import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import { myCvInfo } from "../data";

function ResumeSection() {
    
    return (
        <div className="flex flex-col justify-center min-h-[80vh] mx-60 mt-30">
            <h1 className="text-5xl font-bold mb-20">Resume</h1>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                    <h2 className="text-3xl font-bold">Work Experience</h2>
                    <div className="w-[50%] mt-3">
                        {myCvInfo.experience.map(e => <ExperienceCard key={e.position} experience={e} />)}
                    </div>
                </div>
                <div className="flex flex-row justify-between border-t border-gray-200 mt-10 pt-10">
                    <h2 className="text-3xl font-bold">Education</h2>
                    <div className="w-[50%] mt-3">
                        {myCvInfo.education.map(e => <EducationCard key={e.title} education={e} />)}
                    </div>
                </div>
                <div className="flex flex-row justify-between border-t border-gray-200 mt-10 py-10">
                    <h2 className="text-3xl font-bold">Certifications</h2>
                    <div className="w-[50%] mt-3">
                        {myCvInfo.certifications.map(e => <EducationCard key={e.title} education={e} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeSection;