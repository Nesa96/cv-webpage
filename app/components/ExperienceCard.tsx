import {experience} from "../types/cv";

function ExperienceCard({experience}: {experience: experience}) {

    return (
        <div data-testid="experience-card" className="flex flex-col md:flex-row mb-6 mx-6 md:mx-0 md:mb-12">
            <div className="md:w-[35%]">
                <h4 className="text-sm md:text-base text-gray-600 italic text-left md:text-right mr-5 mb-2 md:mb-0">{experience.dates}</h4>
            </div>
            <div className="md:w-[65%] border-l border-gray-400 ml-3 md:ml-0 pl-3 md:pl-8">
                <h2 className="md:text-xl font-bold pb-2">{experience.position}</h2>
                <ul className="space-y-3">{experience.activities.map((exp, index) => 
                    <li className="text-sm md:text-base flex items-start -mt-2 md:mt-0" key={index}>
                        <span className="text-gray-600 mr-3 mt-1 text-xs">&gt;</span>
                        {exp}
                    </li>)}
                </ul>
            </div>
        </div>
    )
}

export default ExperienceCard;