import {education} from "../types/cv";

function EducationCard({education}: {education: education}) {

    return (
        <div data-testid="education-card" className="flex flex-row mb-12">
            <div className="w-[35%]">
                <h4 className="text-gray-600 italic text-right mr-5">{education.dates}</h4>
            </div>
            <div className="w-[65%] border-l border-gray-400 pl-8">
                <h2 className="text-xl font-bold pb-2">{education.title}</h2>
                <p className="pb-2">{education.school}</p>
            </div>
        </div>
    )
}

export default EducationCard;