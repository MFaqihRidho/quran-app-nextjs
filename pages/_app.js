import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="flex items-center justify-center font-poppins ">
                <div className="max-w-[800px] w-full container mx-auto px-5 relative min-w-[300px] text-black dark:text-white dark:bg-bg_dark bg-white">
                    <Component {...pageProps} />
                </div>
            </div>
        </>
    );
}

export default MyApp;
