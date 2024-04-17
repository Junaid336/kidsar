import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const engCol1 = [
  { id: "col_1_a", alpha: "a", img: "/images/quiz/quzi_alpha_a.png" },
  { id: "col_1_j", alpha: "j", img: "/images/quiz/quzi_alpha_j.png" },
  { id: "col_1_c", alpha: "c", img: "/images/quiz/quzi_alpha_c.png" }
]
const engCol2 = [
  { id: "col_2_j", alpha: "j", img: "/images/quiz/quzi_obj_j.png" },
  { id: "col_2_c", alpha: "c", img: "/images/quiz/quzi_obj_c.png" },
  { id: "col_2_a", alpha: "a", img: "/images/quiz/quzi_obj_a.png" }
]

const Quiz = () => {
  const navigate = useNavigate();
  const [col1Selected, setCol1Selected] = useState();
  const [col2Selected, setCol2Selected] = useState();
  const [count, setCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [orange, setOrange] = useState();
  const [red, setRed] = useState([]);
  const [green, setGreen] = useState([])

  const handleCol1Click = (alpha, id) => {
    if(!(green.includes(id) || red.includes(id))) {
      if(!col2Selected) {
        if(orange === id) {
          setOrange(null);
          setCol1Selected(null);
        } else {
          setOrange(id)
          setCol1Selected(alpha);
        }
      } else {
        if(col2Selected === alpha) {
          setGreen([...green,  `col_1_${alpha}`, `col_2_${col2Selected}`]);
          setGreenCount(greenCount+1);
        } else {
          setRed([...red,  `col_1_${alpha}`, `col_2_${col2Selected}`]);
        }
        setOrange(null);
        setCol1Selected(null);
        setCol2Selected(null);
        setCount(count + 1);
      }
    }
  }
  
  const handleCol2Click = (alpha, id) => {
    if(!(green.includes(alpha) || red.includes(alpha))) {
      if(!col1Selected) {
        if(orange === id) {
          setOrange(null);
          setCol2Selected(null);
        } else {
          setOrange(id)
          setCol2Selected(alpha);
        }
      } else {
        if(col1Selected === alpha) {
          setGreen([...green, `col_2_${alpha}`, `col_1_${col1Selected}`]);
          setGreenCount(greenCount+1);
        } else {
          setRed([...red, `col_2_${alpha}`, `col_1_${col1Selected}`]);
        }
        setOrange(null);
        setCol1Selected(null);
        setCol2Selected(null);
        setCount(count + 1);
      }
    }
  }

  useEffect(()=>{

    if(count==3){
      if(greenCount < 2) {
        toast.error("Failed!");
        navigate("/quiz");
      } else {
        toast.success("Passed!");
        navigate("/quiz");
      }
    }
  }, [count, greenCount]);

  return(
    <div className="mx-auto max-w-3xl py-10">
      <div className="flex justify-between">
        <div className="space-y-6">
            {engCol1.map(col => (
              <div key={col.id}
               className={`hover:bg-black hover:bg-opacity-20 bg-opacity-60 rounded-xl
                ${orange === col.id ? "bg-orange-500" : ""} 
                ${green.includes(col.id) ? "bg-green-500" : ""}
                ${red.includes(col.id) ? "bg-red-500" : ""}
               `}
               onClick={()=>handleCol1Click(col.alpha, col.id)}
              >
                <img src={col.img} className="h-40 w-40 rounded-xl" />
              </div>
            ))}
        </div>
        <div className="space-y-6">
            {engCol2.map(col => (
              <div key={col.id}
              className={`hover:bg-black hover:bg-opacity-20 bg-opacity-60 rounded-xl cursor-pointer
                ${orange === col.id ? "bg-orange-500" : ""} 
                ${green.includes(col.id) ? "bg-green-500" : ""}
                ${red.includes(col.id) ? "bg-red-500" : ""}
               `}
              onClick={()=>handleCol2Click(col.alpha, col.id)}
              >
                <img src={col.img} className="h-40 w-40 rounded-xl" />
              </div>
            ))}
        </div>
      </div>

    </div>
  )
    
};

export default Quiz;