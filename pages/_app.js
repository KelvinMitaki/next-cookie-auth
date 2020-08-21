import App from "next/app";

export class _app extends App {
  static async getInitialProps(ctx) {
    const appProps = await App.getInitialProps(ctx);
    return { ...appProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default _app;
