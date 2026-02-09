import { skill } from "../types/cv";

function SkillCard({skill}: {skill : skill}) {

    return(
        <div data-testid="skill-type"> 
            <h2 className="text-lg md:text-2xl text-center md:text-left font-semibold mb-2 mt-4 md:my-6 text-gray-800 italic border-b border-gray-400 pb-2">{skill.name_skills}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3">
                {skill.skills.map((s,i) => {return(
                    <span 
                        key={i}
                        className={`px-4 py-2 text-center bg-gray-100 border rounded-lg 
                                    tech-text text-sm md:text-base text-gray-800 shadow-sm m-1 md:m-3
                                    flex items-center justify-center
                                    ${s.includes('(Learning)') ? 'border-blue-600 border-dashed' : 'border-gray-200'}`}
                    >
                        {s.replace("(Learning)", "")}
                    </span>
                )})}
            </div>
        </div>
    )
}

export default SkillCard;