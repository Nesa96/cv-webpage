import { myCvInfo } from "../data/index";
import Link from 'next/link'
import { Home } from 'lucide-react';
import { NavLinkProps } from "../types/cv"

function Header() {

    return (
        <header className="relative">
            <div className="flex flex-col md:flex-row md:gap-2 lg:gap-0 justify-between items-center px-3 pt-7 md:max-w-[93%] md:mx-auto" >
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <Link href="/" className="hidden md:inline hover:text-gray-300 transition-colors">
                        <Home size={20} />
                    </Link>
                    <h1 className="text-2xl md:text-base lg:text-xl font-bold whitespace-nowrap">
                        {process.env.MY_NAME}
                    </h1>
                    <h3 className="text-xs lg:text-sm text-gray-500 uppercase -mt-2 md:mt-1 whitespace-nowrap">
                        {myCvInfo.title}
                    </h3>
                </div>
        
                <nav className="flex gap-3 md:gap-2 lg:gap-6 mt-3 md:mt-1 lg:mt-0">
                    <Link href="/" className="md:hidden hover:text-gray-300 transition-colors mt-[2.5px]">
                        <Home size={13} />
                    </Link>
                    <NavSeparator />
                    <NavLink href="/resume">Resume</NavLink>
                    <NavSeparator />
                    <NavLink href="/projects">Projects</NavLink>
                    <NavSeparator />
                    <NavLink href="/skills">Skills</NavLink>
                </nav>
            </div>
            <div className="absolute top-33 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-18 lg:top-20 md:left-10 lg:left-12 xl:left-15 
                            z-50 flex items-center gap-3 
                            bg-transparent dark:bg-white/[0.02] backdrop-blur-sm
                            border border-dashed border-gray-300 dark:border-white/40 
                            px-4 py-2 rounded-full shadow-sm whitespace-nowrap">
                
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 dark:bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700 dark:bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                </span>

                <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                    Current Location: 
                    <span className="text-gray-800 dark:text-gray-300 font-bold ml-1">
                        {process.env.MY_LOCATION}
                    </span>
                </span>
            </div>
        </header>
    )   
}

export default Header;

const NavLink = ({ href, children }: NavLinkProps) => (
    <Link className="text-sm lg:text-base font-mono hover:text-gray-300 transition-colors" href={href}>
        {children}
    </Link>
);

const NavSeparator = () => <span className="text-xs lg:text-base text-gray-300">|</span>;