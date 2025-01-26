const Footer = () => {
    return (
        <div>
            <div className="flex justify-center flex-col items-center ">
                <h1 className="text-4xl font-bold">
                    Gadget Haven
                </h1>

                <p className="mt-2">
                    Leading the way in cutting-edge technology and innovation
                </p>
                <hr className="w-full my-4 border-t-2 border-gray-300" />
            </div>
            <footer className="footer text-base-content p-10 flex justify-center">
                <div className="flex justify-around w-full">
                    <nav>
                        <h6 className="font-bold text-xl mb-1">Services</h6>
                       <div className="flex flex-col gap-2">
                       <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                       </div>
                    </nav>
                    <nav>
                        <div className="flex flex-col gap-2">
                        <h6 className="font-bold text-xl mb-1">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                        </div>
                    </nav>
                    <nav>
                        <div className="flex flex-col gap-2">
                        <h6 className="font-bold text-xl mb-1">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                        </div>
                    </nav>
                </div>
            </footer>


        </div>
    );
};

export default Footer;
