'use client';

import { createContext, useContext, PropsWithChildren } from 'react';

export declare type ThemeValue = 'dark' | 'light';

export interface ThemeContextValue<T extends string> {
  theme: T;
}

interface ThemeProviderProps<T> {
  defaultTheme?: T;
}

export const ThemeContext = createContext<ThemeContextValue<ThemeValue>>({
  theme: 'light',
});

export const ThemeProvider = ({ children, defaultTheme }: PropsWithChildren<ThemeProviderProps<ThemeValue>>) => {
  return (
    <ThemeContext.Provider
      value={{
        // @todo: handle this with a state, that can toggle between dark and light
        theme: defaultTheme || 'light',
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
