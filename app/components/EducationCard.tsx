import {education} from "../types/cv";

function EducationCard({education}: {education: education}) {

    return (
        <div data-testid="education-card" className="flex flex-col md:flex-row mb-6 mx-6 md:mx-0 md:mb-12">
            <div className="md:w-[35%]">
                <h4 className="text-sm md:text-base text-gray-600 italic text-left md:text-right mr-5 mb-2 md:mb-0">{education.dates}</h4>
            </div>
            <div className="md:w-[65%] border-l border-gray-400 ml-3 md:ml-0 pl-3 md:pl-8">
                <h2 className="md:text-xl font-bold pb-2">{education.title}</h2>
                <p className="text-sm md:text-base pb-2">{education.school}</p>
            </div>
        </div>
    )
}

export default EducationCard;