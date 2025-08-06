import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../axios.js";
import LoadingBar from "./Utils/LoadingBar.jsx";

const Navigation = () => {

    // State declarations
    const navigate = useNavigate();
    const [isMenu, setIsMenu] = useState(false);
    const [user, setUser] = useState({});

    // Auth token
    const token = localStorage.getItem("token");

    // Loading bar
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const simulateProgress = () => {
        setProgress(10);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if(prev < 90){
                    return prev + Math.random() * 10;
                }
                clearInterval(interval);
                return prev;
            })
        },100)

        return interval;

    }

    // Fetch user API
    useEffect(() => {
        const fetchUser = () => {
            api.get("/me")
            .then((res) => {
                setUser(res.data);
            })
            .catch((error) => {
                console.log("Error fetching user data: ", error);
            })
        }

        if(token){
            fetchUser();
        }
        
    },[])

    // Handle click nav
    const handleClickNav = () => {
        setIsMenu(prev => !prev);
    }

    // Handle click logout
    const handleClickLogout = () => {

        setLoading(true);
        setProgress(0);
        const progressInterval = simulateProgress();

        api.post("/logout")
        .then((res) => {
            localStorage.removeItem("token");
            delete api.defaults.headers.common["Authorization"];
            setUser({});
            navigate("/login");
        })
        .catch((error) => {
            console.log("Failed to logout", error);
        })
        .finally(() => {
            clearInterval(progressInterval);
            setProgress(100);
            setTimeout(() => {
                setLoading(false);
                setProgress(0);
            },500);
        })
    }

    return(
        <>
            {/* Loading bar */}
            <LoadingBar loading={loading} progress={progress} />

            {/* Nav */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-white mx-4 md:mx-24 md:text-base">
                <div className="flex flex-row items-center justify-between">
                    <FontAwesomeIcon onClick={() => handleClickNav()} role="button" icon={faBars} className="text-xl md:invisible cursor-pointer" />
                    <Link to="/" role="button" className="text-xl md:text-md text-center md:text-left my-4">Bloggies</Link>
                </div>
                <div className={`md:flex flex flex-col md:flex-row gap-6 md:items-center mb-4 md:mb-0 ${!isMenu && "hidden"} `}>
                    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-green-900 md:bg-transparent text-white p-2 border-white border-1 md:border-0 rounded-md shadow-white shadow-md md:rounded-none md:shadow-none ">
                    <Link to="/" role="button" className="cursor-pointer">Home</Link>
                    <span className="border-1 w-full md:border-0"></span>
                    <Link to="/news" role="button" className="cursor-pointer">News</Link>
                    <span className="border-1 w-full md:border-0"></span>
                    <Link to="/blogs" role="button" className="cursor-pointer">Blogs</Link>
                    
                    </ul>
                    {
                        !token ?
                        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-green-900 md:bg-transparent text-white p-2 border-white border-1 md:border-0 rounded-md shadow-white shadow-md md:rounded-none md:shadow-none">
                            <Link to="/login" role="button" className="cursor-pointer">Login</Link>
                            <span className="border-1 w-full md:border-0"></span>
                            <Link to="/register" role="button" className="cursor-pointer pb-2 md:pb-0">Register</Link>
                        </ul> :
                        <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-green-900 md:bg-transparent text-white p-2 border-white border-1 md:border-0 rounded-md shadow-white shadow-md md:rounded-none md:shadow-none">
                            <Link to={`/user/${user.username}`} role="button" className="cursor-pointer md:pb-0">
                                {user.username ? user.username : "Loading..."}
                            </Link>
                            <span className="border-1 w-full md:border-0"></span>
                            <li onClick={() => handleClickLogout()} role="button" className="cursor-pointer pb-2 md:pb-0"> Logout</li>
                        </ul>
                    }
                    
                </div>
                
            </div>
        </>
        
    )
}

export default Navigation;