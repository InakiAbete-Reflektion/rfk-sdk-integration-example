import { PageController } from '@rfk-sdk/react';
import Head from 'next/head';

import Link from 'next/link';
import { useEffect } from 'react';
import './reflektion';

export default function Layout({ children, title = 'This is the default title' }) {
  useEffect(() => {
    PageController.getContext().setPageUri(window.location.pathname);
  }, []);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        Pages: <nav>
          <Link href="/sdk/test">
            <a>Page example 1</a>
          </Link>{' '}
          <Link href="/sdk/test2">
            <a>Page example 2</a>
          </Link>{' '}
          <Link href="/sdk/test3">
            <a>Page example 3</a>
          </Link>{' '}
        </nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  );
}
