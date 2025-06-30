import { useState } from "react";

const Profile = () => {

    const [editing, setEditing] = useState(false);
    const [form,setForm] = useState({
        username : "",
        email : "",
        bio : "",
    })

    const handleClickEdit = () => {
        setEditing(prev => !prev);
    }

    const handleChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <p>Username</p>
                <input type="text" placeholder="Mintymantis" className="text-gray-600 border-2 border-black p-1" onChange={handleChangeForm} value={form.username} disabled={editing ? false : true} />
            </div>
            <div>
                <p>Email</p>
                <input type="email" placeholder="mintymantis@gmail.com" className="text-gray-600 border-2 border-black p-1" onChange={handleChangeForm} value={form.email} disabled={editing ? false : true} />
            </div>
            <div>
                <p>Bio</p>
                <input type="text" placeholder="Reading" className="text-gray-600 border-2 border-black p-1" onChange={handleChangeForm} value={form.bio} disabled={editing ? false : true} />
            </div>
            <div className="flex flex-row gap-2">
                <button onClick={() => handleClickEdit()} className={`${editing ? "hidden" : ""} bg-emerald-950 text-white text-sm rounded-sm cursor-pointer py-1 px-2`}>Edit</button>
                <button className={`${editing ? "" : "hidden"} bg-emerald-950 text-white text-sm rounded-sm cursor-pointer py-1 px-2`}>Save</button>
                <button onClick={() => handleClickEdit()} className={`${editing ? "" : "hidden"} bg-red-600 text-white text-sm rounded-sm cursor-pointer py-1 px-2`}>Cancel</button>
            </div>
        </div>
    )
}

export default Profile;