import { createContext, StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import ProductDetails from './Pages/ProductDetails/ProductDetails.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Wishlist from './Pages/Wishlist/Wishlist.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx'; // Import the new AboutUs component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
  {
    path: "/about",  // New route for About Us page
    element: <AboutUs />,  
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export const RandomContext = createContext(null);

const RootComponent = () => {
  const [cartNo, setCartNo] = useState(0);
  const [wishNo, setWishNo] = useState(0);

  return (
    <StrictMode>
      <RandomContext.Provider value={{ cartNo, setCartNo, wishNo, setWishNo }}>
        <RouterProvider router={router} />
      </RandomContext.Provider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<RootComponent />);
