import React from 'react';
import { Link } from 'react-router-dom';

const EnglishPage = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center">
      {/* Header Container */}
      <div className="bg-gray-800 w-full py-4">
        <h1 className="text-4xl font-bold text-white text-center">English</h1>
      </div>

      {/* Main Content Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/arview" className="w-full h-auto object-contain">
        {/* Replace the image paths with your own images */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/A.jpeg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
     </Link>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
        </div>
        </div>
    </div>
  );
};

export default EnglishPage;

