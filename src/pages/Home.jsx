const Home = () => {
    return (
        <section className="bg-[#0F172A] home-section h-screen py-16">
            <div className="container mx-auto">
                <div className="py-10">
                    <h1 className="uppercase text-[#E27614] text-9xl">Victor</h1>
                </div>
                <div className="flex">
                    <div className="w-6/12">
                        <h2 className="text-[54px]">Experience the magic of cinema with us</h2>
                        <div className="mt-5 mb-10">
                            <button className="home-btn py-3 px-9 text-white">Learn More</button>
                        </div>
                        <div className="flex items-center gap-5">
                            <div>
                                <img src="/images/home-1.png" alt="logo" />
                            </div>
                            <div>
                                <img src="/images/home-2.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 flex mt-20">
                        <div>
                            <img src="/images/movie-1.jpg" alt="movie"   />
                        </div>
                        <div>
                            <img src="/images/movie-2.jpg" alt="movie" className="scale-110 origin-bottom"/>
                        </div>
                        <div>
                            <img src="/images/movie-3.jpg" alt="movie" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home