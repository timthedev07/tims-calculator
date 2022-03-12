import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout";
import { DragontailProvider } from "dragontail-experimental";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DragontailProvider theme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DragontailProvider>
  );
};

export default App;
