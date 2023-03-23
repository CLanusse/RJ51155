import { createContext, useState } from "react";

export const DarkMode = createContext()

export const DarkModeProvider = ({children}) => {
    const [dark, setDark] = useState(false)

    const cambiarModo = () => {
        setDark(!dark)
    }

    return (
        <DarkMode.Provider value={{
            dark,
            cambiarModo
        }}>
            {children}
        </DarkMode.Provider>
    )
}