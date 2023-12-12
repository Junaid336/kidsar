import Alphabets from "./Alphabets";

const EnglishPage = () => {

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center">
      {/* Header Container */}
      <div className="bg-gray-800 w-full py-4">
        <h1 className="text-4xl font-bold text-white text-center">English</h1>
      </div>

      {/* Main Content Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Alphabets />
        </div>
    </div>
  );
};

export default EnglishPage;





