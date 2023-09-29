import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    // 1. create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // 2. login
    const login = ( email, password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }
    // 3.LogOut
    const logOut = () =>{
        return signOut(auth);
    }
    // 3. observe auth state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        login,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;