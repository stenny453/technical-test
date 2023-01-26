/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

interface UseStickyElementOptions {
  el: HTMLElement | null;
  top?: number;
}

export default function useStickyElement({ el, top }: UseStickyElementOptions) {
  useEffect(() => {
    // put your changes here
  }, [el]);
}
