import {experience} from "../types/cv";

function ExperienceCard({experience}: {experience: experience}) {

    return (
        <div data-testid="experience-card" className="flex flex-row mb-12">
            <div className="w-[35%]">
                <h4 className="text-gray-600 italic text-right mr-5">{experience.dates}</h4>
            </div>
            <div className="w-[65%] border-l border-gray-400 pl-8">
                <h2 className="text-xl font-bold pb-2">{experience.position}</h2>
                <ul className="space-y-3">{experience.activities.map((exp, index) => 
                    <li className="flex items-start" key={index}>
                        <span className="text-gray-600 mr-3 mt-1 text-xs">&gt;</span>
                        {exp}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard;