import { myCvInfo } from "../data";
import SkillCard from "./SkillCard";

function SkillSection() {
    
    return (
        <div className="flex flex-col min-h-[80vh] mb-10 mx-60 mt-30">
            <h1 className="text-5xl font-bold mb-10">Skills</h1>
            <div className="flex items-center gap-3 mb-8">
                <div className="w-4 h-4 border border-dashed border-blue-400 bg-blue-50/50 rounded-sm"></div>
                <span className="text-sm text-gray-500 font-mono italic"> = Currently learning / Improving</span>
            </div>
            <div className="flex flex-col">
                {myCvInfo.skills.map((skill, index) => <SkillCard key={index} skill={skill} />)}
            </div>
        </div>
    )
}

export default SkillSection;