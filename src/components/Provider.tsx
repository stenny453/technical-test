'use client';

import type { PropsWithChildren } from 'react';
import { ThemeProvider, ThemeContextValue } from './contexts/ThemeContext';

interface Props {
  theme?: ThemeContextValue['theme'];
}

export default function Provider({ children, theme }: PropsWithChildren<Props>) {
  return <ThemeProvider defaultTheme={theme || 'light'}>{children}</ThemeProvider>;
}
