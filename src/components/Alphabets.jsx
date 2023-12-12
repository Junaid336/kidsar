import { Link } from "react-router-dom"

const alphabets = "abcdefghijklmnopqrstuvxyz"

const Alphabets = () => {
    console.log(alphabets.split(''))
    return (
      <>
        {
          alphabets.split('').map(letter => (
            <Link 
             to={{
                pathname: "/arview",
                search: `id=${letter}`
             }}
             className="object-contain"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-48 h-48">
                  <img
                    src={`/images/${letter}.jpeg`}
                    alt={`letter ${letter}`}
                    className="w-full h-auto object-fit"
                  />
              </div>
          </Link>
          ))
        }
      </>
    )
  }

  export default Alphabets