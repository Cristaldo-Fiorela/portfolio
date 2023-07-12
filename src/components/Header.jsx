// import '../css/header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
        <div className='bg-neutral-900 text-gray-400 w-full flex justify-end px-5'>
            <div className='flex gap-1'>
                <button className=' hover:text-gray-200'>EN</button>
                <p>/</p>
                <button className=' hover:text-gray-200'>ES</button>
            </div>
        </div>
        <div className="flex justify-around h-16 bg-neutral-900">
            <div className="text-5xl text-gray-200">  
                <span>&#123; </span>
                <FontAwesomeIcon icon={faStar} flip size="2xs" style={{"--fa-animation-duration": "3s"}} />                
                <span> &#125;</span>
            </div>

            <nav className="flex items-center justify-around list-none gap-3">
                <li className="text-gray-400 hover:text-gray-200 uppercase font-bold px-2.5 nav-item-animation"><a href="#about-section">About Me</a></li>
                <li className="text-gray-400 hover:text-gray-200 uppercase font-bold px-2.5 nav-item-animation"><a href="#skills-section">Skills</a></li>
                <li className="text-gray-400 hover:text-gray-200 uppercase font-bold px-2.5 nav-item-animation"><a href="#projects-section">Projects</a></li>
                <li className="text-gray-400 hover:text-gray-200 uppercase font-bold px-2.5 nav-item-animation"><a href="#contact-section">Contact Me</a></li>
            </nav>
        </div>
        </>

    );
};

export default Header;
