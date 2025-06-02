import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faReddit, faTiktok, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 bg-emerald-950 text-white border-t-2 p-4 md:p-8">
            <h1 role="button" className="text-3xl">Bloggies</h1>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                    <p>Get our latest gaming news</p>
                    <Link to="/register" className="p-1 bg-white text-emerald-950 rounded-sm w-fit">Register Now</Link>
                </div>
                {/* Links */}
                <div className="flex flex-wrap text-gray-400 gap-2">
                    <p role="button">News</p>
                    <p role="button">Blogs</p>
                </div>
                {/* Social media icons */}
                <div className="flex flex-wrap gap-2">
                    <FontAwesomeIcon role="button" icon={faFacebook} />
                    <FontAwesomeIcon role="button" icon={faInstagram} />
                    <FontAwesomeIcon role="button" icon={faTwitter} />
                    <FontAwesomeIcon role="button" icon={faTwitch} />
                    <FontAwesomeIcon role="button" icon={faReddit} />
                    <FontAwesomeIcon role="button" icon={faYoutube} />
                    <FontAwesomeIcon role="button" icon={faTiktok} />
                </div>
            </div>
            <p className="text-xs md:text-md">Copyright &copy; <span className="text-gray-400">PeeDegrees</span></p>
            
        </footer>
    )
}

export default Footer;