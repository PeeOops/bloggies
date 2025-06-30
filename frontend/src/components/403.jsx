import { Link } from "react-router-dom";

const Unauthorized = () => {
    return(
        <>
            <main className="grid h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                <p className="text-base font-semibold text-emerald-950">403</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                    Unauthorized
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    You are not allowed to access this page.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                    to="/"
                    className="rounded-md bg-emerald-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-white hover:border-emerald-950 hover:border-2 hover:text-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950"
                    >
                    Go back home
                    </Link>
                </div>
                </div>
            </main>
        </>
    )
}

export default Unauthorized;