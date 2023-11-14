import Auth from "../components/Auth";

const Login = () => {
    const OnSubmitHandler = (e) => {
        e.preventDefault()
        console.log(e.target.elements)
    }
    return (
      <Auth mode='login' OnSubmitHandler={OnSubmitHandler}/>
    )
}

export default Login