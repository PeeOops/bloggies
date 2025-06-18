import { Link } from "react-router-dom";
import TopBackground from "../../assets/images/background.jpg"
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {

    // Input Form
    const [form,setForm] = useState({
        username: "",
        email: "",
        password: ""
    });
    const confirmPasswordRef = useRef();

    // Error message
    const [error, setError] = useState("");

    // Show password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Handle change
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    // Show password
    const handleClickShowPassword = () => {
        setShowPassword(prev => !prev);
    }

    // Form submit
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(confirmPasswordRef.current.value !== form.password){
            alert("Password doesn't match");
            return;
        }

        try {
            
        } catch (error) {
            
        }
    }

    return(
        <>
            <div className="flex flex-col md:flex-row md:h-screen">
                <div className="flex flex-col justify-between  md:justify-evenly w-full md:w-1/2 h-64 md:h-full rounded-bl-4xl rounded-br-4xl md:rounded-bl-none md:rounded-br-4xl md:rounded-tr-4xl p-8 text-white" style={{ backgroundImage: `url(${TopBackground})` }}>
                    <Link to="/" className="text-xl md:text-3xl">Bloggies</Link>
                    <p className="md:text-2xl">Discover the latest in gaming news and articles.</p>
                </div>
                <div className="flex flex-col md:w-1/2 md:justify-center md:items-center py-8 px-12 gap-2 md:gap-4">
                    <h1 className="text-xl md:text-3xl">Sign Up</h1>
                    <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 md:gap-6 md:text-lg">
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input name="email" type="email" placeholder="email" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} onChange={handleChange} value={form.email} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="username" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} onChange={handleChange} value={form.username} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input name="password" type={!showPassword ? "password" : "text"} placeholder="password" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} onChange={handleChange} value={form.password} required />
                            <FontAwesomeIcon onClick={() => handleClickShowPassword()} className="absolute right-15 bottom-3 md:right-0 md:bottom-0 cursor-pointer" icon={!showPassword ? faEye : faEyeSlash} />
                        </div>
                        <div className="flex flex-col">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="confirm password" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} ref={confirmPasswordRef}  required />
                        </div>
                        <button className="bg-emerald-950 text-white p-2 rounded-md active:bg-white active:text-emerald-950 active:border-emerald-950 active:border-2 hover:bg-white hover:text-emerald-950 hover:border-emerald-950 hover:border-2 cursor-pointer">Sign In</button>
                        <p className="text-xs text-center">Already have an account? <Link to="/login" className="text-gray-400 cursor-pointer" role="button">Sign In</Link></p>
                    </form>
                </div>
    
            </div>
        </>
    )
}

export default Register;