import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBackground from "../assets/images/background.jpg"
import Navigation from "../components/Navigation";
import { faAnglesRight, faArrowLeft, faArrowRight, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import api from "../axios.js";
import LoadingBar from "../components/Utils/LoadingBar.jsx";
import { useSearchParams } from "react-router-dom";

const Home = () => {

    // State declarations
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const [latestPosts, setLatestPosts] = useState([]);

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


    // Pagination
    const [searchParams, setSearchParams] = useSearchParams();
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const currentPage = parseInt(searchParams.get("page")) || 1;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const handleClickNextPage = () => {
        const maxPage = Math.ceil(latestPosts.length / itemsPerPage);

        if(currentPage < maxPage){
            if(filteredCategories){
                setSearchParams({
                    category_id: filteredCategories,
                    page: currentPage + 1
                })
            }else{
                setSearchParams({page: currentPage + 1});
            }
            
        }
    }

    const handleClickPrevPage = () => {
        if(currentPage > 1){
            if(filteredCategories){
                setSearchParams({
                    category_id: filteredCategories,
                    page: currentPage - 1
                })
            }else{
                setSearchParams({page: currentPage - 1});
            }
            
        }
    }

    // Search filter
    const [searchValue, setSearchValue] = useState("");
    const filteredSearch = searchParams.get("search") || "";

    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const handleClickFilterSearch = () => {
        const search = searchValue.toLowerCase();

        setSearchParams({
            search : search,
        })
        setInputValue("");
    }

    const handleClickEnter = (e) => {
        if(e.key === "Enter"){
            handleClickFilterSearch();
        }
    }


    // Category filter
    const filteredCategories = searchParams.get("category_id") || "";
    const handleClickFilterCategory = (id) => {
        setSearchParams({
            category_id: id,
        })
    }

    // Tag filters
    

    useEffect(() => {
        // Fetch data
        const fetchData = async () => {
            setLoading(true);
            setProgress(0);

            const progressInterval = simulateProgress();

            try {
                const [categoriesAPI, tagsAPI, latestPostsAPI, filteredPostsAPI] = await Promise.all([
                    api.get("/categories"),
                    api.get("/tags"),
                    api.get("/post/index"),
                    filteredCategories ? api.get(`/post/index?category_id=${filteredCategories}`) : filteredSearch ? api.get(`/post/index?search=${filteredSearch}`) : Promise.resolve(null)
                ])
                setCategories(categoriesAPI.data);
                setTags(tagsAPI.data);
                setAllPosts(latestPostsAPI.data.posts);
                if(filteredCategories || filteredSearch){
                    setLatestPosts(filteredPostsAPI.data.posts);
                }else{
                    setLatestPosts(latestPostsAPI.data.posts);
                }
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
    },[filteredCategories, filteredSearch])

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
                        <input value={searchValue} type="text" placeholder="Search" className="text-white focus:outline-none" onKeyDown={handleClickEnter} onChange={handleChangeSearch} />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col gap-4 p-2 bg-emerald-950 border-1 border-white shadow-white shadow-md">
                        <h1 className="border-b-2">Categories</h1>
                        <div className="flex flex-col gap-2 text-sm">
                            {
                                categories.map((category) => (
                                    <div key={category.id} onClick={() => handleClickFilterCategory(category.id)} role="button" className="flex flex-row justify-between p-1 rounded-sm hover:bg-white hover:text-emerald-950 active:bg-white active:text-emerald-950 cursor-pointer">
                                        <p>{category.name}</p>
                                        <p>{allPosts.filter((post) => post.category_id === category.id).length}</p>
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
                        {
                            latestPosts.length !== 0 ? 
                            latestPosts.slice(firstIndex,lastIndex).map((post) => (
                                <div key={post.id} role="button" className="flex flex-col bg-emerald-950 border-1 border-white shadow-white shadow-md cursor-pointer transition transform duration-150 active:scale-90 hover:scale-105 focus:outline-none">
                                    <img src={`http://localhost:8000/storage/${post.featured_image_url}`} alt={post.title} className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        {/* Published date and author */}
                                        <div className="flex flex-row text-xs gap-2">
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
                                        <h1 className="text-lg mt-2 line-clamp-2">{post.title}</h1>
                                        {/* Subtitle or Description */}
                                        <p className="line-clamp-3 text-xs">{post.subtitle}</p>
                                        {/* Read more button */}
                                        <div className="flex flex-row gap-2 items-center text-xs mt-2">
                                            <FontAwesomeIcon icon={faAnglesRight} />
                                            <p>Read more</p>
                                        </div>
                                    </div>
                                </div> 
                            )) : 
                            <div className="flex justify-center items-center">
                                <p>Nothing to show just yet — check back soon!</p>
                            </div>
                        }
                    </div>
                    {/* Paginations */}
                    <div className="flex flex-row items-center justify-between text-white mb-4">
                        <div role="button" className={`flex flex-row items-center gap-2 cursor-pointer ${currentPage === 1 || latestPosts.length === 0 ? "invisible" : "visible"} `} onClick={() => handleClickPrevPage()}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <p>Prev</p>
                        </div>
                        <div role="button" className={`flex flex-row items-center gap-2 cursor-pointer ${currentPage === Math.ceil(latestPosts.length / itemsPerPage) || latestPosts.length === 0 ? "invisible" : "visible"} `} onClick={() => handleClickNextPage()}>
                            <p>Next</p>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        
    );
};

export default Home;