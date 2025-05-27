import TopBackground from "../assets/images/background.jpg"
import Navigation from "../components/Navigation";

const Home = () => {
    return (
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

                {/* Hero Section */}
                <section className="relative z-10 text-center text-white py-32">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to Bloggies</h1>
                <p className="text-md md:text-lg">Discover the latest in gaming news and articles.</p>
                </section>
            </div>
            <div className="flex flex-row bg-emerald-950 border-t-2 border-white px-4 md:px-24 pt-8 md:pb-16 md:pt-16">
                {/* Left main */}
                <div className="flex flex-col gap-6 text-white w-1/3">
                    {/* Search */}
                    <div className="p-2 bg-emerald-950 border-1 border-white shadow-white shadow-md">
                        <input type="text" placeholder="Search" className="text-white focus:outline-none" />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col gap-4 p-2 bg-emerald-950 border-1 border-white shadow-white shadow-md">
                        <h1 className="border-b-2">Categories</h1>
                        <div className="flex flex-col gap-2 text-sm">
                            <div className="flex flex-row justify-between">
                                <p>Game Releases & Updates</p>
                                <p>20</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Reviews and Critiques</p>
                                <p>20</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>eSports & Competition</p>
                                <p>20</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Guides & Tips</p>
                                <p>20</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p>Hardware & Accessories</p>
                                <p>20</p>
                            </div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col gap-4 p-2 bg-emerald-950 border-1 border-white shadow-white shadow-md">
                        <h1 className="border-b-2">Tags</h1>
                        <div className="flex flex-wrap gap-2 text-sm">
                            <span className="p-2 bg-gray-600 rounded-sm">Action</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Adventure</span>
                            <span className="p-2 bg-gray-600 rounded-sm">RPG</span>
                            <span className="p-2 bg-gray-600 rounded-sm">MMO</span>
                            <span className="p-2 bg-gray-600 rounded-sm">FPS</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Fighting</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Strategy</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Simulation</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Sports</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Racing</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Horror</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Sandbox</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Survival</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Platformer</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Stealth</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Puzzle</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Rhythm</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Battle Royale</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Idle</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Visual Novel</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Card</span>
                            <span className="p-2 bg-gray-600 rounded-sm">MOBA</span>
                            <span className="p-2 bg-gray-600 rounded-sm">VR</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Tactical Shooter</span>
                            <span className="p-2 bg-gray-600 rounded-sm">Interactive</span>
                        </div>
                    </div>
                </div>

                {/* Right main */}
                <div></div>
            </div>
        </>
        
    );
};

export default Home;