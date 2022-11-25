import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=EB Garamond"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=EB Garamond"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/a076d05399.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
