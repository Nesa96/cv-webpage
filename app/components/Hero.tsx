import Link from "next/link";
import { myCvInfo } from "../data";
import { NavLinkProps } from "../types/cv";

function Hero() {

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center pt-15 md:pt-0 md:min-h-[80vh] md:mx-20">
            <div className="w-[90%] md:w-1/3 px-5 md:pl-0 md:pr-8">
                <img src="/logo.jpg" alt="Perfil image" className="rounded-full shadow-xl border-8 border-gray-100/50"/>
            </div>
            <div className="flex flex-col justify-center md:w-1/3 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold pt-9 md:p-2">Console.log("Hi")</h1>
                <h3 className="text-xl md:text-3xl font-bold p-2">About me</h3>
                <p className="px-7 pb-3 md:p-2">{myCvInfo.summary}</p>
                <div className="flex justify-center md:justify-start mb-6 md:mb-0 p-3 gap-3 md:gap-6 text-sm md:text-base md:text-center">
                    <HeroLink href="/resume">Resume</HeroLink>
                    <HeroLink href="/projects">Projects</HeroLink>
                    <HeroLink href="/skills">Skills</HeroLink>
                </div>
            </div>
            <div className="absolute top-4 md:top-6 md:left-0 z-50 flex items-center gap-3 bg-white/30 backdrop-blur-md border border-dashed border-gray-300 px-4 py-2 rounded-full shadow-sm">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-800"></span>
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                    Current Location: <span className="text-gray-800 font-bold">{process.env.MY_LOCATION}</span>
                </span>
            </div>
         </div>
    )
}

export default Hero;

const HeroLink = ({ href, children }: NavLinkProps) => (
    <Link href={href} 
        className="tech-text border-2 border-dashed border-gray-900 rounded-full p-3 w-[30%] md:w-1/4 hover:text-gray-300 transition-colors flex justify-center items-center"
    >
        {children}
    </Link>
);