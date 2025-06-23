import Navigation from "../components/Navigation"
import TopBackground from "../assets/images/background.jpg"
import Footer from "../components/Footer";

const Profile = () => {
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

            </div>

            {/* Main */}
        </>
    )
}

export default Profile;