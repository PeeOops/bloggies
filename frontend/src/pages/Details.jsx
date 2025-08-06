import Navigation from "../components/Navigation";
import TopBackground from "../assets/images/background.jpg";
import ReactMarkdown from 'react-markdown';
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken, faShare} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faReddit, faTiktok, faTwitch, faTwitter, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios";
import LoadingBar from "../components/Utils/LoadingBar";
import ModalMessage from "../components/Utils/ModalMessage";

const Details = () => {

    // State declarations
    const { id } = useParams();
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);
    const [postTags, setPostTags] = useState([]);
    const [readingTime, setReadingTime] = useState(0);
    const [similarPosts, setSimilarPosts] = useState([]);
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState("");
    const [message, setMessage] = useState("");
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

    // Reading time
    const stripMarkdown = (markdown) => {
        return markdown
        .replace(/!\[.*?\]\(.*?\)/g, '')
        .replace(/\[.*?\]\(.*?\)/g, '') 
        .replace(/[`*_>#\-~]/g, '')     
        .replace(/\n+/g, ' ')           
        .trim();
    }

    // Like post
    const handleClickLike = () => {
        if(!localStorage.getItem("token")){
            setMessage("You need to be logged in to perform this action.");
            return;
        }

        api.post(`/post/${id}/like`)
        .then((res) => {
            setLiked(res.data.liked);
            setLikesCount(res.data.likes_count)
        })
    }

    // S    
    const handleClickShare = () => {
        navigator.clipboard.writeText(window.location.href)
        .then(() => {
            setMessage("Link copied to clipboard!");
        })
        .catch((error) => {
            console.log("Failed to copy link", error)
        })
    }

    // Scroll to top when visiting page
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    // Fetch post
    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);
            setProgress(0);
            const progressInterval = simulateProgress();

            try {
                // API Fetch
                const [postDataAPI, allPostAPI, likeStatusAPI] = await Promise.all([
                    api.get(`/post/${id}`),
                    api.get("/post/index"),
                    api.get(`/post/${id}/like`)
                ])
                setPostData(postDataAPI.data.post);
                setPostTags(postDataAPI.data.post.tags);
                setLiked(likeStatusAPI.data.liked);
                setLikesCount(likeStatusAPI.data.likes_count);

                const currentPostTags = postDataAPI.data.post.tags.map((tag) => tag.id);

                // Similar posts
                const similar = allPostAPI.data.posts.filter(post =>
                    post.id !== parseInt(id) && post.tags.some(tag => currentPostTags.includes(tag.id))
                );

                setSimilarPosts(similar);

                // Reading time
                const plainText = stripMarkdown(postDataAPI.data.post.body);
                const wordsLength = plainText.trim().split(/\s+/).length;
                const readingPerMin = 200;
                setReadingTime(Math.ceil(wordsLength/readingPerMin));
                                
            } catch (error) {
                if(error.status === 404){
                    navigate("/404");
                }else{
                    console.log("Failed fetching data", error);
                }
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

    },[id])

    return(
        <>
            {/* Loading bar */}
            <LoadingBar loading={loading} progress={progress} />

            {/* Modal */}
            {
                message && 
                <ModalMessage message={message} setMessage={setMessage} />
            }

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
                    <div className="flex flex-row gap-4 items-center text-xs md:text-sm text-gray-400">
                        <p>{postData.created_at}</p>
                        <span>-</span>
                        <p>{readingTime === 1 ? `${readingTime} min read` : `${readingTime} mins read`}</p>
                        <span>-</span>
                        <div className="flex flex-row gap-1 items-center">
                            <p>{likesCount > 0 ? likesCount : ""}</p>
                            <FontAwesomeIcon onClick={handleClickLike} className={`cursor-pointer ${liked ? "text-red-400" : "text-white"}`} icon={liked ? faHeart : faHeartBroken} />
                        </div>
                        <FontAwesomeIcon onClick={handleClickShare} className="cursor-pointer text-white" icon={faShare} />
                    </div>
                    {/* Featured image */}
                    {
                        postData.featured_image_url !== null &&
                        <img src={`http://localhost:8000/storage/${postData.featured_image_url}`} alt={postData.title} className="w-full" />
                    }
                    {/* Sub title */}
                    <h3 className="italic text-gray-400 text-base md:text-lg">{postData.subtitle}</h3>
                    {/* Post */}
                    <ReactMarkdown>{postData.body}</ReactMarkdown>
                    {/* Tags */}
                    <div className="flex flex-col gap-4">
                        <p className="border-l-3 border-white pl-2 md:text-lg">Tags</p>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {
                                    postTags.length > 0 ?
                                    postTags.map((tag) => (
                                        <span key={tag.id} className="bg-white text-emerald-950 p-2 rounded-sm">{tag.name}</span>
                                    )) :
                                    <span>-</span>
                                    
                            }
                            
                        </div>
                    </div>
                    {/* Social medias */}
                    <div className="flex flex-col gap-4">
                        <p className="border-l-3 border-white pl-2 md:text-lg">Follow Us</p>
                        <div className="flex flex-wrap gap-4 text-lg">
                            {
                                socialMedia.map((icon,index) => (
                                    <a key={index} href={icon.link}target="_blank"><FontAwesomeIcon role="button" className="cursor-pointer" icon={icon.icon} /></a>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Right panel */}
                <div className="flex flex-col gap-4">
                    {/* Similar posts */}
                    {
                        similarPosts.length > 0 &&
                        <p className="border-l-3 border-white pl-2 md:text-lg">Similar posts</p>
                    }
                    
                    <ol className="flex flex-col gap-4 list-decimal pl-4 text-base">
                        {
                            similarPosts.length > 0 &&
                            similarPosts.slice(0,5).map((post) => (
                                <Link key={post.id} to={`/post/${post.id}`} className="line-clamps-3 border-b-1 last:border-b-0 border-gray-400 pb-4"><li  role="button" >{post.title}</li></Link>
                            ))
                        }
                    </ol>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
        
    )
}

export default Details;