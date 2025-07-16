import Navigation from "../components/Navigation";
import TopBackground from "../assets/images/background.jpg";
import ReactMarkdown from 'react-markdown';
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faCalendar, faUser, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faReddit, faTiktok, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import api from "../axios";
import LoadingBar from "../components/Utils/LoadingBar";

const Details = () => {

    // State declarations
    const { id } = useParams();
    const navigate = useNavigate();
    const [postData, setPostData] = useState([]);
    const [postTags, setPostTags] = useState([]);
    const [readingTime, setReadingTime] = useState(0);3
    const [similarPosts, setSimilarPosts] = useState([]);

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


    const memoizedSimilarPosts = useMemo(() => similarPosts, [similarPosts]);

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
                const [postDataAPI, allPostAPI] = await Promise.all([
                    api.get(`/post/${id}`),
                    api.get("/post/index")
                ])
                // Id params check
                const checkedId = allPostAPI.data.posts.map((post) => post.id);
                if(!checkedId.includes(parseInt(id))){
                    navigate("/404");
                }else{
                    setPostData(postDataAPI.data.post);
                    setPostTags(postDataAPI.data.post.tags);
                }

                const currentPostTags = postDataAPI.data.post.tags.map((tag) => tag.id);

                // aaa
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
                console.log("Failed fetching data", error);
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
                        <p>{readingTime === 1 ? `${readingTime} min read` : `${readingTime} mins read`}</p>
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
                    {
                        similarPosts.length > 0 ?
                        <p className="border-l-3 border-white pl-2 md:text-lg">Similar posts</p> :
                        ""
                    }
                    
                    <ol className="flex flex-col gap-4 list-decimal pl-4 text-base">
                        {
                            similarPosts.length > 0 ?
                            similarPosts.slice(0,5).map((post) => (
                                <Link to={`/post/${post.id}`} className="line-clamps-3 border-b-1 last:border-b-0 border-gray-400 pb-4"><li key={post.id} role="button" >{post.title}</li></Link>
                            )) : ""
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