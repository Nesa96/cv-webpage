import {experience} from "../types/cv";

function ExperienceCard({experience}: {experience: experience}) {

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-bold text-gray-800">{experience.position}</h2>
            <h4 className="text-sm text-blue-600 font-mediuim mb-4 italic">{experience.dates}</h4>
            <ul className="list-disc ml-5 space-y-2 text-gray-600">{experience.activities.map(exp => <li key={exp}>{exp}</li>)}</ul>
        </div>
    )
}

export default ExperienceCard;