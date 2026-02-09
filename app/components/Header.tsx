import { myCvInfo } from "../data/index";
import Link from 'next/link'
import { Home } from 'lucide-react';
import { NavLinkProps } from "../types/cv"

function Header() {

    return (
        <header className="flex flex-col md:flex-row justify-between items-center px-3 pt-7 md:max-w-[93%] md:mx-auto" >
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <Link href="/" className="hidden md:inline hover:text-gray-300 transition-colors">
                    <Home size={20} />
                </Link>
                <h1 className="text-2xl md:text-xl font-bold whitespace-nowrap">
                    {process.env.MY_NAME}
                </h1>
                <h3 className="text-xs md:text-sm text-gray-500 uppercase -mt-2 md:mt-1 whitespace-nowrap">
                    {myCvInfo.title}
                </h3>
            </div>
    
            <nav className="flex gap-3 md:gap-6 mt-3 md:mt-0">
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
        </header>
    )   
}

export default Header;

const NavLink = ({ href, children }: NavLinkProps) => (
    <Link className="text-xs md:text-base font-mono hover:text-gray-300 transition-colors" href={href}>
        {children}
    </Link>
);

const NavSeparator = () => <span className="text-xs md:text-base text-gray-300">|</span>;