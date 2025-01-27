const Banner = () => {
    return (
        <>
            <div className="bg-purple-700 text-white font-sora relative">
                {/* Hero Section */}
                <section className="text-center py-16 items-center z-10 relative">
                    <h1 className="text-4xl font-bold mb-4">
                        Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                    </h1>
                    <p className="text-white mt-2  mb-8">
                        Explore the latest gadgets that will take your experience to the next
                        level. <br />From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button
                        className="btn bg-white text-purple-700 font-sora font-bold py-2 px-6 mb-36 rounded-full shadow-lg hover:bg-purple-100 transition"
                    >
                        Shop Now
                    </button>
                </section>
                {/* Image Section */}
                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 z-0">
                    <img
                        src="banner.jpg"
                        alt="VR Headset"
                        className="rounded-3xl shadow-xl border-4 border-white max-w-full h-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default Banner;
