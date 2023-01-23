import { Html, Head, Main, NextScript } from 'next/document';
import { Navbar } from '@/components';

const pages = [
  {
    name: 'Login',
    link: '/login',
  },
];

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <Navbar home='MPG Tracker' pages={pages} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
