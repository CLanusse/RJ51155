import { createContext, useState } from "react";



export const LoginContext = createContext()

const MOCK_USERS = [
    {
        id: 1,
        email: 'admin@coder.com',
        password: 'coder'
    },
    {
        id: 2,
        email: 'tutor@coder.com',
        password: 'coder'
    },
    {
        id: 3,
        email: 'a@b.com',
        password: '123'
    },
]

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })
    console.log(user)

    const login = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email && user.password === values.password)

        if (match) {
            setUser({
                email: match.email,
                logged: true
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{
            user,
            login,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )
}