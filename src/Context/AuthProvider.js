import React, { useState } from 'react';
import { createContext } from 'react';
import { app } from '../Firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import { useEffect } from 'react';


export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const logIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const googleSignUp = (provider)=>{
        return signInWithPopup(auth, provider)
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        googleSignUp,
        logOut,
        logIn,
        updateUserProfile,
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;