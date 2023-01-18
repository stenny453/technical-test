'use client';

import cx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat as Font } from '@next/font/google';
import { Courier_Prime as Mono } from '@next/font/google';
import Provider from '../components/Provider';
import { ThemeContext } from '../components/contexts/ThemeContext';
import '../styles/globals.css';
import styles from '../styles/page.module.css';
import '../styles/all.css';
import './welcome.css';

const font = Font({ subsets: ['latin'], variable: '--main-font' });
const mono = Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <html lang="en" color-scheme={theme}>
            <head />
            <body className={cx([font.className])}>
              <div className={styles.bg} />
              <header className={styles.header}>
                <div className="h-inner">
                  <div className={styles.entrypoint}>
                    <Link href="/">
                      <Image src="https://wau.io/static/96_96_w.png" alt="WAU Logo" width={80} height={80} />
                      <span>
                        Technical <span>Test</span>
                      </span>
                    </Link>
                  </div>
                  <div className={styles.actions}>
                    <nav>
                      <ul>
                        <li>
                          <Link href="/#instructions">Instructions</Link>
                        </li>
                        <li>
                          <Link href="/#challenges">Challenges</Link>
                        </li>
                      </ul>
                    </nav>

                    <button className="btn">Connect</button>
                  </div>
                </div>
              </header>
              <section className={styles.content}>{children}</section>
              <footer className={cx(styles.footer)}>
                <div className="f-inner">
                  <p>
                    2023 <Link href="/">WAU I/O</Link> &copy; All rights reserved.
                  </p>
                </div>
              </footer>
            </body>
          </html>
        )}
      </ThemeContext.Consumer>
    </Provider>
  );
}
