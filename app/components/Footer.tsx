import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

function Footer() {

    return (
        <footer className="flex justify-between items-center px-5 md:px-10 pt-4 pb-4 md:pb-7 md:max-w-[93%] mx-auto border-t border-gray-400" >
            <div className="flex flex-col">
                <p className="hidden md:inline font-bold uppercase">Contact</p>
                <a href={`mailto:${process.env.MY_EMAIL}`} className="text-xs md:text-sm text-gray-500">
                    <span className="md:hidden flex items-center gap-1 text-black">
                        <SiGmail size={20} />
                    </span>
                    <span className="hidden md:inline">
                        {process.env.MY_EMAIL}
                    </span>
                </a>
            </div>
            <a href="https://www.linkedin.com/in/vanesaarjonilla"><SiLinkedin size={20} className="hover:text-gray-300 transition-colors"/></a>
            <a href="https://github.com/Nesa96"><SiGithub size={20} className="hover:text-gray-300 transition-colors"/></a>
        </footer>
    )   
}

export default Footer;