import Auth from "../components/Auth";

import { signUp } from "../firebase";

const SignUp = () => {
    const OnSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.elements.firstName.value)
        console.log(e.target.elements.lastName.value)
        console.log(e.target.elements.email.value)
        console.log(e.target.elements.password.value)
        signUp(e.target.elements.firstName.value,e.target.elements.lastName.value,e.target.elements.email.value,e.target.elements.password.value)
    }
    return (
        <Auth mode='signup' OnSubmitHandler={(e)=> OnSubmitHandler(e)} />
    )
}

export default SignUp