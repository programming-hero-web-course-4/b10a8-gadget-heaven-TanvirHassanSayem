import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { RandomContext } from "../../main";
import { Data } from "../../data/data";
import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";


const ProductDetails = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Details"
  }, [])
  const { id } = useParams();
  const { cartNo, wishNo, setWishNo, setCartNo } = useContext(RandomContext);
  const [data] = useState(Data);

  const tempfitlerData = data.find((e) => e.product_id == id);
  const [filterData] = useState(tempfitlerData);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const saveToLocalStorageWishlist = () => {
    let localStorageData = localStorage.getItem("wishlist");
    let tempData = [];

    if (localStorageData) {
      tempData = JSON.parse(localStorageData);

      // Check if the product already exists in the wishlist
      if (tempData.some((item) => item.product_id === filterData.product_id)) {
        toast.error("Item is already in the Wishlist!");
        return;
      }
    }

    tempData.push({ ...filterData });
    localStorage.setItem("wishlist", JSON.stringify(tempData));

    setWishNo(wishNo + 1);
    setIsInWishlist(true); // Disable the button
    toast.success("Item added to Wishlist!");
  };

  const saveToLocalStorageCart = () => {
    let localStorageData = localStorage.getItem("cart");
    let tempData = [];

    if (localStorageData) {
      tempData = JSON.parse(localStorageData);
    }

    tempData.push({ ...filterData });
    localStorage.setItem("cart", JSON.stringify(tempData));

    setCartNo(cartNo + 1);
    toast.success("Item added to Cart!");
  };

  return (
    <>
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
      <Toaster position="top-right" reverseOrder={false} />
      {/* bannersection */}
      <div className="bg-gray-100 relative">
        <div className="mx-auto bg-white shadow-lg overflow-hidden">
          <div className="bg-purple-600 text-center py-6 pb-44">
            <h2 className="text-2xl font-bold text-white">Product Details</h2>
            <p className="text-white mt-2">
              Explore the latest gadgets that will take your experience to the next level.
            </p>
          </div>
        </div>

        {/* detailsection */}
        <div className="absolute  top-[40%] left-1/2 transform -translate-x-1/2 p-6 flex flex-col md:flex-row items-center justify-center shadow-lg w-9/12 bg-white rounded-lg">
          <img
            src={filterData.product_image}
            alt="product-img"
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
          <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-800">{filterData.product_title}</h3>
            <p className="text-lg text-gray-700 mt-2">Price: ${filterData.price}</p>
            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-md mt-2">
              In Stock
            </span>
            <p className="mt-4 text-gray-600">{filterData.description}</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800">Specification:</h4>
              <ul className="list-decimal list-inside text-gray-700">
                {filterData.specification.map((e, index) => (
                  <li key={index}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex items-center justify-center md:justify-start">
              <p className="text-lg font-semibold text-gray-800">Rating:</p>
              <div className="flex items-center ml-2 text-yellow-500">★★★★☆</div>
              <span className="ml-2 text-gray-700">({filterData.rating})</span>
            </div>
            <div className="flex justify-center md:justify-start gap-3">
              {/* Add to Cart Button */}
              <button
                onClick={saveToLocalStorageCart}
                className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 flex items-center"
              >
                Add To Cart
                <svg
                  className="ml-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l1.6 9m0 0h9.4m-9.4 0L5 16a2 2 0 002 2h9a2 2 0 002-2l1.4-7H6.6m4 9a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
              </button>

              {/* Add to Wishlist Button */}
              <button
                onClick={saveToLocalStorageWishlist}
                className={`mt-6 px-6 py-2 rounded-md flex items-center ${isInWishlist ? "bg-gray-400 cursor-not-allowed" : "hover:bg-purple-300"
                  }`}
                disabled={isInWishlist}
              >
                <img className="w-8 h-8" src="/wishlist.png" alt="Wishlist Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="mt-96">
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
