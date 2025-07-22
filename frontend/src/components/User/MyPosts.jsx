import { useEffect, useState } from "react";
import api from "../../axios";


const MyPosts = ({userData}) => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get("/post/index");
                setPosts(response.data.posts.filter((post) => post.author_id === userData.id));
            } catch (error) {
                
            } finally {

            }
        }

        fetchPosts();

    },[userData])


    return(
        <>
            <div className="flex flex-col gap-5">
                {   
                    posts.length > 0 ?
                    posts.map((post) => (
                        <div key={post.id} className="flex flex-col md:flex-row gap-2 border-2 border-emerald-950 p-2 md:max-h-36">
                            <img src={post.featured_image_url !== null ? `http://localhost:8000/storage/${post.featured_image_url}` : `http://localhost:8000/storage/featured_images/noimage.jpg`} alt={post.title} className="md:w-96 h-auto" />
                            <div className="flex flex-col justify-between text-emerald-950">
                                <h1 className="text-xl md:text-2xl line-clamp-2">{post.title}</h1>
                                <h2 className="text-sm md:text-base text-gray-400 line-clamp-1">{post.subtitle}</h2>
                                <button className="bg-emerald-950 text-white border-2 border-emerald-950 hover:bg-white hover:text-emerald-950 mt-2 cursor-pointer">Edit</button>
                            </div>
                        </div>
                    )) :
                    <div className="flex justify-center items-center min-h-64">
                        <p className="md:text-xl text-center m-auto">Looks like you haven't added any posts yet. Go create your first one!</p>
                    </div>
                }

                
                
            </div>
        </>
    )
}

export default MyPosts;