import '../css/welcome.css'

const Welcome = () => {
return (
    <>
        <div className='h-screen flex flex-col justify-center items-center '>
            <h1>    Hi I'm
                <span className="welcome-name"> Fiorela Cristaldo</span> 
            </h1>
            <h2>FrontEnd Developer Junior</h2>
            <button className="uppercase ">Contactame</button>
        </div>
    </>
)
}

export default Welcome