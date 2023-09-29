import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = null;

    // 1. create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // 2. login
    const login = ( email, password) =>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    const authInfo = {
        user,
        createUser,
        login,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;