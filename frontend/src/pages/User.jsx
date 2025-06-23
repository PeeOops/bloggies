import Navigation from "../components/Navigation"
import TopBackground from "../assets/images/background.jpg"
import Footer from "../components/Footer";
import Profile from "../components/User/Profile";
import { useState } from "react";

const User = () => {

    const [navigation, setNavigation] = useState("Profile");

    const handleClickNavigate = (nav) => {
        setNavigation(nav);
    }

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
                        <p>Mintymantis</p>
                        <p className="text-sm text-gray-500">Reading</p>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <p onClick={() => handleClickNavigate("Profile")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "Profile" ? "border-l-3 bg-gray-200" : ""}`} role="button">Profile</p>
                        <p onClick={() => handleClickNavigate("Add Post")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "Add Post" ? "border-l-3 bg-gray-200" : ""}`} role="button">Add Post</p>
                        <p onClick={() => handleClickNavigate("Saved Articles")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "Saved Articles" ? "border-l-3 bg-gray-200" : ""}`} role="button">Saved Articles</p>
                        <p onClick={() => handleClickNavigate("Activities")} className={`p-2 hover:border-l-3 hover:bg-gray-200 cursor-pointer ${navigation === "Activities" ? "border-l-3 bg-gray-200" : ""}`} role="button">Activities</p>
                    </div>
                </div>

                {/* Details */}
                <div className="bg-white text-emerald-950 px-4 py-2 shadow-gray-400 shadow-md">
                    <h1 className="text-xl mb-6">{navigation}</h1>
                    {/* Profile Content */}
                    {
                        navigation === "Profile" ? <Profile /> : ""
                    }
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    )
}

export default User;