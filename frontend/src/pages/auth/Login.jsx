import { Link, useNavigate } from "react-router-dom";
import TopBackground from "../../assets/images/background.jpg"
import { useState } from "react";
import api from "../../axios.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import LoadingBar from "../../components/Utils/LoadingBar.jsx";

const Login = () => {

    // Navigation
    const navigate = useNavigate();

    // Status messages
    const [statusMessages, setStatusMessages] = useState([]);

    // Loading bar logic
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const simulateProgress = () => {
        setProgress(10);

        const interval = setInterval(() => {
            setProgress(prev => {
                if(prev < 90){
                    return prev + Math.random() * 10;
                }
                clearInterval(interval);
                return prev;
            })
        },100)
        return interval;
    }

    // Input Form
    const [form, setForm] = useState({
        username : "",
        password : ""
    })

    const [showPassword, setShowPassword] = useState(false);

    // Handle change logic
    const handleChangeShowPassword = () => {
        setShowPassword(prev => !prev);
    }

    const handleChangeForm = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    // Submit Login Form
    const handleSubmitForm = (e) => {
        e.preventDefault();

        setLoading(true);
        setProgress(0);

        const progressInterval = simulateProgress();

        api.post("/login", form)
        .then((res) => {
            localStorage.setItem("token", res.data.token);

            api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
            setStatusMessages([]);  
            setStatusMessages(prev => [...prev, "Signed in successfully"]);

            setTimeout(() => {
                navigate("/");
            },1500)
            
        })
        .catch((error) => {
            const errorMessages = Object.values(error.response.data.errors).flat();        

            if(error.response.status === 422){
                setStatusMessages(errorMessages);
            }
        })
        .finally(() => {
            clearInterval(progressInterval);
            setProgress(100);
            setTimeout(() => {
                setLoading(false);
                setProgress(0);
            }, 500);
        })
    }

    return(
        <>
            <LoadingBar loading={loading} progress={progress} />
            <div className="flex flex-col md:flex-row md:h-screen">
                <div className="flex flex-col justify-between  md:justify-evenly w-full md:w-1/2 h-64 md:h-full rounded-bl-4xl rounded-br-4xl md:rounded-bl-none md:rounded-br-4xl md:rounded-tr-4xl p-8 text-white" style={{ backgroundImage: `url(${TopBackground})` }}>
                    <Link to="/" className="text-xl md:text-3xl">Bloggies</Link>
                    <p className="md:text-2xl">Discover the latest in gaming news and articles.</p>
                </div>
                <div className="flex flex-col md:w-1/2 md:justify-center md:items-center py-8 px-12 gap-2 md:gap-4">
                    <h1 className="text-xl md:text-2xl">Sign In</h1>
                    <div className="flex flex-col  gap-2 md:gap-1">
                        {
                            statusMessages.includes("Signed in successfully") ?
                            <div className="flex flex-row items-center gap-2 text-sm text-green-600">
                                <FontAwesomeIcon icon={faCircleCheck} />
                                <p>{statusMessages}</p>
                            </div> : statusMessages !== "" ? statusMessages.map((item, index) => (
                                <div key={index} className="flex flex-row items-center gap-2 text-sm text-red-600">
                                    <FontAwesomeIcon icon={faWarning} />
                                    <p>{item}</p>
                                </div> 
                            )) : ""
                        }
                    </div>
                    <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 md:gap-6 md:text-base">
                        <div className="flex flex-col">
                            <label>Username</label>
                            <input name="username" value={form.username} type="text" placeholder="username" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} onChange={handleChangeForm} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input name="password" value={form.password} type={showPassword ? "text" : "password"} placeholder="password" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} onChange={handleChangeForm} required />
                            <div className="mt-2 flex flex-row gap-2 items-center">
                                <input type="checkbox" onChange={() => handleChangeShowPassword()} checked={showPassword ? true : false} />
                                <p className="text-sm">Show password</p>
                            </div>
                        
                        </div>
                        <p role="button" className="text-xs text-right text-red-600">Forgot Password?</p>
                        <button disabled={loading} className="bg-emerald-950 text-white p-2 rounded-md active:bg-white active:text-emerald-950 active:border-emerald-950 active:border-2 hover:bg-white hover:text-emerald-950 hover:border-emerald-950 hover:border-2 cursor-pointer">Sign In</button>
                        <p className="text-xs text-center">Don't have an account? <Link to="/register" className="text-gray-400 cursor-pointer" role="button">Sign Up</Link></p>
                    </form>
                </div>

            </div>
        </>

        
    )
}

export default Login;