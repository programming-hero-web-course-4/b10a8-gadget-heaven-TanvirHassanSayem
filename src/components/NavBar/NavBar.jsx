import { useContext } from "react";
import { Link } from "react-router-dom";
import { RandomContext } from "../../main";

function NavBar() {
    const { cartNo, wishNo } = useContext(RandomContext)
    return (
        <div className="bg-purple-700 text-white font-sora flex-1">
            <nav className="w-11/12 mx-auto py-2 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <p id="ped" className="font-bold text-2xl text-white">Gadget Heaven</p>
                </div>
                <div>
                    <ul className="flex justify-between gap-8">
                        <li>
                            <Link to={`/`} className="hover:font-extrabold hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to={`/`} className="hover:font-extrabold hover:underline">Statistics</Link>
                        </li>

                        <li>
                            <Link to={`/about`} className="hover:font-extrabold hover:underline">About Us</Link> {/* New Link */}
                        </li>
                        <li>
                            <Link to={`/cart`} className="hover:font-extrabold hover:underline">Dashboard</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-20 flex justify-between gap-2">
                    <button className="bg-white p-2 rounded-full shadow-lg flex">
                        <img className="w-8 h-6" src="/cart.png" alt="Cart" />
                        <div className="badge badge-secondary">{cartNo}</div>
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg flex">
                        <img className="w-8 h-6" src="/wishlist.png" alt="Wishlist" />
                        <div className="badge badge-secondary">{wishNo}</div>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
