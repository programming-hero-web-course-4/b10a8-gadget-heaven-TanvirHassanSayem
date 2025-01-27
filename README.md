# Gadget Heaven - E-commerce Website

Welcome to the **Gadget Heaven** project! This is an e-commerce platform where users can browse and shop for various tech gadgets and accessories.

## Live Website Link
You can view the live version of the website here:  
https://gadget-heaven-lilac.vercel.app/


## Requirement Document Link
The requirement document for the project can be accessed here:  
## System Requirements

To run and develop this project locally, your system should meet the following requirements:

### Software Requirements:
1. **Node.js** (v16.x or higher)  
   - [Download Node.js](https://nodejs.org/)
   - Node.js is used for running the development server and building the production version of the project.

2. **npm** (v7.x or higher)  
   - npm (Node Package Manager) is bundled with Node.js and is used to manage project dependencies.
   - It’s recommended to use the npm version that comes with Node.js to avoid compatibility issues.

3. **Text Editor/IDE**  
   - Any text editor or IDE (Integrated Development Environment) can be used, but the following are recommended:
     - **Visual Studio Code** ([Download VS Code](https://code.visualstudio.com/))
     - **Sublime Text**
     - **Atom**
     
4. **Browser**  
   - Modern web browsers are supported. For best experience:
     - **Google Chrome** (recommended)
     - **Mozilla Firefox**
     - **Microsoft Edge**
     - **Safari**

### Hardware Requirements:
1. **CPU**: Any modern processor (Intel i5 or equivalent is recommended).
2. **RAM**: 4GB of RAM (8GB or higher recommended for smoother performance during development).
3. **Disk Space**: 100MB of free space for the project files.
4. **Internet Connection**: Required for installing dependencies, cloning the repository, and accessing online resources.

### Additional Requirements:
- **Git**: 
   - Git is required for version control and to clone the repository.
   - [Download Git](https://git-scm.com/)

## React Fundamental Concepts Used in the Project
This project demonstrates the following React fundamental concepts:

1. **Components**: The application is broken down into reusable components like `NavBar`, `ProductDetails`, `Wishlist`, and `Cart`.
2. **JSX**: JSX is used for defining the UI structure within components.
3. **Props and State**: Props are used to pass data between components, while `useState` is used for local component state management.
4. **Event Handling**: Functions like `onClick` are used to handle user interactions such as adding products to the cart or wishlist.
5. **React Router**: Used for routing between different pages like `Home`, `ProductDetails`, `Cart`, and `Wishlist`.
6. **Hooks**: `useState`, `useEffect`, and `useContext` are used for state management, side-effects, and context sharing.
7. **Context API**: Used to globally manage shared data (cart count, wishlist count).
8. **Conditional Rendering**: Components conditionally render based on states (e.g., display "In Stock" if a product is available).
9. **useEffect**: Used for handling side effects, such as fetching and storing data in `localStorage`.

## Data Handling and Management
Data is handled and managed using:

1. **Context API**: 
   - `RandomContext` is used to manage shared data such as the number of items in the cart (`cartNo`) and wishlist (`wishNo`) across different components.
   
2. **Local Storage**:
   - Products in the cart and wishlist are stored in the browser’s local storage to persist the user's selections across page refreshes.  
   - Functions like `saveToLocalStorageCart` and `saveToLocalStorageWishlist` are used to save items to `localStorage`.

## Key Features of the Website/Project

1. **Product Listing & Filtering**: 
   - Users can browse through a list of gadgets and use category-specific filters to narrow down their search.

2. **Cart Functionality**: 
   - Products can be added to the shopping cart, and the cart persists across page refreshes.

3. **Wishlist**: 
   - Users can add products to the wishlist. Items in the wishlist persist even when the page is refreshed.

4. **Product Details Page**: 
   - Each product has a detailed page displaying its image, price, description, specifications, and availability.

5. **Dashboard with Cart and Wishlist**: 
   - Users can view and manage their cart and wishlist from a centralized dashboard.
