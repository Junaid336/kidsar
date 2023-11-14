

const Lesson = () => {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/1600x900/?kids,writing")',
        }}
      >
        {/* Vertically Centered Container */}
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="bg-white bg-opacity-90 p-10 rounded-lg mb-8 md:w-7/10 lg:w-6/9 xl:w-20/30">
            {/* Title with New Color */}
            <h1 className="flex justify-center text-3xl font-bold mb-4 txt-blue-800">
              Lesson
            </h1>
  
            {/* Centered Image */}
            <div className="flex items-center justify-center mb-4">
              <img
                className="rectangled-full h-40 w-40 object-cover"
                src="https://source.unsplash.com/random"
                alt="Centered Image"
              />
            </div>
            {/* Arrow Button */}
            <div className="flex flex-col items-center justify-center ">
              <div className="bg-white bg-opacity-90 p-8 rounded-lg mb-8 md:w-2/3 lg:w-1/2 xl:w-1/4 text-center">
                {/* Content goes here */}
  
                <button className="flex flex-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-white hover:text-blue-500 mt-4">
                  OpenAR
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Remaining Background */}
        <div className="flex-grow bg-gray-800"></div>
      </div>
    );
  };
  
  export default Lesson;
  