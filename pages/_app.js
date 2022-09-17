import App from 'next/app';
import Head from 'next/head';
import { DarkModeProvider } from '../contexts/darkMode';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <DarkModeProvider>
        <Head>
          <title>My App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </DarkModeProvider>
    );
  }
}

export default MyApp;