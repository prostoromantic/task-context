import { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

const ThemeContext = createContext<Theme>('light');

export function useTheme(): Theme {
    return useContext(ThemeContext);
}
