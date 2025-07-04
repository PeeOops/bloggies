const LoadingBar = ({loading, progress}) => {
    return(
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
            <div className="h-full bg-blue-400 transition-all duration-300" style={{
                width: loading ? `${progress}%` : '0%',
                opacity: loading ? 1 : 0,
            }}>
                
            </div>
        </div>
    )
}

export default LoadingBar;