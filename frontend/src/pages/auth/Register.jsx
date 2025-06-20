import { Link, useNavigate } from "react-router-dom";
import TopBackground from "../../assets/images/background.jpg"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faWarning } from "@fortawesome/free-solid-svg-icons";
import api from "../../axios.js";

const Register = () => {
    // Navigation
    const navigate = useNavigate();

    // Input Form
    const [form,setForm] = useState({
        username: "",
        email: "",
        password: ""
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    // Messages
    const [registeredMessage, setRegisteredMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");

    // Handle change
    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }


    useEffect(() => {
        // Check match password
        const handleChangeMatchPassword = () => {
            if(confirmPassword && form.password !== confirmPassword){
                setPasswordMessage("Passwords do not match!");
            }else{
                setPasswordMessage("");
            }
        }

        handleChangeMatchPassword();
    },[form.password, confirmPassword])


    // Form submit
    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (form.password !== confirmPassword) {
            setPasswordMessage("Passwords do not match!");
            return;
        }

        setPasswordMessage("");

        // Register API
        api.post("/register", form)
        .then((res) => {
            setRegisteredMessage("Registration complete! Please log in to continue.");

            setTimeout(() => {
                navigate("/login");
            },1500);
        })
        .catch((error) => {
            setRegisteredMessage("Registration failed, please check your data");
        })
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
                    {/* Error message */}
                    {
                        passwordMessage === "Passwords do not match!" ?
                        <div className="flex flex-row items-center gap-2 text-sm text-red-600">
                            <FontAwesomeIcon icon={faWarning} />
                            <p>{passwordMessage}</p>
                        </div> : ""
                    }
                    {
                        registeredMessage === "Registration complete! Please log in to continue." ?
                        <div className="flex flex-row items-center gap-2 text-sm text-green-600">
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <p>{registeredMessage}</p>
                        </div> : registeredMessage === "Registration failed, please check your data" ? <div className="flex flex-row items-center gap-2 text-sm text-red-600">
                            <FontAwesomeIcon icon={faWarning} />
                            <p>{registeredMessage}</p>
                        </div> : ""
                    }
                    <form onSubmit={handleSubmitForm} className="flex flex-col gap-4 md:gap-6 md:text-lg">
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input name="email" type="email" placeholder="email" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} onChange={handleChangeForm} value={form.email} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Username</label>
                            <input name="username" type="text" placeholder="username" className="bg-transparent text-emerald-950 p-2 border-2 border-emerald-950 rounded-md focus:outline-none focus:border-b-2 focus:border-b-emerald-950" onPaste={(e) => e.preventDefault()} onChange={handleChangeForm} value={form.username} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="password" className={`bg-transparent text-emerald-950 p-2 border-2 rounded-md focus:outline-none focus:border-b-2 ${
                            passwordMessage ? 'border-red-400 focus:border-b-red-400' : 'border-emerald-950 focus:border-b-emerald-950'
                            }`} onPaste={(e) => e.preventDefault()} onChange={handleChangeForm} value={form.password} required />
                        </div>
                        <div className="flex flex-col">
                            <label>Confirm Password</label>
                            <input type="password" placeholder="confirm password" className={`bg-transparent text-emerald-950 p-2 border-2 rounded-md focus:outline-none focus:border-b-2 ${
                            passwordMessage ? 'border-red-400 focus:border-b-red-400' : 'border-emerald-950 focus:border-b-emerald-950'
                            }`} onPaste={(e) => e.preventDefault()} onChange={handleChangeConfirmPassword}  required />
                        </div>
                        <button className="bg-emerald-950 text-white p-2 rounded-md active:bg-white active:text-emerald-950 active:border-emerald-950 active:border-2 hover:bg-white hover:text-emerald-950 hover:border-emerald-950 hover:border-2 cursor-pointer">Register</button>
                        <p className="text-xs text-center">Already have an account? <Link to="/login" className="text-gray-400 cursor-pointer" role="button">Sign In</Link></p>
                    </form>
                </div>
    
            </div>
        </>
    )
}

export default Register;