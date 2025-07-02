import { useState } from "react";
import api from "../../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faWarning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Profile = ({userData, setUserData}) => {

    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");
    const [form,setForm] = useState({
        username : userData.username,
        email : userData.email,
        bio : userData.bio,
    })

    const handleClickEdit = () => {
        setEditing(prev => !prev);
        setForm({
            username: userData.username,
            email: userData.email,
            bio: userData.bio,
        });
    }

    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if(form.username === "" || form.email === "" || form.bio === ""){
            setMessage("You need to fill all input fields");
        }

        setMessage("");

        api.put("/update", form)
        .then((res) => {
            setMessage("Profile updated successfully!");
            setUserData(res.data.user);
            setEditing(false);
            navigate(`/user/${form.username}`);
        })
        .catch((error) => {
            const errorMessages = Object.values(error.response.data.errors).flat();        

            if(error.response.status === 422){
                setMessage(errorMessages);
            }

        })

    }

    return (
        <form onSubmit={handleSubmitForm} className="flex flex-col gap-4">
            {
                message === "Profile updated successfully!" ?
                <div className="flex flex-row items-center gap-2 text-sm text-green-600">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <p>Profile updated successfully!</p>
                </div> : message !== "" ? 
                <div className="flex flex-row items-center gap-2 text-sm text-red-600">
                    <FontAwesomeIcon icon={faWarning} />
                    <p>{message}</p>
                </div> : ""
            }
            
            <div>
                <p>Username</p>
                <input name="username" type="text" className="text-gray-600 border-2 border-black p-1" onChange={handleChangeForm} value={form.username} disabled={!editing} required />
            </div>
            <div>
                <p>Email</p>
                <input name="email" type="email" className="text-gray-600 border-2 border-black p-1" onChange={handleChangeForm} value={form.email} disabled={!editing} required />
            </div>
            <div>
                <p>Bio</p>
                <input name="bio" type="text" className="text-gray-600 border-2 border-black p-1" onChange={handleChangeForm} value={form.bio} disabled={!editing} required />
            </div>
            <div className="flex flex-row gap-2">
                <button type="button" onClick={() => handleClickEdit()} className={`${editing ? "hidden" : ""} bg-emerald-950 text-white text-sm rounded-sm cursor-pointer py-1 px-2`}>Edit</button>
                <button type="submit" className={`${editing ? "" : "hidden"} bg-emerald-950 text-white text-sm rounded-sm cursor-pointer py-1 px-2`}>Save</button>
                <button type="button" onClick={() => handleClickEdit()} className={`${editing ? "" : "hidden"} bg-red-600 text-white text-sm rounded-sm cursor-pointer py-1 px-2`}>Cancel</button>
            </div>
        </form>
    )
}

export default Profile;