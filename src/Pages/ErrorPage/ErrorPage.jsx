import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-purple-600">404</h1>
                <h2 className="text-3xl font-semibold text-gray-800 mt-4">
                    Oops! Page not found
                </h2>
                <p className="text-lg text-gray-600 mt-2">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <button
                    className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
                    onClick={() => window.location.href = '/'}
                >
                    Go Back Home
                </button>
            </div>
            <img
                src="https://via.placeholder.com/400x300?text=Error+Page"
                alt="Error Illustration"
                className="w-80 mt-8"
            />
        </div>
    );
}

export default ErrorPage;
