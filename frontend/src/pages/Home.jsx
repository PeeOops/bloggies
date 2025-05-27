import TopBackground from "../assets/images/background.jpg"
import Navigation from "../components/Navigation";

const Home = () => {
    return (
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
    );
};

export default Home;