import { Link } from "react-router-dom";
import TopBackground from "../../assets/images/background.jpg"

const Login = () => {
    return(
        <div className="flex flex-col md:flex-row md:h-screen">
            <div className="flex flex-col justify-between  md:justify-evenly w-full md:w-1/2 h-64 md:h-full rounded-bl-4xl rounded-br-4xl md:rounded-bl-none md:rounded-br-4xl md:rounded-tr-4xl p-8 text-white" style={{ backgroundImage: `url(${TopBackground})` }}>
                <Link to="/" className="text-xl md:text-3xl">Bloggies</Link>
                <p className="md:text-2xl">Discover the latest in gaming news and articles.</p>
            </div>
            <div className="flex flex-col md:w-1/2 md:justify-center md:items-center py-8 px-12 gap-2 md:gap-4">
                <h1 className="text-xl md:text-3xl">Sign In</h1>
                <form action="" className="flex flex-col gap-4 md:gap-6 md:text-lg">
                    <div className="flex flex-col">
                        <label>Username</label>
                        <input type="text" placeholder="username" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" required />
                    </div>
                    <div className="flex flex-col">
                        <label>Password</label>
                        <input type="password" placeholder="password" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" required />
                    </div>
                    <p role="button" className="text-xs text-right text-red-600">Forgot Password?</p>
                    <button className="bg-emerald-950 text-white p-2 rounded-md active:bg-white active:text-emerald-950 active:border-emerald-950 active:border-2 hover:bg-white hover:text-emerald-950 hover:border-emerald-950 hover:border-2 cursor-pointer">Sign In</button>
                    <p className="text-xs text-center">Don't have an account? <Link to="/register" className="text-gray-400 cursor-pointer" role="button">Sign Up</Link></p>
                </form>
            </div>

        </div>
    )
}

export default Login;