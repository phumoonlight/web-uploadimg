import React from 'react'
import { AppProps as TAppProps } from 'next/app'
import Head from 'next/head'
import '../src/global.css'

const App = ({ Component, pageProps }: TAppProps) => (
  <>
    <Head>
      <title>UploadImg</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="description" content="Upload and explore images" />
      <meta name="keywords" content="upload image, image hosting" />
      <meta name="author" content="Poosarn Moolmuang" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="https://uploadimg.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="UploadImg" />
      <meta property="og:description" content="Upload and explore images" />
      <meta property="og:image" content="https://uploadimg.vercel.app/ogimg.png" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
