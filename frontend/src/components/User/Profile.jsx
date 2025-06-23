const Profile = () => {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <p>Username</p>
                <input type="text" value="Mintymantis" className="text-gray-600 border-2 border-black p-1" disabled="true" />
            </div>
            <div>
                <p>Email</p>
                <input type="text" value="mintymantis@gmail.com" className="text-gray-600 border-2 border-black p-1" disabled="true" />
            </div>
            <div>
                <p>Bio</p>
                <input type="text" value="Reading" className="text-gray-600 border-2 border-black p-1" disabled="true" />
            </div>
        </div>
    )
}

export default Profile;