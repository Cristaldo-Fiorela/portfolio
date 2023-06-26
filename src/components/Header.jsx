const Header = () => {
    return (
        <div className="flex justify-around w-screen h-16 bg-neutral-950">
            <h2 className="text-indigo-900 text-6xl">HOLA</h2>

            <nav className="flex items-center justify-around list-none w-1/3 bg-red-600">
                <li className="text-gray-50"><a href="">About Me</a></li>
                <li className="text-gray-50"><a href="">Servicios</a></li>
                <li className="text-gray-50"><a href="">Proyectos</a></li>
                <li className="text-gray-50"><a href="">Contactame</a></li>
            </nav>
        </div>
    );
};

export default Header;
