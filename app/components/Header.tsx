import { myCvInfo } from "../data/index";
import Link from 'next/link'
import { Home } from 'lucide-react';

function Header() {

    return (
        <header className="flex justify-between items-center p-3 max-w-[93%] mx-auto" >
            <div className="flex items-center gap-4">
                <Link href="/" className="hover:text-gray-300 transition-colors">
                    <Home size={20} />
                </Link>
                <h1 className="text-xl font-bold">
                    {process.env.MY_NAME}
                </h1>
                <h3 className="text-sm text-gray-500 uppercase pt-[3px]">
                    {myCvInfo.title}
                </h3>
            </div>
    
            <nav className="flex gap-6">
                <Link className="hover:text-gray-300 transition-colors" href="/resume">Resume</Link>
                <span className="text-gray-300">|</span>
                <Link className="hover:text-gray-300 transition-colors" href="/projects">Projects</Link>
                <span className="text-gray-300">|</span>
                <Link className="hover:text-gray-300 transition-colors" href="/skills">Skills</Link>
            </nav>
        </header>
    )   
}

export default Header;