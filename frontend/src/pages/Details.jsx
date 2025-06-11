import Navigation from "../components/Navigation";
import TopBackground from "../assets/images/background.jpg";
import Thumbnail from "../assets/images/thumbnails/mirage.png";
import Footer from "../components/Footer";

const Details = () => {
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
            <div className="grid grid-cols-[3fr-1fr] bg-emerald-950 text-white h-full px-4 md:px-48 py-4 md:py-8">
                {/* Left panel */}
                <div className="flex flex-col gap-4">
                    {/* News or Blogs */}
                    <p className="text-sm md:text-md text-gray-400">News</p>
                    {/* Title */}
                    <h1 className="text-2xl md:text-4xl">One of the best steam games in 2025</h1>
                    {/* Date and Average reading time */}
                    <div className="flex flex-row gap-4 text-xs text-gray-400">
                        <p>2 Oct, 2018</p>
                        <span>-</span>
                        <p>4 mins read</p>
                    </div>
                    <img src={Thumbnail} alt="" className="w-full" />
                </div>

                {/* Right panel */}
                <div>

                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
        
    )
}

export default Details;