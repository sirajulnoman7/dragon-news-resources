import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null)
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)
    //    create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logIn user 
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // sign out 
    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    //  observer add
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
          console.log('observer added',currentUser)
          setUser(currentUser)
          setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        logInUser,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;