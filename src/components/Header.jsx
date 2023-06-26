const Header = () => {
    return (
        <div className="flex justify-around w-screen h-20 bg-black">
            <h2 className="text-indigo-900 text-6xl">HOLA</h2>

            <nav>
                <li><a href="">About Me</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Proyectos</a></li>
                <li><a href="">Contactame</a></li>
            </nav>
        </div>
    );
};

export default Header;
