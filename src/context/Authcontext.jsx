import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';
import axios from 'axios';
export const UserProvider = createContext(null)


const Authcontext = ({ children }) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)
    const [userPhoto, setUserPhoto] = useState('')


    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoader(false)
            if (!user) {
                axios.get('http://localhost:3000/cookedelet', { withCredentials: true }).then(res => {
                    
                })
            }
        });
        return () => {
            return unSubscribe()
        }
    }, [])



    const sendValue = {
        createUser,
        signIn,
        logOut,

        // 
        user,
        loader,
        setUserPhoto,
        userPhoto,

    }

    return (
        <UserProvider.Provider value={sendValue}>
            {children}
        </UserProvider.Provider>
    );
};

export default Authcontext;