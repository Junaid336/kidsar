import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { getUserinfo, auth } from "../firebase";
import { Link } from "react-router-dom"

const alphabets = "abcdefghijklmnopqrstuvxyz"

const Alphabets = () => {

  const [userData, setUserData] = useState({});

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const response = await getUserinfo(user.email);
                setUserData(response);
            } else {
                setUserData({});
            }
            });
            
            return () => unSubscribe();
      },[]);

    
    return (
      <>
        {
          alphabets.split('').map((letter, index) => (
            <Link 
             to={{
                pathname: "/arview",
                search: `id=${letter}`
             }}
             className="object-contain"
             key={index}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md w-48 h-48 relative">
                  <img
                    src={`/images/${letter}.jpeg`}
                    alt={`letter ${letter}`}
                    className="w-full h-auto object-fit"
                  />
                  {userData?.english && userData.english > ((index + 1 ) * 100 / 26) && (
                    <img src="/icons/check.svg" className="absolute top-3 left-3 h-10 w-10" />
                  )}
              </div>
          </Link>
          ))
        }
      </>
    )
  }

  export default Alphabets