import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getUserinfo } from "../firebase";
import Progress from "../components/Progess";

const courses = [
    {id: "english", title: "English", href: "/english"},
    {id: "maths", title: "Maths", href: "/english" },
    {id: "colors", title: "Colors", href: "/english"},
];

const Dashboard = () => {
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
    <div className="mx-auto max-w-7xl py-10 text-white space-y-7">
        <h1 className="text-5xl leading-7 font-semibold">Welcome{userData?.firstName && ` ${userData.firstName}`}!</h1>
        <h2 className="text-3xl leading-6">Your Learning!</h2>
        <div className="flex justify-center gap-8 flex-wrap lg:flex-nowrap">
            {courses.map((course, index)=>(
                <Progress 
                 key={index} 
                 progress={userData[course.id] || 0} 
                 title={course.title}
                 resumeLink={course.href}
                />
            ))}
        </div>
        
    </div>
  )
}


export default Dashboard;