/* eslint-disable @next/next/no-img-element */
'use client';

import { memo, useEffect, useState } from 'react';
import './styles.css';

/**
 *
 * @todo:
 * - The button should always be at the right bottom of the page
 * - The button should be hidden and should only appear when we scroll for a certain height eg: ~200px
 * - On clicking it, we should be smoothly taken to the top of the page
 *
 *
 */


function ScrollToTopButton() {
  const isBrowser = () => typeof window !== 'undefined'; // This approach is recommended by Next.js

  const [isVisible, setVisible] = useState(false);

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) setVisible(true)
      else setVisible(false);
    });
  }, []);
  
  return (
    <div className="contain-scroll-btn">
      { isVisible && <button className="btn right-bottom-btn" onClick={scrollToTop}>Go to Top</button> }
    </div>
  );
}

export default memo(ScrollToTopButton);
