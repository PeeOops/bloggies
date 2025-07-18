import Navigation from "../components/Navigation"
import TopBackground from "../assets/images/background.jpg"
import Footer from "../components/Footer";
import Profile from "../components/User/Profile";
import { useEffect, useState } from "react";
import AddPost from "../components/User/AddPost";
import { useParams, useSearchParams } from "react-router-dom";
import api from "../axios";
import Unauthorized from "../components/Errors/403";

const User = () => {

    const [navigation, setNavigation] = useState("profile");
    const {username} = useParams();
    const [userData, setUserData] = useState({});
    const [authorized, setAuthorized] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUser = () => {
        if (token) {
            api.get("/me")
                .then((res) => {
                    const loggedInUser = res.data;
                    setUserData(loggedInUser);

                    // ✅ Use res.data.username directly here
                    if (username === loggedInUser.username) {
                        setAuthorized(true);
                    } else {
                        setAuthorized(false);
                    }
                })
                .catch((error) => {
                    console.log("Error fetching user data: ", error);
                    setAuthorized(false);
                });
            } else {
                setAuthorized(false);
            }
        };

        fetchUser();
    }, [username]);

    const handleClickNavigate = (nav) => {
        setNavigation(nav);
        if(nav){
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set("nav", nav);
            setSearchParams(newSearchParams)
        }
    }

    // Loading screen
    if(authorized === null){
        return(
            <>
                {/* Header */}
                <div className="relative overflow-hidden">

                    {/* Background Image with Opacity */}
                    <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-90 z-[-1]"
                    style={{ backgroundImage: `url(${TopBackground})` }}
                    ></div>

                    {/* Navigation Component */}
                    <Navigation />

                </div>

                <div className="flex place-content-center items-center bg-emerald-950 text-white py-24 min-h-96">
                    <h1 className="text-2xl">Loading...</h1>
                </div>

                {/* Footer */}
                <Footer />
            </>
        )
    }

    // Unauthorized user
    if(!authorized){
        return(
            <>
                <Unauthorized/>
            </>
        )
    }
    
    // Authorized user
    if(authorized){
        return (
            <>
                {/* Header */}
                <div className="relative overflow-hidden">

                    {/* Background Image with Opacity */}
                    <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-90 z-[-1]"
                    style={{ backgroundImage: `url(${TopBackground})` }}
                    ></div>

                    {/* Navigation Component */}
                    <Navigation />

                </div>

                {/* Main */}
                <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-4 bg-emerald-950 py-8 px-4 md:px-24">
                    {/* Navigations */}
                    <div className="flex flex-col gap-6 bg-white text-emerald-950 px-4 py-6 shadow-gray-400 shadow-md">
                        <div className="flex flex-col border-b-2 border-emerald-950">
                            <p className="text-sm text-gray-500">Hello,</p>
                            <p>{userData.username}</p>
                            <p className="text-sm text-gray-500">{userData.bio}</p>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                            <p onClick={() => handleClickNavigate("profile")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "profile" ? "border-l-3 bg-gray-200" : ""}`} role="button">Profile</p>
                            <p onClick={() => handleClickNavigate("add post")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "add post" ? "border-l-3 bg-gray-200" : ""}`} role="button">Add Post</p>
                            <p onClick={() => handleClickNavigate("saved articles")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "saved articles" ? "border-l-3 bg-gray-200" : ""}`} role="button">Saved Articles</p>
                            <p onClick={() => handleClickNavigate("activities")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "activities" ? "border-l-3 bg-gray-200" : ""}`} role="button">Activities</p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="bg-white text-emerald-950 px-4 py-2 shadow-gray-400 shadow-md">
                        <h1 className="text-xl mb-6">{navigation.charAt(0).toUpperCase() + navigation.slice(1)}</h1>
                        {/* Profile Content */}
                        {
                            navigation === "profile" ? <Profile userData={userData} setUserData={setUserData} /> : navigation === "add post" ? <AddPost userData={userData} /> : ""
                        }
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </>
        )
    }


}

export default User;