const Navigation = () => {
    return(
        <div className="flex flex-col md:flex-row md:justify-between md:border-b-4 md:border-white gap-4 text-white mx-4 md:mx-24">
            <h1 className="text-xl md:text-md text-center md:text-left my-4">Bloggies</h1>
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-green-900 md:bg-transparent text-white p-2 border-white border-1 md:border-0 rounded-md shadow-white shadow-md md:rounded-none md:shadow-none ">
                <li role="button" className="cursor-pointer">Home</li>
                <span className="border-1 w-full md:border-0"></span>
                <li role="button" className="cursor-pointer">News</li>
                <span className="border-1 w-full md:border-0"></span>
                <li role="button" className="cursor-pointer">Blogs</li>
                <span className="border-1 w-full md:border-0"></span>
                <li role="button" className="cursor-pointer pb-2 md:pb-0">Contact</li>
                
            </ul>
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-green-900 md:bg-transparent text-white p-2 border-white border-1 md:border-0 rounded-md shadow-white shadow-md md:rounded-none md:shadow-none">
                <li role="button" className="cursor-pointer">Login</li>
                <span className="border-1 w-full md:border-0"></span>
                <li role="button" className="cursor-pointer pb-2 md:pb-0">Register</li>
            </ul>
        </div>
    )
}

export default Navigation;