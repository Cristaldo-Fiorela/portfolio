import '../css/header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="flex justify-around h-16 bg-neutral-900">
            <div className="text-5xl text-gray-300">  
                <span>&#123; </span>
                <FontAwesomeIcon icon={faStar} flip size="2xs" style={{"--fa-animation-duration": "3s"}} />                
                <span> &#125;</span>
            </div>

            <nav className="flex items-center justify-around list-none gap-1 w-2/5 sm:w-3/5">
                <li className="text-gray-400 hover:text-gray-300 uppercase font-bold px-2.5 nav-item-animation"><a href="">About Me</a></li>
                <li className="text-gray-400 hover:text-gray-300 uppercase font-bold px-2.5 nav-item-animation"><a href="">Tecnologias</a></li>
                <li className="text-gray-400 hover:text-gray-300 uppercase font-bold px-2.5 nav-item-animation"><a href="">Proyectos</a></li>
                <li className="text-gray-400 hover:text-gray-300 uppercase font-bold px-2.5 nav-item-animation"><a href="">Contactame</a></li>
            </nav>
        </div>
    );
};

export default Header;
