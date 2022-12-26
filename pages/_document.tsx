import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <Script src="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600&display=swap" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link
          rel="icon"
          href="https://media-exp1.licdn.com/dms/image/C510BAQHbE-Z5jhT-8A/company-logo_200_200/0/1546428538898?e=2147483647&v=beta&t=NbeSfju9nC7l-0RK87HoVJC8L9CyXOojN5YEjJ3302c"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
