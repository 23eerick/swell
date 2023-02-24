import Head from 'next/head'

import GlobalStyle from '@/styles/globalstyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Swel</title>
      </Head>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
