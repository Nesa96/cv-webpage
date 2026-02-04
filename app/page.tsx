import Image from "next/image";
import { myCvInfo } from "./data";
import ExperienceCard from "./components/ExperienceCard";

export default function Home() {
  return (
    <main>
      <div>
        {myCvInfo.experience.map((e) => <ExperienceCard key={e.position} experience={e}/>)}
      </div>
    </main>
  );
}
