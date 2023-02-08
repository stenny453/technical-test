'use client';

import { createContext, useContext, PropsWithChildren, Dispatch, SetStateAction, useState } from 'react';

export declare type ThemeValue = 'dark' | 'light';

export interface ThemeContextValue<T extends string> {
  theme: T;
  setTheme: Dispatch<SetStateAction<ThemeValue>>; 
}

interface ThemeProviderProps<T> {
  defaultTheme?: T;
}

export const ThemeContext = createContext<ThemeContextValue<ThemeValue>>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider = ({ children, defaultTheme }: PropsWithChildren<ThemeProviderProps<ThemeValue>>) => {

  const [myTheme, setMyTheme] = useState<ThemeValue>('light');

  return (
    <ThemeContext.Provider
      value={{
        // @todo: handle this with a state, that can toggle between dark and light
        theme: defaultTheme || myTheme,
        setTheme: (value) => {
          // setMyTheme(checked ? "light" : "dark");
          setMyTheme(value);
        }
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
