const LikedPost = () => {
    return (
        <>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-2 border-2 border-emerald-950 p-2 md:max-h-36">
                    <img src="http://localhost:8000/storage/featured_images/oni.png" alt="" className="md:w-96 h-auto" />
                    <div className="flex flex-col text-emerald-950">
                        <h1 className="text-xl md:text-2xl line-clamp-2">One of the best steam games 2025</h1>
                        <h2 className="text-sm md:text-base text-gray-400 line-clamp-1">Life is like a game, you are always lose. </h2>
                        <button className="bg-emerald-950 text-white border-2 border-emerald-950 hover:bg-white hover:text-emerald-950 mt-2 cursor-pointer">View</button>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 border-2 border-emerald-950 p-2 md:max-h-36">
                    <img src="http://localhost:8000/storage/featured_images/oni.png" alt="" className="md:w-96 h-auto" />
                    <div className="flex flex-col text-emerald-950">
                        <h1 className="md:text-2xl line-clamp-2">One of the best steam games 2025</h1>
                        <h2 className="md:text-base text-gray-400 line-clamp-1">Life is like a game, you are always lose. </h2>
                        <button className="bg-emerald-950 text-white border-2 border-emerald-950 hover:bg-white hover:text-emerald-950 cursor-pointer">View</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default LikedPost;