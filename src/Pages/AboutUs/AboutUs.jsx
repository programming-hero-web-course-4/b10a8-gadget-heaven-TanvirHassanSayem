import { useEffect } from "react";


const AboutUs = () => {
      useEffect(() => {
        document.title = "Gadget Heaven | About Us"
      }, [])
    return (

        
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-purple-600 text-center">About Us</h2>
                <p className="mt-4 text-gray-700 text-lg">
                    Welcome to Gadget Heaven, the ultimate destination for cutting-edge tech gadgets and accessories! We bring you the latest products from all over the world to help you stay ahead in the tech game. Whether you're looking for smart devices, wearable tech, or cool accessories, we have something for everyone.
                </p>
                <p className="mt-6 text-gray-700 text-lg">
                    Our mission is to provide high-quality, innovative gadgets that make your life easier and more enjoyable. We are committed to delivering excellent customer service and offering products that meet the highest standards of design, functionality, and performance.
                </p>
                <h3 className="text-2xl font-semibold text-gray-800 mt-6">Why Choose Us?</h3>
                <ul className="list-disc list-inside mt-4 text-gray-700">
                    <li>Exclusive product range curated from the best brands</li>
                    <li>Fast and reliable shipping</li>
                    <li>Secure payment options</li>
                    <li>24/7 customer support</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
