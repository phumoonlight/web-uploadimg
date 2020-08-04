import React from 'react'
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="fb-root" />
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&autoLogAppEvents=1&version=v7.0&appId=3123211517799491"
            nonce="DDTMtXeA"
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
