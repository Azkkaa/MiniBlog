

function ErrorPage({code = 404, message = "Page Not Found"}) {
    return (
        <div className="flex items-center justify-center h-screen gap-2 bg-red-100 text-red-700 font-semibold text-lg flex-col md:flex-row md:text-2xl md:text-left md:px-0 text-center px-10">
            <h1>{code}</h1>
            <span className="w-[3px] h-7 bg-red-700 rounded-full hidden md:block"></span>
            <h1>{message}</h1>
        </div>
    );
}

export default ErrorPage;