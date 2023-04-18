import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <div>
          <Component {...pageProps} />
        </div>
      </Layout>
    </SSRProvider>
  );
}
