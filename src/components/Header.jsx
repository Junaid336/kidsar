import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { auth, getUserinfo, logOut } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Avatar from './Avatar';

const user = {
  name: 'U',
  email: '',
  imageUrl: '/images/user_avatar.png'
}
const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Course', href: '/', current: false },
  { name: 'Quiz', href: '/quiz', current: false },
  { name: 'Parents Guide', href: '/parentsguide', current: false },
  { name: 'About Us', href: '#', current: false }
]
const userNavigation = [
  { name: 'Profile', to: '/profile' },
  { name: 'Sign'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] =useState(location.pathname);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState({});
  
  useEffect(()=>{
    setSelected(location.pathname)
  },[location])

//   useEffect(()=>{
//     !!auth.currentUser ? setIsLogin(true) : setIsLogin(false);
//     // console.log("state: ", isLogin, "userData:", auth.currentUser)
//   },[])

//   onAuthStateChanged(auth, user => {
//     if(!!user) {
//         setIsLogin(true);
//     } else {
//         setIsLogin(false);
//     }
//   })

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const response = await getUserinfo(user.email);
            console.log(response);
            setUserData(response);
            setIsLogin(true);
        } else {
            setIsLogin(false);
            setUserData({});
        }
        });

        return () => unSubscribe();
  },[]);

  const handleSignOut = () => {
    logOut()
    .then(()=> {
        navigate("/");
        setIsLogin(false);
        toast.success("Logged Out!")
    })
    .catch((error)=>{
        console.log(error)
        toast.error("Somthing went wrong!");
    })
  }

  return (
    <div className="min-h-full">
        <Disclosure as="nav" className="bg-transparent">
            {({ open }) => (
            <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                               <Link to="/"> 
                                    <img
                                        className="h-10 w-10"
                                        src="/images/logo.png"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.href === selected
                                        ? 'bg-indigo-950 text-white'
                                        : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                    aria-current={item.href === selected ? 'page' : undefined
                                }
                                    >
                                    {item.name}
                                    </Link>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                <div>
                                    <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    {
                                        !(isLogin && userData?.firstName) ? 
                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> :
                                        <Avatar text={`${userData.firstName.toUpperCase()[0]}`} size='h-8 w-8' />
                                    }
                                    
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right p-1 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userNavigation.map((item) => {
                                        if(item.name === 'Profile' && isLogin) {
                                            return(
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <Link
                                                            className={classNames(active ? 'bg-gray-100': '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            to={item.to}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            )
                                        }
                                        if(item.name === 'Sign') {
                                            return(
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <button
                                                         onClick={isLogin ? handleSignOut : ()=>navigate("/login")}
                                                        className={classNames(active ? 'bg-gray-100': '', 'block px-4 py-2 text-sm text-gray-700 w-full text-left')}
                                                        >
                                                            {!isLogin ? 'Sign In' : 'Sign Out'}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            )
                                        }
                                    })}
                                    </Menu.Items>
                                </Transition>
                                </Menu>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </Disclosure.Button>
                        </div>
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="span"
                        className={classNames(
                        item.href === location.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.href === location.pathname? 'page' : undefined}
                    >
                        <Link to={item.href}>{item.name}</Link>
                    </Disclosure.Button>
                    ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                        {
                            !(isLogin && !! auth?.currentUser?.displayName) ? 
                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" /> :
                            <Avatar text={`${auth?.currentUser?.displayName.toUpperCase()[0]}`} size='h-10 w-10' />
                        }
                    </div>
                    {
                        isLogin && (
                        <div className="ml-3">
                            <div className="text-base font-medium leading-none text-white">{auth?.currentUser?.displayName}</div>
                            <div className="text-sm font-medium leading-none text-gray-400">{auth?.currentUser?.email}</div>
                        </div>
                        )
                    }
                    
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => {

                        if(item.name === 'Profile' && isLogin){
                            return (
                                <Disclosure.Button
                                key={item.name}
                                as='span'
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                > 
                                    <Link to={item.to}>{item.name}</Link>
                                </Disclosure.Button>
                            )
                        }
                        if(item.name === 'Sign'){
                            return (
                                <Disclosure.Button
                                key={item.name}
                                as='button'
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                > 
                                    {isLogin ? 'Sign In' : 'Sign Out'}
                                </Disclosure.Button>
                            )
                        }

                        // <Disclosure.Button
                        // key={item.name}
                        // as="a"
                        // href={item.href}
                        // className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        // >
                        // {item.name}
                        // </Disclosure.Button>

                    })}
                    </div>
                </div>
                </Disclosure.Panel>
            </>
            )}
        </Disclosure>

        <main>
            {children}
        </main>
    </div>
  )
}

export default Header