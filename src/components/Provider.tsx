'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider, ThemeValue } from './contexts/ThemeContext';
import { WalletProvider } from './Connect';

interface Props {
  theme?: ThemeValue;
}

export default function Provider({ children, theme }: PropsWithChildren<Props>) {
  return (
    <ThemeProvider defaultTheme={theme}>
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  );
}
