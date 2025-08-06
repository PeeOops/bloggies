import { useEffect, useState } from "react";
import api from "../../axios";
import { Link, useSearchParams } from "react-router-dom";

const LikedPost = ({setLoading, setProgress}) => {

    // State declarations
    const [likedPosts, setLikedPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Paginations
    const currentPage = parseInt(searchParams.get("page")) || 1;
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;

    const handleClickNext = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("page", currentPage + 1);
        setSearchParams(newSearchParams);
    }

    const handleClickPrevious = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("page", currentPage - 1);
        setSearchParams(newSearchParams);
    }

    // Loading bar
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

    // Fetch API
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setProgress(0);
            const progressInterval = simulateProgress();

            try {
                const response = await api.get("/user/liked-posts");
                setLikedPosts(response.data.posts);
            } catch (error) {
                console.log("Error fetching data", error);
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

    return (
        <>
            {/* Posts */}
            <div className="flex flex-col gap-5">
                {   
                    likedPosts.length > 0 ?
                    likedPosts.slice(firstIndex,lastIndex).map((post) => (
                        <div key={post.id} className="flex flex-col md:flex-row gap-2 border-2 border-emerald-950 p-2 md:max-h-36">
                            <img src={post.featured_image_url !== null ? `http://localhost:8000/storage/${post.featured_image_url}` : `http://localhost:8000/storage/featured_images/noimage.jpg`} alt={post.title} className="w-full md:w-96 h-36 md:h-auto object-cover" />
                            <div className="flex flex-col justify-between w-full text-emerald-950">
                                <h1 className="text-xl md:text-2xl line-clamp-2">{post.title}</h1>
                                <h2 className="text-sm md:text-base text-gray-400 line-clamp-1">{post.subtitle}</h2>
                                <Link to={`/post/${post.id}`} className="bg-emerald-950 text-center text-white border-2 border-emerald-950 hover:bg-white hover:text-emerald-950 mt-2 cursor-pointer">View</Link>
                            </div>
                        </div>
                    )) :
                    <div className="flex justify-center items-center min-h-64">
                        <p className="md:text-xl text-center m-auto">Looks like you don't have any liked posts yet.</p>
                    </div>
                }

                {/* Pagination buttons */}
                <div className="flex flex-row justify-between">
                    <p className={`cursor-pointer ${currentPage === 1 || likedPosts.length === 0 ? "invisible" : "visible"}`} onClick={handleClickPrevious} >Prev</p>
                    <p className={`cursor-pointer ${currentPage === Math.ceil(likedPosts.length / itemsPerPage) || likedPosts.length === 0 ? "invisible" : "visible"}`} onClick={handleClickNext}>Next</p>
                </div>
                
                
            </div>
        </>
    )
}

export default LikedPost;