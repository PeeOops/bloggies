import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBackground from "../assets/images/background.jpg"
import Thumbnail from "../assets/images/thumbnails/mirage.png"
import Navigation from "../components/Navigation";
import { faAnglesRight, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faReddit, faTiktok, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import api from "../axios";
import { Link } from "react-router-dom";
import LoadingBar from "../components/Utils/LoadingBar";

const News = () => {

    // State declarations
    const [recentNewsPosts, setRecentNewsPosts] = useState([]);
    const [popularNewsPosts, setPopularNewsPosts] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setProgress(0);

            const progressInterval = simulateProgress();

            try {
                const [recentNewsAPI, popularNewsAPI] = await Promise.all([
                    api.get("/post/index"),
                    api.get("/post/index/popular")
                ])
                setRecentNewsPosts(recentNewsAPI.data.posts.filter((post) => post.type === "News"));
                setPopularNewsPosts(popularNewsAPI.data.posts.slice(0,5));

            } catch (error) {
                
            } finally{
                clearInterval(progressInterval);
                setProgress(100);
                setTimeout(() => {
                    setLoading(false);
                    setProgress(0);
                },500);
            }
        }

        fetchData();
    },[])

    return(
        <>

            {/* Loading bar */}
            <LoadingBar loading={loading} progress={progress} />

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
            {/* Recent News */}
            <div className="flex flex-col gap-4 bg-emerald-950 py-8 px-4 md:px-24">
                <h1 className="text-xl md:text-3xl text-white">Recent News</h1>
                <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-4">
                    {/* Newest */}
                    {
                        recentNewsPosts.slice(0,1).map((post) => (
                            <Link to={`/post/${post.id}`} key={post.id} role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                                <img src={`http://localhost:8000/storage/${post.featured_image_url}`} alt={post.title} className="w-full h-48 md:h-96 object-cover" />
                                <div className="p-4 md:p-6">
                                    {/* Published date and author */}
                                    <div className="flex flex-row text-xs md:text-md gap-2">
                                        <div className="flex flex-row gap-2 items-center">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <p>{post.created_at}</p>
                                        </div>
                                        <span>|</span>
                                        <div className="flex flex-row gap-2 items-center">
                                            <FontAwesomeIcon icon={faUser} />
                                            <p>{post.author.username}</p>
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <h1 className="text-lg md:text-2xl line-clamp-2 mt-2">{post.title}</h1>
                                    {/* Subtitle or Description */}
                                    <p className="line-clamp-5 text-xs md:text-base">{post.subtitle}</p>
                                    {/* Read more button */}
                                    <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p className="text-sm md:text-xl">Read more</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                    
                    {/* 2nd to 4th Recent News */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        {
                            recentNewsPosts.slice(1,5).map((post) => (
                                <Link to={`/post/${post.id}`} key={post.id} role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                                    <img src={`http://localhost:8000/storage/${post.featured_image_url}`} alt={post.title} className="w-full h-24 md:h-36 object-cover" />
                                    <div className="p-4 md:p-6">
                                        {/* Published date and author */}
                                        <div className="hidden md:flex flex-row text-xs gap-2">
                                            <div className="flex flex-row gap-2 items-center">
                                                <FontAwesomeIcon icon={faCalendar} />
                                                <p>{post.created_at}</p>
                                            </div>
                                            <span>|</span>
                                            <div className="flex flex-row gap-2 items-center">
                                                <FontAwesomeIcon icon={faUser} />
                                                <p>{post.author.username}</p>
                                            </div>
                                        </div>
                                        {/* Title */}
                                        <h1 className="text-sm md:text-lg line-clamp-2 md:mt-2">{post.title}</h1>
                                        {/* Subtitle or Description */}
                                        <p className="hidden md:line-clamp-2 text-xs">{post.subtitle}</p>
                                        {/* Read more button */}
                                        <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                            <FontAwesomeIcon icon={faAnglesRight} />
                                            <p>Read more</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* Popular News */}
            <div className="flex flex-col gap-4 bg-emerald-950 py-8 px-4 md:px-24 text-white">
                <h1 className="text-xl md:text-3xl">Popular News</h1>
                <div className="flex flex-col md:grid md:grid-cols-[3fr_2fr] gap-16">
                    <div className="flex flex-col gap-4">
                        {
                            popularNewsPosts.map((post) => (
                                <Link to={`/post/${post.id}`} key={post.id} role="button" className="flex flex-row gap-2 bg-emerald-950 p-2 shadow-white shadow-sm rounded-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none">
                                    <img src={`http://localhost:8000/storage/${post.featured_image_url}`} alt={post.title} className="w-36 md:w-64 h-auto rounded-md" />
                                    <div className="flex flex-col justify-between">
                                        <h1 className="text-sm md:text-xl">{post.title}</h1>
                                        <p className="text-xs md:text-lg text-gray-400">{post.created_at}</p>
                                    </div>
                                </Link>
                            ))

                        }
                        
                    </div>
                    
                    <div className="flex flex-col gap-4">
                        <h1 className="text-xl md:text-xl mt-6">Follow Us</h1>
                        <div className="flex flex-row justify-between md:gap-8 p-4 border-2 border-white text-xl rounded-md md:text-2xl w-full">
                            <a href="https://facebook.com" target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={faFacebook} /></a>
                            <a href="https://instagram.com" target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={faInstagram} /></a>
                            <a href="https://x.com" target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={faTwitter} /></a>
                            <a href="https://twitch.com" target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={faTwitch} /></a>
                            <a href="https://reddit.com" target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={faReddit} /></a>
                            <a href="https://youtube.com" target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={faYoutube} /></a>
                            <a href="https://tiktok.com" target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={faTiktok} /></a>
                        </div>
                        <h1 className="text-xl md:text-xl mt-6 border-l-4 border-white pl-4">Highlights</h1>
                        <ol className="flex flex-col gap-4 list-decimal pl-4">
                            {
                                recentNewsPosts.slice(-5).map((post) => (
                                    <Link to={`/post/${post.id}`} key={post.id} role="button" className="line-clamps-3 border-b-1 border-gray-400 pl-4 pb-4 last:border-0 last:pb-0"><li>{post.title}</li></Link>
                                ))
                            }
                            
                        </ol>
                    </div>
                </div>
            </div>
            {/* More News */}
            <div className="flex flex-col gap-4 bg-emerald-950 py-8 px-4 md:px-24 text-white">
                <h1 className="text-xl md:text-3xl">{recentNewsPosts.slice(6,10).length > 0 ? "More news" : ""}</h1>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {
                        recentNewsPosts.slice(6,10).length > 0 ?
                        recentNewsPosts.slice(6,10).map((post) => (
                            <Link to={`/post/${post.id}`} key={post.id} role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                                <img src={`http://localhost:8000/storage/${post.featured_image_url}`} alt={post.title} className="w-full h-24 md:h-64 object-cover" />
                                <div className="p-4 md:p-6">
                                    {/* Published date and author */}
                                    <div className="hidden md:flex flex-row text-xs md:text-sm gap-2">
                                        <div className="flex flex-row gap-2 items-center">
                                            <FontAwesomeIcon icon={faCalendar} />
                                            <p>{post.created_at}</p>
                                        </div>
                                        <span>|</span>
                                        <div className="flex flex-row gap-2 items-center">
                                            <FontAwesomeIcon icon={faUser} />
                                            <p>{post.author.username}</p>
                                        </div>
                                    </div>
                                    {/* Title */}
                                    <h1 className="text-sm md:text-xl line-clamp-2 md:mt-2">{post.title}</h1>
                                    {/* Subtitle or Description */}
                                    <p className="hidden md:line-clamp-3 text-xs md:text-md">{post.subtitle}</p>
                                    {/* Read more button */}
                                    <div className="flex flex-row gap-2 items-center text-xs md:text-sm mt-2">
                                        <FontAwesomeIcon icon={faAnglesRight} />
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </Link>
                        )) : ""
                    }
                    
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default News;