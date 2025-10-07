import { createContext, useEffect, useState } from "react";
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
    onAuthStateChanged,
    sendPasswordResetEmail,
} from "firebase/auth";
import app from "../Friebase file/Firebase";
import { getAuth } from "firebase/auth";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updatePhoto = (name, url) => {
        if (!auth.currentUser) return;
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        });
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const resetPassword = async (email) => {
        setLoading(true);
        console.log(email);
        const res = await sendPasswordResetEmail(auth, email);
        console.log(res);
        return res
    };
    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        loginUser,
        updatePhoto,
        user,
        logOut,
        googleLogin,
        resetPassword,
        loading,
        facebookLogin
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;