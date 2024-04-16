import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import Auth from "../components/Auth";
import { signUp } from "../firebase";

const SignUp = () => {
    const navigate = useNavigate();
    const OnSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await signUp(e.target.elements.firstName.value,e.target.elements.lastName.value,e.target.elements.email.value,e.target.elements.password.value);
            if(response.success) {
                toast.success("Signed Up Successfully!");
                navigate("/verification");
            } else {
                toast.error("Something went wrong!");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    }
    return (
        <Auth mode='signup' OnSubmitHandler={(e)=> OnSubmitHandler(e)} />
    )
}

export default SignUp