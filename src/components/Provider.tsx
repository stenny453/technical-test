'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider, ThemeValue } from './contexts/ThemeContext';
import { WalletProvider } from './Connect';
import { store } from '../store/store';
import { Provider as MainProvider } from 'react-redux'
interface Props {
  theme?: ThemeValue;
}

export default function Provider({ children, theme }: PropsWithChildren<Props>) {
  return (
    <MainProvider store={store}>
      <ThemeProvider defaultTheme={theme}>
        <WalletProvider>{children}</WalletProvider>
      </ThemeProvider>
    </MainProvider>
  );
}
