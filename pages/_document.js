import Document, { Head, NextScript, Main } from "next/document";
import { getServerSideToken, getUserScript } from "../lib/auth";

export class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    if (ctx.req) {
      const userData = await getServerSideToken(ctx.req);
      return { ...props, ...userData };
    }
    return { ...props };
  }
  render() {
    const { user = {} } = this.props;
    console.log(user);
    return (
      <html>
        <Head />
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
