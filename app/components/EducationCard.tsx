import {education} from "../types/cv";

function ExperienceCard({education}: {education: education}) {

    return (
        <div>
            <h2>{education.title}</h2>
            <h4>{education.dates}</h4>
            <p>{education.school}</p>
        </div>
    )
}

export default ExperienceCard;