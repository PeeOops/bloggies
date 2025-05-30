import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    const [isMenu, setIsMenu] = useState(false);

    const handleClickNav = () => {
        setIsMenu(prev => !prev);
    }

    return(
        <>
            <div className="flex flex-col md:flex-row md:justify-between md:border-b-4 md:border-white gap-4 text-white mx-4 md:mx-24 md:text-lg">
                <div className="flex flex-row items-center justify-between">
                    <FontAwesomeIcon onClick={() => handleClickNav()} role="button" icon={faBars} className="text-xl md:invisible" />
                    <h1 role="button" className="text-xl md:text-md text-center md:text-left my-4">Bloggies</h1>
                </div>
                <div className={`md:flex flex flex-col md:flex-row gap-6 ${!isMenu ? "hidden" : ""} `}>
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-green-900 md:bg-transparent text-white p-2 border-white border-1 md:border-0 rounded-md shadow-white shadow-md md:rounded-none md:shadow-none ">
                    <li role="button" className="cursor-pointer">Home</li>
                    <span className="border-1 w-full md:border-0"></span>
                    <li role="button" className="cursor-pointer">News</li>
                    <span className="border-1 w-full md:border-0"></span>
                    <li role="button" className="cursor-pointer">Blogs</li>
                    <span className="border-1 w-full md:border-0"></span>
                    <li role="button" className="cursor-pointer pb-2 md:pb-0">Contact</li>
                    
                    </ul>
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-green-900 md:bg-transparent text-white p-2 border-white border-1 md:border-0 rounded-md shadow-white shadow-md md:rounded-none md:shadow-none">
                        <Link to="/login" role="button" className="cursor-pointer">Login</Link>
                        <span className="border-1 w-full md:border-0"></span>
                        <Link to="/register" role="button" className="cursor-pointer pb-2 md:pb-0">Register</Link>
                    </ul>
                </div>
                
            </div>
        </>
        
    )
}

export default Navigation;