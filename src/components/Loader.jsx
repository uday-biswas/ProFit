const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen relative bottom-32">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-300"></div>
        <div className="text-2xl text-white">Loading, please wait....</div>
        </div>
    );
};

export default Loader;