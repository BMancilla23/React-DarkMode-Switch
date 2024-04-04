import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [contextTheme, setContextTheme] = useState(() => {
        // Intenta obtener el tema del localstorage
        const storedTheme = localStorage.getItem("theme");
        // Si el tema almacenado no está vacío y es válido, úsalo; de lo contrario, usa el tema predeterminado "Light"
        return storedTheme ? storedTheme : 'Light';
    })

    // Almacena el tema seleccionado en el localStorage cada vez que cambia
    useEffect(() => {
        localStorage.setItem("theme", contextTheme)
    }, [contextTheme])

    const values = {contextTheme, setContextTheme}

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

