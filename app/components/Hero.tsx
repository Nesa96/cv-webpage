import Link from "next/link";
import { myCvInfo } from "../data";
import { NavLinkProps } from "../types/cv";

function Hero() {

    return (
        <div className="relative flex flex-col lg:flex-row items-center justify-center pt-15 lg:pt-0 lg:min-h-[80vh] md:mx-5 lg:mx-10 xl:mx-15 2xl:mx-20">
            <div className="w-[90%] md:w-[70%] lg:w-[40%] 2xl:w-1/3 px-5 lg:pl-0 lg:pr-8">
                <img src="/logo.jpg" alt="Perfil image" className="rounded-full shadow-xl border-8 border-gray-100/50"/>
            </div>
            <div className="flex flex-col justify-center lg:w-[60%] 2xl:w-1/3 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold pt-9 lg:p-2">Console.log("Hi")</h1>
                <h3 className="text-xl md:text-2xl xl:text-3xl font-bold p-2">About me</h3>
                <p className="px-7 pb-3 md:px-10 lg:p-2 md:text-base lg:text-sm xl:text-base">{myCvInfo.summary}</p>
                <div className="flex justify-center lg:justify-start mb-6 lg:mb-0 p-3 gap-3 lg:gap-6 text-sm md:text-base lg:text-center">
                    <HeroLink href="/resume">Resume</HeroLink>
                    <HeroLink href="/projects">Projects</HeroLink>
                    <HeroLink href="/skills">Skills</HeroLink>
                </div>
            </div>
         </div>
    )
}

export default Hero;

const HeroLink = ({ href, children }: NavLinkProps) => (
    <Link href={href} 
        className="tech-text md:text-xl lg:text-sm xl:text-base border-2 border-dashed border-gray-900 dark:border-gray-200 rounded-full p-3 w-[30%] 
                   md:w-1/4 hover:text-gray-300 transition-colors flex justify-center items-center"
    >
        {children}
    </Link>
);