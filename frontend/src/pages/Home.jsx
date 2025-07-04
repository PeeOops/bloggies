import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBackground from "../assets/images/background.jpg"
import Thumbnail from "../assets/images/thumbnails/mirage.png"
import Navigation from "../components/Navigation";
import { faAnglesRight, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import api from "../axios.js";
import LoadingBar from "../components/Utils/LoadingBar.jsx";

const Home = () => {

    // State declarations
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

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
        // Fetch data
        const fetchData = async () => {
            setLoading(true);
            setProgress(0);

            const progressInterval = simulateProgress();

            try {
                const [categoriesAPI, tagsAPI] = await Promise.all([
                    api.get("/categories"),
                    api.get("/tags")
                ])
                setCategories(categoriesAPI.data);
                setTags(tagsAPI.data);
            } catch (error) {
                console.log("Failed fetching data", error)
            } finally {
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

    return (
        <>
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

                {/* Hero Section */}
                <section className="relative z-10 text-center text-white py-32">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Bloggies</h1>
                    <p className="text-md md:text-lg">Discover the latest in gaming news and articles.</p>
                </section>
            </div>
            {/* Articles */}
            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] bg-emerald-950 border-t-2 border-white gap-16 px-4 md:px-24 pt-8 md:pb-16 md:pt-16">
                {/* Left main */}
                <div className="flex flex-col gap-6 text-white">
                    <h1 className="text-lg md:hidden">Filters:</h1>
                    {/* Search */}
                    <div className="p-2 bg-emerald-950 border-1 border-white shadow-white shadow-md">
                        <input type="text" placeholder="Search" className="text-white focus:outline-none" />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col gap-4 p-2 bg-emerald-950 border-1 border-white shadow-white shadow-md">
                        <h1 className="border-b-2">Categories</h1>
                        <div className="flex flex-col gap-2 text-sm">
                            {
                                categories.map((category) => (
                                    <div key={category.id} role="button" className="flex flex-row justify-between p-1 rounded-sm hover:bg-white hover:text-emerald-950 active:bg-white active:text-emerald-950 cursor-pointer">
                                        <p>{category.name}</p>
                                    </div>
                                ))
                                
                            }
                            
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col gap-4 p-2 bg-emerald-950 border-1 border-white shadow-white shadow-md">
                        <h1 className="border-b-2">Tags</h1>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {
                                tags.map((tag) => (
                                    <span key={tag.id} role="button" className="hover:bg-white hover:text-emerald-950 active:bg-white active:text-emerald-950 p-2 bg-gray-600 cursor-pointer rounded-sm">{tag.name}</span>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
                <span className="border-5 md:hidden border-white border-double"></span>
                {/* Right main */}
                <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none">
                            <img src={Thumbnail} alt="" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                {/* Published date and author */}
                                <div className="flex flex-row text-xs gap-2">
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <p>28th May 2025</p>
                                    </div>
                                    <span>|</span>
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faUser} />
                                        <p>ELLIOT ALDERSON</p>
                                    </div>
                                </div>
                                {/* Title */}
                                <h1 className="text-lg mt-2">One of the best steam games in 2025</h1>
                                {/* Subtitle or Description */}
                                <p className="line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                                {/* Read more button */}
                                <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                    <p>Read more</p>
                                </div>
                            </div>
                        </div>
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none">
                            <img src={Thumbnail} alt="" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                {/* Published date and author */}
                                <div className="flex flex-row text-xs gap-2">
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <p>28th May 2025</p>
                                    </div>
                                    <span>|</span>
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faUser} />
                                        <p>ELLIOT ALDERSON</p>
                                    </div>
                                </div>
                                {/* Title */}
                                <h1 className="text-lg mt-2">One of the best steam games in 2025</h1>
                                {/* Subtitle or Description */}
                                <p className="line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                                {/* Read more button */}
                                <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                    <p>Read more</p>
                                </div>
                            </div>
                        </div>
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none">
                            <img src={Thumbnail} alt="" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                {/* Published date and author */}
                                <div className="flex flex-row text-xs gap-2">
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <p>28th May 2025</p>
                                    </div>
                                    <span>|</span>
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faUser} />
                                        <p>ELLIOT ALDERSON</p>
                                    </div>
                                </div>
                                {/* Title */}
                                <h1 className="text-lg mt-2">One of the best steam games in 2025</h1>
                                {/* Subtitle or Description */}
                                <p className="line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                                {/* Read more button */}
                                <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                    <p>Read more</p>
                                </div>
                            </div>
                        </div>
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none">
                            <img src={Thumbnail} alt="" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                {/* Published date and author */}
                                <div className="flex flex-row text-xs gap-2">
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faCalendar} />
                                        <p>28th May 2025</p>
                                    </div>
                                    <span>|</span>
                                    <div className="flex flex-row gap-2 items-center">
                                        <FontAwesomeIcon icon={faUser} />
                                        <p>ELLIOT ALDERSON</p>
                                    </div>
                                </div>
                                {/* Title */}
                                <h1 className="text-lg mt-2">One of the best steam games in 2025</h1>
                                {/* Subtitle or Description */}
                                <p className="line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                                {/* Read more button */}
                                <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                    <FontAwesomeIcon icon={faAnglesRight} />
                                    <p>Read more</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Paginations */}
                    <div className="flex flex-row items-center justify-between text-white mb-4">
                        <button>Prev</button>
                        <ul className="flex flex-row items-center gap-1">
                            <li role="button" className="border-1 py-1 px-2 bg-white border-emerald-950 text-emerald-950 ">1</li>
                            <li role="button" className="border-1 py-1 px-2">2</li>
                            <li role="button" className="border-1 py-1 px-2">...</li>
                            <li role="button" className="border-1 py-1 px-2">15</li>
                        </ul>
                        <button>Next</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    );
};

export default Home;