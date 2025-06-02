import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBackground from "../assets/images/background.jpg"
import Thumbnail from "../assets/images/thumbnails/mirage.png"
import Navigation from "../components/Navigation";
import { faAnglesRight, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

const News = () => {
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
            {/* Recent News */}
            <div className="flex flex-col gap-4 bg-emerald-950 py-8 px-4 md:px-12">
                <h1 className="text-xl md:text-3xl text-white">Recent News</h1>
                <div className="flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-4">
                    {/* Newest */}
                    <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                        <img src={Thumbnail} alt="" className="w-full h-48 md:h-96 object-cover" />
                        <div className="p-4 md:p-6">
                            {/* Published date and author */}
                            <div className="flex flex-row text-xs md:text-md gap-2">
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
                            <h1 className="text-lg md:text-2xl line-clamp-2 mt-2">One of the best steam games in 2025</h1>
                            {/* Subtitle or Description */}
                            <p className="line-clamp-5 text-xs md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                            {/* Read more button */}
                            <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <p className="text-sm md:text-md">Read more</p>
                            </div>
                        </div>
                    </div>
                    {/* 2nd to 4th Recent News */}
                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                        <img src={Thumbnail} alt="" className="w-full h-24 md:h-36 object-cover" />
                        <div className="p-4 md:p-6">
                            {/* Published date and author */}
                            <div className="hidden md:flex flex-row text-xs gap-2">
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
                            <h1 className="text-sm md:text-lg line-clamp-2 md:mt-2">One of the best steam games in 2025</h1>
                            {/* Subtitle or Description */}
                            <p className="hidden md:line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                            {/* Read more button */}
                            <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <p>Read more</p>
                            </div>
                        </div>
                        </div>
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                        <img src={Thumbnail} alt="" className="w-full h-24 md:h-36 object-cover" />
                        <div className="p-4 md:p-6">
                            {/* Published date and author */}
                            <div className="hidden md:flex flex-row text-xs gap-2">
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
                            <h1 className="text-sm md:text-lg line-clamp-2 md:mt-2">One of the best steam games in 2025</h1>
                            {/* Subtitle or Description */}
                            <p className="hidden md:line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                            {/* Read more button */}
                            <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <p>Read more</p>
                            </div>
                        </div>
                        </div>
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                        <img src={Thumbnail} alt="" className="w-full h-24 md:h-36 object-cover" />
                        <div className="p-4 md:p-6">
                            {/* Published date and author */}
                            <div className="hidden md:flex flex-row text-xs gap-2">
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
                            <h1 className="text-sm md:text-lg line-clamp-2 md:mt-2">One of the best steam games in 2025</h1>
                            {/* Subtitle or Description */}
                            <p className="hidden md:line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                            {/* Read more button */}
                            <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <p>Read more</p>
                            </div>
                        </div>
                        </div>
                        <div role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none text-white">
                        <img src={Thumbnail} alt="" className="w-full h-24 md:h-36 object-cover" />
                        <div className="p-4 md:p-6">
                            {/* Published date and author */}
                            <div className="hidden md:flex flex-row text-xs gap-2">
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
                            <h1 className="text-sm md:text-lg line-clamp-2 md:mt-2">One of the best steam games in 2025</h1>
                            {/* Subtitle or Description */}
                            <p className="hidden md:line-clamp-3 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, excepturi ratione animi error ducimus atque laborum fugiat iusto sequi blanditiis, illo temporibus aut consequuntur nulla earum, laudantium perferendis inventore placeat.</p>
                            {/* Read more button */}
                            <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <p>Read more</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popular News */}
            {/* Top Rated News */}
            {/* Footer */}
            <Footer />
        </>
    )
}

export default News;