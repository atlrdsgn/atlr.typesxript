/** @format */

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class AppDoc extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head />
        <body style={{ opacity: '0' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDoc
