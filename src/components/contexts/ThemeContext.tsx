'use client';

import { createContext, useContext, PropsWithChildren } from 'react';

export interface ThemeContextValue {
  theme: 'dark' | 'light';
}

interface ThemeProviderProps {
  defaultTheme?: ThemeContextValue['theme'];
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
});

export const ThemeProvider = ({ children, defaultTheme }: PropsWithChildren<ThemeProviderProps>) => {
  return <ThemeContext.Provider value={{ theme: defaultTheme || 'light' }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
