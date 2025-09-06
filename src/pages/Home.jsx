const Home = () => {
    return (
        <section className="bg-[#0F172A] home-section min-h-screen py-7">
            <div className="container mx-auto px-4">
                <div className="py-10 text-center md:text-left">
                    <h1 className="uppercase text-[#E27614] text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl break-words">Victor</h1>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                    <div className="w-full md:w-6/12">
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] lg:text-[54px]">Experience the magic of cinema with us</h2>
                        <div className="mt-5 mb-10">
                            <button className="home-btn py-3 px-6 sm:px-9 text-white">Learn More</button>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-5 justify-center md:justify-start flex-wrap">
                            <div>
                                <img src="/images/home-1.png" alt="logo" className="max-w-[120px] sm:max-w-[150px]" />
                            </div>
                            <div>
                                <img src="/images/home-2.png" alt="logo" className="max-w-[120px] sm:max-w-[150px]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 flex mt-10 md:mt-20 justify-center md:justify-end gap-2 sm:gap-4">
                        <div>
                            <img src="/images/movie-1.jpg" alt="movie" className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[200px]"  />
                        </div>
                        <div>
                            <img src="/images/movie-2.jpg" alt="movie" className="scale-110 origin-bottom w-[100px] sm:w-[140px] md:w-[160px] lg:w-[200px]"/>
                        </div>
                        <div>
                            <img src="/images/movie-3.jpg" alt="movie" className="w-[100px] sm:w-[140px] md:w-[160px] lg:w-[200px]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home