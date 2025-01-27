import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useContext } from "react";

import { RandomContext } from "../../main";



const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [wishListData, setWishListData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let wishlistdatatemp = localStorage.getItem('cart');
        if (wishlistdatatemp) {
            wishlistdatatemp = JSON.parse(wishlistdatatemp);
            let price = wishlistdatatemp.map((e) => parseInt(e.price));
            let totalPricetemp = price.reduce((acc, curr) => acc + curr, 0);
            setTotalPrice(totalPricetemp);
            setWishListData(wishlistdatatemp);
        }
    }, []);

    const purchaseHandle = () => {
        const purchaseModal = document.getElementById('purchaseHandle');
        if (purchaseModal) {
            purchaseModal.showModal();
        }
        localStorage.removeItem('cart');
        setWishListData([]);
        setTimeout(() => {
            localStorage.removeItem("cart");
            setWishListData([]);
            setTotalPrice(0);
        }, 5000);
    };

    const closeModal = () => {
        const purchaseModal = document.getElementById('purchaseHandle');
        if (purchaseModal) {
            purchaseModal.close();
        }

        // Clear cart and reset total price
        localStorage.removeItem('cart');
        setWishListData([]);
        setTotalPrice(0);

        // Redirect to the home page
        navigate('/');
    };


    const sortByPrice = () => {
        const sortedData = [...wishListData].sort((a, b) => b.price - a.price);
        setWishListData(sortedData);
    };
    const { cartNo, wishNo } = useContext(RandomContext)
    return (
        <>



            <dialog id="purchaseHandle" className="modal">
                <div className="modal-box flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <img src="Group.png" alt="" />
                    </div>
                    <h3 className="font-bold text-lg mt-4">Payment Successfully</h3>
                    <p className="text-gray-500 mt-2">Thanks for purchasing.</p>
                    <p className="font-semibold mt-1">Total: ${totalPrice}</p>
                    <div className="modal-action mt-6">
                        <button className="btn  w-full" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            </dialog>

            <div className="bg-white text-black font-sora flex-1">
            <nav className="w-11/12 mx-auto py-2 flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <p id="ped" className="font-bold text-2xl text-black  hover:text-purple-700 ">Gadget Heaven</p>
                </div>
                <div>
                    <ul className="flex justify-between gap-8">
                        <li>
                            <Link to={`/`} className="hover:font-extrabold hover:underline  hover:text-purple-700 ">Home</Link>
                        </li>
                        <li>
                            <Link to={`/`} className="hover:font-extrabold hover:underline  hover:text-purple-700 ">Statistics</Link>
                        </li>
                        <li>
                            <Link to={`/cart`} className="hover:font-extrabold hover:underline  hover:text-purple-700 ">Dashboard</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-20 flex justify-between gap-2">
                    <button className="bg-white p-2 rounded-full shadow-lg flex border-4">
                        <img className="w-8 h-6" src="/cart.png" alt="Cart" /> 
                        <div className="badge badge-secondary">{cartNo}</div>
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-lg flex border-4">
                        <img className="w-8 h-6" src="/wishlist.png" alt="Wishlist" /> 
                        <div className="badge badge-secondary">{wishNo}</div>
                    </button>
                </div>
            </nav>
        </div>
            <div className="bg-gray-100 py-10">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <div className="bg-purple-600 text-center py-6 rounded-lg">
                        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                        <p className="text-white mt-2">
                            Explore the latest gadgets that will take your experience to the next
                            level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className="mt-6">
                            <Link
                                to={'/cart'}
                                className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-md shadow-md mr-4"
                            >
                                Cart
                            </Link>
                            <Link
                                to={'/wishlist'}
                                className="bg-transparent text-white border border-white font-semibold px-6 py-2 rounded-md"
                            >
                                Wishlist
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <h3 className="text-2xl font-bold">Cart</h3>
                        <div className="flex items-center space-x-4">
                            <p className="text-xl font-semibold">
                                Total cost: <span className="text-purple-600">${totalPrice}</span>
                            </p>
                            <button
                                onClick={sortByPrice}
                                className="flex items-center border border-purple-500 text-purple-600 font-semibold px-4 py-2 rounded-full hover:bg-purple-50 transition"
                            >
                                Sort by Price
                                <svg
                                    className="w-5 h-5 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M5 8l5 5 5-5H5z" />
                                </svg>
                            </button>

                            <button
                                onClick={purchaseHandle}
                                disabled={totalPrice === 0}
                                className={`${totalPrice === 0
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800'
                                    } px-6 py-2 rounded-full shadow-md transition`}
                            >
                                Purchase
                            </button>

                        </div>
                    </div>
                    <div className="mt-6 space-y-6">
                        {wishListData.map((e, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md"
                            >
                                <div className="w-28 h-28 bg-gray-300 rounded-lg">
                                    <img src={e.product_image} alt={e.product_title} />
                                </div>
                                <div className="ml-4 flex-1">
                                    <h4 className="text-lg font-semibold">{e.product_title}</h4>
                                    <p className="text-gray-600 mt-1">{e.description}</p>
                                    <p className="mt-2 font-bold">Price: ${e.price}</p>
                                </div>
                                <button className="text-red-500">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 8.586l4.95-4.95a1 1 0 011.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05a1 1 0 011.414-1.414L10 8.586z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
