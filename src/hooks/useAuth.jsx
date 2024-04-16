import { useEffect, useState } from "react";
import { auth, getUserinfo } from "../firebase";

export const useAuth  = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    console.log("from the useAuth")

    useEffect(()=>{
        console.log("hello world")
        !!auth.currentUser ? setIsLoggedIn(true) : setIsLoggedIn(false);
    },[auth]);

    useEffect(()=>{
        const getData = async () => {
            const response = await getUserinfo();
            console.log("user data", response);
            setUserData(response);
        }
        getData();
    },[auth])

    return { isLoggedIn, userData }
}