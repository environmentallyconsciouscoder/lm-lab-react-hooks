import { createContext, useEffect, useState } from "react";
import React from 'react';

type ThemeContextProviderType = {
    children: React.ReactNode
}

type Theme = {
    type: boolean
    toggleTheme: () => void
}

const defaultThemeContext: Theme = {
    type: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleTheme: () => {},
};

export const ThemeContext = createContext<Theme>(defaultThemeContext);


export const ThemeContextProvider = ({children}: ThemeContextProviderType) => {
    const [darkTheme, setDarkTheme] = useState(true)

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    const contextValue: Theme = {
        type: darkTheme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

