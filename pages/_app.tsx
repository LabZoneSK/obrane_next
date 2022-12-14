import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import "../styles/globals.css";

import type { AppProps } from "next/app";

import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
