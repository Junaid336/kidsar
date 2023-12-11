
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Start Learning</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Replace the image paths with your own images */}
        <Link to="/english" className="w-full h-auto object-contain">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/alph.jpg"
              alt="Image 1"
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>
        <Link to="/math" className="w-full h-auto object-contain">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/math.jpg"
              alt="Image 2"
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>
        <Link to="/colors" className="w-full h-auto object-contain">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/colors.jpg"
              alt="Image 3"
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>
        <Link to="/object" className="w-full h-auto object-contain">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/objects.jpg"
              alt="Image 4"
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
