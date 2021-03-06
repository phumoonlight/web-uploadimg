import React from 'react'
import Head from 'next/head'
import { AppProps as TAppProps } from 'next/app'
import { SEO } from '../src/config'
import '../src/styles/global.css'

const App = ({ Component, pageProps }: TAppProps) => (
  <>
    <Head>
      <title>{SEO.title}</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={SEO.description} />
      <meta name="keywords" content={SEO.keywords} />
      <meta property="og:url" content={SEO.openGraph.url} />
      <meta property="og:type" content={SEO.openGraph.type} />
      <meta property="og:title" content={SEO.openGraph.title} />
      <meta property="og:description" content={SEO.openGraph.description} />
      <meta property="og:image" content={SEO.openGraph.image} />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
