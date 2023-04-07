import { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, provider } from "../firebase/config";


export const LoginContext = createContext()


export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => console.log(err))
    }

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((err) => console.log(err))
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((user) => {
                console.log(user)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false
                })
            })

    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true
                })
            } else {
                logout()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout,
            register,
            googleLogin
        }}>
            {children}
        </LoginContext.Provider>
    )
}