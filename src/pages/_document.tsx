import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link rel='icon' href='favicon.jpg' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Abel&display=swap'
            rel='stylesheet'
          ></link>
          <title>{'Romane Faupin'}</title>
          <meta name='theme-color' content='white' />
          <meta
            name='description'
            content="Née en 1999, Romane FAUPIN vit et travaille à Paris. Après un bac ES en candidat libre et des études technique de photographie, elle s'oriente vers une production plasticienne."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
