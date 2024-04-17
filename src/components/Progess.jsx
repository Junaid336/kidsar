import { Link } from "react-router-dom";

const images = {
  English: "prog_english.png",
  Maths: "prog_maths.png",
  Colors: "prog_colors.png"
}

const Progress = ({
  title,
  progress,
  resumeLink,
}) => {
  
  return (
    <div className="bg-transparent flex justify-center items-center">
      <div className="bg-gradient-to-tr from-sky-200 to-fuchsia-300 p-8 rounded-3xl shadow-lg text-center text-gray-800">
        <h2 className="font-bold text-3xl  mb-4">{title}</h2>
        <div className=" mb-6">
          <img
            src={`/images/${images[title]}`}
            alt="Book Cover"
            className="rounded-lg h-48 w-80 mb-2 ml-7 "
          />
          <div className="bg-white h-4 rounded-lg overflow-hidden">
            <div
              className="bg-violet-500 h-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 font-semibold text-2xl">{`${progress}%`}</p>
        </div>
        <div className="flex justify-center mb-6">
          <Link to={resumeLink}>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Progress;