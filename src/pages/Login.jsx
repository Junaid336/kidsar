import { toast } from "react-hot-toast";

import Auth from "../components/Auth";
import VerificaitonModal from "../components/VerificaitonModal";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../firebase";

const Login = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);

  const OnSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await signIn(e.target.elements.email.value, e.target.elements.password.value);
      console.log("response in login : " ,  res);
      if(res.success) {
        toast.success("Logged In Successfully!");
        navigate("/");
      } else if (res.error === "verification") {
        setShowModal(true);
      } else {
        toast.error("Invalid Credentials!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <>
      <Auth mode='login' OnSubmitHandler={OnSubmitHandler}/>
      <VerificaitonModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default Login;