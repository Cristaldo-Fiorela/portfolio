// import '../css/welcome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFileArrowDown, faDownload } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
return (
    <>
        <div className='h-screen flex flex-col justify-center items-center text-gray-200 gap-6'>
            <div className="flex gap-5">
                <p className="self-start text-5xl text-gray-400">Hi I'm</p>
                {/* <h1 className="welcome-name flex flex-col justify-center text-9xl">
                            <span>Fiorela&nbsp;</span> 
                            <span>Cristaldo</span> 
                        </h1> */}
                        <div className="flex flex-col">
                            <h1 className="welcome-name flex flex-col justify-center text-9xl">
                                <span>Fiorela&nbsp;</span> 
                                <span>Cristaldo</span> 
                            </h1>
                            {/* <h2 className="text-4xl underline-offset-8 font-extrabold tracking-wider">
                                FrontEnd Developer Junior
                            </h2> */}
                        </div>
            </div>
            <div className="flex flex-col">
                    <h2 className="text-3xl trabajo font-extrabold tracking-widest ">
                        Full Stack MERN Developer, in love with FrontEnd Development.
                    </h2>
            </div>
            <div className='flex w-1/3 items-center justify-evenly'>
                <button><a className="uppercase px-4 py-2 rounded-md border-double font-bold bg-coral text-2xl" href="#contact-section">
                    Contact Me &nbsp;
                    <FontAwesomeIcon icon={faPaperPlane} />
                </a>
                </button>
                <button><a className="uppercase px-4 py-2 rounded-md border-double font-bold bg-coral text-2xl" href="#contact-section">
                    Download CV &nbsp;
                    <FontAwesomeIcon icon={faFileArrowDown} />                </a>
                </button>
            </div>

            {/* <button className="uppercase ">Contactame</button> */}
        </div>
    </>
)
}

export default Welcome