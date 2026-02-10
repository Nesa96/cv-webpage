import { skill } from "../types/cv";

function SkillCard({skill}: {skill : skill}) {

    return(
        <div data-testid="skill-type"> 
            <h2 className="text-lg md:text-xl lg:text-2xl text-center md:text-left font-semibold mb-2 mt-4 md:my-6 
                           text-gray-800 dark:text-gray-400 italic border-b border-gray-400 pb-2">{skill.name_skills}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {skill.skills.map((s,i) => {return(
                    <span 
                        key={i}
                        className={`px-4 py-2 text-center bg-gray-100 dark:bg-gray-600 border rounded-lg 
                                    tech-text text-sm lg:text-base text-gray-800 dark:text-gray-400 shadow-sm m-1 md:m-3
                                    flex items-center justify-center
                                    ${s.includes('(Learning)') ? 'border-blue-600 dark:border-cyan-300 dark:shadow-[0_0_10px_rgba(96,165,250,0.2)] border-dashed' 
                                                               : 'border-gray-200 dark:border-gray-400'}`}
                    >
                        {s.replace("(Learning)", "")}
                    </span>
                )})}
            </div>
        </div>
    )
}

export default SkillCard;