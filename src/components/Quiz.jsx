import React, { useState } from "react";

const Quiz = () => {
  const [question, setQuestion] = useState("Is this a 'Red' circle?");
  const [question1, setQuestion1] = useState("Is this  'A ' alphabet?");
  const [userAnswer, setUserAnswer] = useState(null);

  const handleYes = () => {
    setUserAnswer(true);
    // Here you can check the answer and perform actions accordingly
    // For simplicity, I'm logging the answer here
    console.log("User answered Yes");
  };

  const handleNo = () => {
    setUserAnswer(false);
    // Here you can check the answer and perform actions accordingly
    // For simplicity, I'm logging the answer here
    console.log("User answered No");
  };

  const handleSubmit = () => {
    // Implement your logic for handling submission here
    console.log("Quiz submitted");
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen bg-gray-800"
      style={{ backgroundImage: "url('your_background_image_url_here')" }}
    >
      <div className="container mx-auto p-6">
        <h1 className="text-4xl text-center font-bold text-white mb-8">Quiz</h1>

        {/* First section */}
        <div
          className="bg-red-200 shadow-md rounded px-8 py-6 mb-4"
          style={{
            backgroundImage: "url('kid.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mb-1">
            <img
              src="/images/red.png"
              alt="First Quiz Image"
              className=" mb-3  rounded-lg h-15 w-40 ml-10"
            />
            <p className="text-lg text-gray-800">{question}</p>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleYes}
            >
              Yes
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNo}
            >
              No
            </button>
          </div>
        </div>

        {/* Second section */}
        <div
          className="bg-blue-200 shadow-md rounded px-8 py-6"
          style={{
            backgroundImage:
              "url('your_second_section_background_image_url_here')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mb-1">
            <img
              src="/images/A.png"
              alt="Second Quiz Image"
              className="mb-3 rounded-lg  h-15 w-40 ml-10"
            />
            <p className="text-lg text-gray-800">{question1}</p>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleYes}
            >
              Yes
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNo}
            >
              No
            </button>
          </div>
        </div>

        {/* Submit button */}
        <div className="fixed bottom-0 left-0 w-full bg-gray-900 p-4">
          <div className="container mx-auto flex justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;