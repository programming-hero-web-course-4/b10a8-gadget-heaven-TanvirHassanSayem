
function NavBar() {
    return (
        <div className="bg-purple-700 text-white font-sora flex-1">
            <nav className="w-11/12 mx-auto py-2 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <p id="ped" className="font-bold text-2xl text-white">Gadget Heaven</p>
                </div>
                <div>
                    <ul className="flex justify-between gap-8">
                        <li className="hover:font-extrabold  hover:underline">Home</li>
                        <li className="hover:font-extrabold  hover:underline">Statistics</li>
                        <li className="hover:font-extrabold  hover:underline">Dashboard</li>
                    </ul>
                </div>

                <div className="w-20 flex justify-between gap-2">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                        <img className="w-6 h-6" src="cart.png" alt="Cart" />
                    </div>
                    <div className="bg-white p-2 rounded-full shadow-lg">
                        <img className="w-6 h-6" src="wishlist.png" alt="Wishlist" />
                    </div>
                </div>

            </nav>
        </div>

    )
}

export default NavBar