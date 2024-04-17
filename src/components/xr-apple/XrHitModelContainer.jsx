import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useSearchParams } from "react-router-dom";
import { setUserInfo, getUserinfo, auth } from "../../firebase";

import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitModel from "./XrHitModel";


const XrHitModelContainer = () => {
  let [searchParams] = useSearchParams();
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

    useEffect(()=>{
      let id = searchParams.get("id")
      let letterPosition = id.toUpperCase().charCodeAt(0) - 64;
      if(userData?.email) {
        setTimeout(()=>{
          setUserInfo(userData.email, {english: Math.ceil(letterPosition/26 * 100)})
        }, 3000);  
      }
    },[userData])

  return (
    <div className="min-h-screen min-w-screen">
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas className="pos-absolute absolute">
        <XR>
          <XrHitModel />
        </XR>
      </Canvas>
    </div>
  );
};

export default XrHitModelContainer;
