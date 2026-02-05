import { SiLinkedin, SiGithub } from 'react-icons/si';

function Footer() {

    return (
        <footer className="flex justify-between items-center p-3 max-w-[93%] mx-auto border-t border-gray-200 mt-2" >
            <div>
                <p className="font-bold">Phone</p>
                <p className="text-sm text-gray-500">{process.env.MY_PHONE}</p>
            </div>
            <div>
                <p className="font-bold">Mail</p>
                <p className="text-sm text-gray-500">{process.env.MY_EMAIL}</p>
            </div>
            <a href="https://www.linkedin.com/in/vanesaarjonilla"><SiLinkedin size={20} className="hover:text-gray-300 transition-colors"/></a>
            <a href="https://github.com/Nesa96"><SiGithub size={20} className="hover:text-gray-300 transition-colors"/></a>
        </footer>
    )   
}

export default Footer;