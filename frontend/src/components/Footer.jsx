import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faReddit, faTiktok, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios";


const Footer = () => {

    // State declarations
    const [username, setUsername] = useState("");
    const socialMedia = [
        {
            "icon" : faFacebook,
            "link" : "https://www.facebook.com/"
        },
        {
            "icon" : faInstagram,
            "link" : "https://www.instagram.com/"
        },
        {
            "icon" : faReddit,
            "link" : "https://www.reddit.com/"
        },
        {
            "icon" : faTiktok,
            "link" : "https://www.tiktok.com/"
        },
        {
            "icon" : faTwitch,
            "link" : "https://www.twitch.tv/"
        },
        {
            "icon" : faTwitter,
            "link" : "https://www.twitter.com/"
        },
        {
            "icon" : faYoutube,
            "link" : "https://www.youtube.com/"
        }

    ];

    // Auth token
    const token = localStorage.getItem("token");
    

    // Fetch username
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("/me");
                setUsername(response.data.username);
            } catch (error) {
                console.log("Failed fetching userdata", error);
            }
        }

        if(token){
            fetchUser();
        }
        
    },[])

    return(

        <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-2 md:gap-4 bg-emerald-950 text-white border-t-2 p-4 md:p-8">
            <h1 role="button" className="text-xl">Bloggies</h1>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                    <p>Get our latest gaming news</p>
                    {
                        token ? 
                        <Link to={`/user/${username}`} className="p-1 bg-white text-emerald-950 rounded-sm w-fit">Contribute Now</Link> :
                        <Link to="/register" className="p-1 bg-white text-emerald-950 rounded-sm w-fit">Register Now</Link>
                    }
                    
                </div>
                {/* Links */}
                <div className="flex flex-wrap text-gray-400 gap-2">
                    <Link to="/news" className="cursor-pointer" role="button">News</Link>
                    <Link to="/blogs" className="cursor-pointer" role="button">Blogs</Link>
                </div>
                {/* Social media icons */}
                <div className="flex flex-wrap gap-2">
                    {
                        socialMedia.map((icon, index) => (
                            <a key={index} href={icon.link} target="_blank">
                                <FontAwesomeIcon role="button" icon={icon.icon} />
                            </a>
                        ))
                    }
                </div>
            </div>
            <p className="text-xs md:text-md">Copyright &copy; <span className="text-gray-400">PeeDegrees</span></p>
            
        </footer>
    )
}

export default Footer;