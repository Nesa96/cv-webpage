import { myCvInfo } from "../data";
import SkillCard from "./SkillCard";

function SkillSection() {
    
    return (
        <div className="flex flex-col md:min-h-[80vh] md:mx-15 lg:mx-30 xl:mx-40 2xl:mx-50 mx-8 mt-10 mt-15 md:mt-30 mb-5 md:mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-bold mb-3 md:mb-10">Skills</h1>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2 md:mb-8">
                <div className="w-2 h-2 md:w-4 md:h-4 border border-dashed border-blue-400 dark:border-cyan-300 bg-blue-50/50 rounded-sm"></div>
                <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-mono italic"> = Currently learning / Improving</span>
            </div>
            <div className="flex flex-col">
                {myCvInfo.skills.map((skill, index) => <SkillCard key={index} skill={skill} />)}
            </div>
        </div>
    )
}

export default SkillSection;