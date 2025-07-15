import Navigation from "../components/Navigation";
import TopBackground from "../assets/images/background.jpg";
import ReactMarkdown from 'react-markdown';
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faCalendar, faUser, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faReddit, faTiktok, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import api from "../axios";

const Details = () => {

    // State declarations
    const { id } = useParams();
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);
    const [postTags, setPostTags] = useState([]);
    const [checkId, setCheckId] = useState([]);

    // Loading bar
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {

        const fetchPost = async () => {
            try {
                const [postDataAPI, allPostAPI] = await Promise.all([
                    api.get(`/post/${id}`),
                    api.get("/post/index")
                ])
                const checkedId = allPostAPI.data.posts.map((post) => post.id);
                setCheckId(checkedId);
                if(!checkedId.includes(parseInt(id))){
                    navigate("/404");
                }else{
                    setPostData(postDataAPI.data.post);
                    setPostTags(postDataAPI.data.post.tags);
                }
                
            } catch (error) {
                console.log("Failed fetching data", error);
            } finally{

            }
        }

        fetchPost();

    },[{id}])

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

            {/* Main */}
            <div className="flex flex-col md:grid md:grid-cols-[3fr_1fr] gap-4 md:gap-8 bg-emerald-950 text-white h-full px-4 md:px-24 py-4 md:py-8">
                {/* Left panel */}
                <div className="flex flex-col gap-4">
                    {/* News or Blogs */}
                    <p className="text-sm md:text-sm text-gray-400">{postData.type}</p>
                    {/* Title */}
                    <h1 className="text-2xl md:text-4xl">{postData.title}</h1>
                    {/* Date and Average reading time */}
                    <div className="flex flex-row gap-4 text-xs md:text-sm text-gray-400">
                        <p>{postData.created_at}</p>
                        <span>-</span>
                        <p>4 mins read</p>
                        <span>-</span>
                        <FontAwesomeIcon className="cursor-pointer text-white" icon={faHeart} />
                        <FontAwesomeIcon className="cursor-pointer text-white" icon={faShare} />
                    </div>
                    {/* Featured image */}
                    <img src={`http://localhost:8000/storage/${postData.featured_image_url}`} alt="" className="w-full" />
                    {/* Sub title */}
                    <h3 className="italic text-gray-400 text-base md:text-lg">{postData.subtitle}</h3>
                    {/* Post */}
                    <ReactMarkdown children={postData.body} />
                    {/* Tags */}
                    <div className="flex flex-col gap-4">
                        <p className="border-l-3 border-white pl-2 md:text-lg">Tags</p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {
                                    postTags.map((tag) => (
                                        <span className="bg-white text-emerald-950 p-2 rounded-sm">{tag.name}</span>
                                    ))
                                    
                            }
                            
                        </div>
                    </div>
                    {/* Social medias */}
                    <div className="flex flex-col gap-4">
                        <p className="border-l-3 border-white pl-2 md:text-lg">Follow Us</p>
                        <div className="flex flex-wrap gap-4 text-lg">
                            <a href=""><FontAwesomeIcon role="button" className="cursor-pointer" icon={faFacebook} /></a>
                            <a href=""><FontAwesomeIcon role="button" className="cursor-pointer" icon={faInstagram} /></a>
                            <a href=""><FontAwesomeIcon role="button" className="cursor-pointer" icon={faTwitter} /></a>
                            <a href=""><FontAwesomeIcon role="button" className="cursor-pointer" icon={faTwitch} /></a>
                            <a href=""><FontAwesomeIcon role="button" className="cursor-pointer" icon={faReddit} /></a>
                            <a href=""><FontAwesomeIcon role="button" className="cursor-pointer" icon={faYoutube} /></a>
                            <a href=""><FontAwesomeIcon role="button" className="cursor-pointer" icon={faTiktok} /></a>
                        </div>
                    </div>
                </div>

                {/* Right panel */}
                <div className="flex flex-col gap-4">
                    {/* Similar posts */}
                    <p className="border-l-3 border-white pl-2 md:text-lg">Similar posts</p>
                    <ol className="flex flex-col gap-4 list-decimal pl-4 text-base">
                        <li role="button" className="line-clamps-3 border-b-1 border-gray-400 pb-4">PlayStation Announces A State Of Play Will Air Tomorrow, June 4</li>
                        <li role="button" className="border-b-1 border-gray-400 pb-4">IO Interactive Announces Its First Showcase Featuring Hitman, 007 First Light, and MindsEye</li>
                        <li role="button" className="border-b-1 border-gray-400 pb-4">World of Warcraft: The Legacy of Arathor Update to Arrive Mid-June</li>
                        <li role="button" className="border-b-1 border-gray-400 pb-4">Assassin's Creed Statue Makers May Have Leaked Existence Of Assassin's Creed 4: Black Flag Remake</li>
                        <li role="button" className="border-b-1 border-gray-400 pb-4">Assassin's Creed Statue Makers May Have Leaked Existence Of Assassin's Creed 4: Black Flag Remake</li>
                        <li role="button">Forza Horizon Founder New Studio is Working on a “AAA” Racing Game</li>
                    </ol>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
        
    )
}

export default Details;