import { Link, useLocation } from "react-router-dom"

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className="bg-[#1B2335] absolute w-full">
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
                                <Link to={"/display-movie"} className={`${pathname == "/display-movie" ? "text-[#E27614]" : "text-white"}`}>Display Movie</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header