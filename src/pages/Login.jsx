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
    // console.log(e.target.elements.email.value)
    // console.log(e.target.elements.password.value)
    const res = await signIn(e.target.elements.email.value, e.target.elements.password.value)

    if(res === "success"){
      navigate("/")
    }
    else if(res === "verification"){
      setShowModal(true)
      console.log(res)
    }
    else {
      console.log("hello error")
      console.log(res)
    }
  }

  return (
    <>
      <Auth mode='login' OnSubmitHandler={OnSubmitHandler}/>
      <VerificaitonModal showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}

export default Login