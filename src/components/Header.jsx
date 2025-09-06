import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const [menu, setMenu] = useState(false)
    const { pathname } = useLocation();

    return (
        <header className="bg-[#1B2335]">
            <div className="container mx-auto">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8 rtl:space-x-reverse">
                            <li>
                                <Link to={"/"} className={`${pathname == "/" ? "text-[#E27614]" : "text-white"}`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/add-movie"} className={`${pathname == "/add-movie" ? "text-[#E27614]" : "text-white"}`}>Add Movie</Link>
                            </li>
                            <li>
                                <Link to={"/display-movie"} className={`${pathname == "/display-movie" || pathname.includes("/description") ? "text-[#E27614]" : "text-white"}`}>Display Movie</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="md:hidden">
                            <button onClick={() => setMenu(!menu)} className="text-white text-2xl">
                                {menu ? '✕' : '☰'}
                            </button>
                        </div>
                    </div>
                </div>
                {
                    menu && (
                        <div className="md:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-[#1B2335] z-50 p-6 overflow-y-auto">
                            <ul className="flex flex-col space-y-4 p-2 font-semibold">
                                <li>
                                    <Link to={"/"}  onClick={() => setMenu(false)}  className={`${pathname == "/" ? "text-[#E27614]" : "text-white"}`}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/add-movie"}  onClick={() => setMenu(false)}  className={`${pathname == "/add-movie" ? "text-[#E27614]" : "text-white"}`}>Add Movie</Link>
                                </li>
                                <li>
                                    <Link to={"/display-movie"}  onClick={() => setMenu(false)}  className={`${pathname == "/display-movie" || pathname.includes("/description") ? "text-[#E27614]" : "text-white"}`}>Display Movie</Link>
                                </li>
                            </ul>
                        </div>
                    )}
            </div>
        </header>
    )
}

export default Header