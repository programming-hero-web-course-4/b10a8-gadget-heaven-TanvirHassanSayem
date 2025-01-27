import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { RandomContext } from '../../main';

const Wishlist = () => {
   
    const [wishListData, setWishListData] = useState([])
    useEffect(() => {
        let wishlistdatatemp = localStorage.getItem("wishlist")
        if (wishlistdatatemp) {
            wishlistdatatemp = JSON.parse(wishlistdatatemp)
            setWishListData(wishlistdatatemp)
        }
    }, []);


    return (
        <>
            <NavBar />
            <div className="bg-gray-100 py-10">
                <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <div className="bg-purple-600 text-center py-6 rounded-lg">
                        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
                        <p className="text-white mt-2">
                            Explore the latest gadgets that will take your experience to the next
                            level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className="mt-6">
                            <Link to={`/cart`} className="bg-transparent text-white border border-white font-semibold px-6 py-2 rounded-md mr-4">
                                Cart
                            </Link>
                            <Link to={`/wishlist`} className="bg-white text-purple-600 font-semibold px-6 py-2 rounded-md shadow-md  ">
                                Wishlist
                            </Link>
                        </div>
                    </div>

                    <div className="mt-6 space-y-6">



                        {
                            wishListData.map(e => <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
                                <div className="w-28 h-28 bg-gray-300 rounded-lg" >
                                    <img src={e.product_image} alt="" />

                                </div>
                                <div className="ml-4 flex-1">
                                    <h4 className="text-lg font-semibold">{e.product_title}</h4>
                                    <p className="text-gray-600 mt-1">
                                        {e.description}
                                    </p>
                                    <p className="mt-2 font-bold">Price: ${e.price}</p>
                                </div>
                                <button className="text-red-500">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 8.586l4.95-4.95a1 1 0 011.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10 3.636 5.05a1 1 0 011.414-1.414L10 8.586z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>)
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Wishlist;
