// import '../css/welcome.css'

const Welcome = () => {
return (
    <>
        <div className='h-screen flex flex-col justify-center items-center text-gray-100'>
            <div className="flex gap-5">
                <p className="self-start text-5xl text-gray-300">Hi I'm</p>
                <h1 className="welcome-name flex flex-col justify-center text-9xl">
                            <span>Fiorela&nbsp;</span> 
                            <span>Cristaldo</span> 
                        </h1>
            </div>
            <div className="flex flex-col">

                    <h2 className="text-4xl trabajo">FrontEnd Developer Junior</h2>
                </div>
            {/* <button className="uppercase ">Contactame</button> */}
        </div>
    </>
)
}

export default Welcome