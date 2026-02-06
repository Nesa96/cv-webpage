import { skill } from "../types/cv";

function SkillCard({skill}: {skill : skill}) {

    return(
        <div> 
            <h2 className="text-2xl font-semibold my-6 text-gray-800 italic border-b border-gray-400 pb-2">{skill.name_skills}</h2>
            <div className="grid grid-cols-3">
                {skill.skills.map((s,i) => {return(
                    <span 
                        key={i}
                        className={`px-4 py-2 text-center bg-gray-100 border rounded-lg 
                                    tech-text text-gray-800 shadow-sm m-3
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