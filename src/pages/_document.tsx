import { useEffect } from 'react';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.onload = () => {
      // Khi tệp CSS được tải xong, bạn có thể thực hiện các hành động khác ở đây
    };

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Html lang='en'>
      <Head>
        <link rel='stylesheet' href='/antd-custom.css' />
        {/* <link rel="shortcut icon" href="/static/logo.svg" /> */}
        <link rel='icon' href='/logo.svg' />
        <script async src='https://cdn.tailwindcss.com' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
