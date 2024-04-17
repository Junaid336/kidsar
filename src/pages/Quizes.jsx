import { Link } from "react-router-dom";

const courses = [
    {id: "english", title: "English", href: "/quiz/english", image: "prog_english.png"},
    {id: "maths", title: "Maths", href: "/quiz/english" , image: "prog_maths.png"},
    {id: "colors", title: "Colors", href: "/quiz/english", image: "prog_colors.png"},
];

const Quizes = () => {
  return (
    <div className="mx-auto max-w-7xl py-10 text-white space-y-7">
        <h1 className="text-5xl leading-7 font-semibold">Test Your Knowledge!</h1>
        <div className="flex justify-center gap-8 flex-wrap lg:flex-nowrap">
            {courses.map((course, index) => (
                <QuizCard 
                  key={index}
                  title={course.title}
                  href={course.href}
                  image={course.image}
                />
            ))}
        </div>
    </div>
  )
}


const QuizCard = ({
    title,
    href,
    image
  }) => {
    
    return (
      <div className="bg-transparent flex justify-center items-center">
        <div className="bg-gradient-to-tr from-sky-200 to-fuchsia-300 p-8 rounded-3xl shadow-lg text-center text-gray-800">
          <h2 className="font-bold text-3xl  mb-4">{title}</h2>
          <div className=" mb-6">
            <img
              src={`/images/${image}`}
              alt="Book Cover"
              className="rounded-lg h-52 w-80 mb-2 ml-7 "
            />
          </div>
          <div className="flex justify-center mb-6">
            <Link to={href}>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Take Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

export default Quizes;