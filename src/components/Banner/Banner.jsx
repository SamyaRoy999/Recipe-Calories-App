const Banner = () => {
    return (
        <div>
            <div className="  bg-cover mx-auto rounded-3xl px-18 lg:px-28 py-20  lg:py-32 text-center bg-[url('https://i.postimg.cc/0QySrt5c/banner.png')] bg-no-repeat bg-center" >
                <h2 className="text-[#FFFFFF] font-bold text-3xl  lg:text-5xl ">
                    Discover an exceptional cooking <br /> class tailored for you!
                </h2>
                <p className="text-[#FFFFFF] font-normal text-sm lg:text-lg mb-6 lg:mb-10  mt-4 lg:mt-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems <br /> to become an exceptionally well world-class Programmer.</p>
                <div className=" flex justify-center gap-4">
                    <button className="btn rounded-full  font-semibold text-xl btn-success">Explore Now</button>
                    <button className="btn rounded-full font-semibold text-xl  btn-outline text-[#ffffff]  border border-sky-50">Our Feedback</button>
                </div>
            </div>
        </div>
    )
}

export default Banner