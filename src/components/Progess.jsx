import React, { useState } from "react";

const Progress = () => {
  const [progress, setProgress] = useState(15); // Progress percentage
  const [resumeProgress, setResumeProgress] = useState(0); // For storing progress to resume

  const updateProgress = (value) => {
    if (value > 100) {
      setProgress(100);
    } else if (value < 0) {
      setProgress(0);
    } else {
      setProgress(value);
    }
  };

  const resume = () => {
    setProgress(resumeProgress);
  };

  const reset = () => {
    setProgress(0);
    // setResumeProgress();
  };

  return (
    <div className="h-screen bg-transparent flex justify-center items-center">
      <div className="bg-gradient-to-tr from-sky-200 to-fuchsia-300 p-8 rounded-3xl shadow-lg text-center text-gray-800">
        <h2 className="font-bold text-3xl  mb-4">Book Progress</h2>
        <div className=" mb-6">
          <img
            src="/images/prog_back_1.png" // Placeholder.com URL for a random 150x200 image
            alt="Book Cover"
            className="rounded-lg h-45 w-80 mb-2 ml-7 "
          />
          <div className="bg-white h-4 rounded-lg overflow-hidden">
            <div
              className="bg-violet-500 h-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2">{`${progress}% Progress`}</p>
        </div>
        <div className="flex justify-center mb-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={resume}
          >
            Resume
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
            onClick={reset}
          >
            Reset
          </button>
        </div>
        <p className="text-sm">Note: Your Progress will show here</p>
      </div>
    </div>
  );
};

export default Progress;