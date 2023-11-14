import { useRef } from 'react'
import { Link } from 'react-router-dom'
import GoogleButton from './GoogleButton'

const Auth = ({mode, OnSubmitHandler}) => {
    const passRef = useRef(null)
    
    return (
        <>
        {/* Container */}
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                {/* Row */}
                    <div className={`w-full xl:w-3/4 lg:w-11/12 flex ${mode === 'login' && 'flex-row-reverse'}`}>
                        {/* Col */}
                        <div className={`p-10 gradient w-full h-full bg-gray-400 hidden lg:block lg:w-5/12 bg-transparent  ${mode === 'login'? 'rounded-r-lg': 'rounded-l-lg'}`}>
                            <img alt="kid" src='/images/kid.png' className="bg-transparent"/>
                        </div>
                        {/* Col */}
                        <div className={`w-full lg:w-7/12 bg-gray-100 p-5 rounded-lg lg:${mode === 'login' ? 'rounded-l-none' : 'rounded-r-none'}`}>
                            <h3 className="pt-4 text-2xl text-center">
                                {
                                    mode === 'login' ? 'Log Into Your Account' :'Create an Account!'
                                }
                            </h3>
                            <form onSubmit={(e)=>OnSubmitHandler(e)} className="px-8 pt-6 pb-8 mb-4 rounded group" noValidate >
                                { 
                                    mode !== 'login' &&
                                    <div className={"mb-4 md:flex md:justify-between "}>
                                        <div className="mb-4 md:mr-2 md:mb-0">
                                            <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="firstName"
                                            >
                                            First Name
                                            </label>
                                            <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            required
                                            />
                                        </div>
                                        <div className="md:ml-2">
                                            <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="lastName"
                                            >
                                            Last Name
                                            </label>
                                            <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            required
                                            />
                                        </div>
                                    </div>
                                }
                                <div className="mb-4">
                                    <label
                                        className="block mb-2 text-sm font-bold text-gray-700 "
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        pattern="^[^@]+@[^@]+\.[a-z]{2,}$"
                                    />
                                    <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                        Please enter a valid email address.
                                    </span>
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className={`mb-4 md:mr-2 md:mb-0 ${mode === 'login' && 'w-full'}`}>
                                        <label
                                        className="block mb-2 text-sm font-bold text-gray-700"
                                        htmlFor="password"
                                        >
                                        Password
                                        </label>
                                        <input
                                        ref={passRef}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="******************"
                                        required
                                        pattern=".{4,}"
                                        />
                                        <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                            Pasword should be at least 4 characters long.
                                        </span>
                                    </div>
                                    {
                                        mode !== 'login' &&
                                        <div className="md:ml-2">
                                            <label
                                            className="block mb-2 text-sm font-bold text-gray-700"
                                            htmlFor="c_password"
                                            >
                                            Confirm Password
                                            </label>
                                            <input
                                            onChange={(e)=>{
                                                e.target.value === passRef.current?.value ? e.target.setCustomValidity("") : e.target.setCustomValidity("not match")
                                                // console.log(`${passRef.current?.value}, ${e.target.value}`, e.target.validity)
                                            }}
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline  invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                                            id="c_password"
                                            name="c_password"
                                            type="password"
                                            placeholder="******************"
                                            required
                                            />
                                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                                Pasword should match.
                                            </span>
                                        </div>
                                    }
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline group-invalid:pointer-events-none group-invalid:opacity-30"
                                        type="submit"
                                    >
                                        {mode === 'login' ? 'Login' : 'Register Account'}
                                    </button>
                                </div>
                                <div className="mb-6 text-center">
                                    <GoogleButton />
                                </div>
                                <hr className="mb-6 border-t" />
                                
                                <div className="text-center">
                                    <Link
                                        to={mode !== 'login' ? '/login' : '/signup'}
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        {mode !== 'login' ? 'Already have an account? Login!' : 'New to KidsAR? Signup'}
                                    </Link>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth