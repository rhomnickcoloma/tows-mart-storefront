import type { AppProps } from "next/app";
import "./globals.css";
import NoAuthLayout from "@towns/layouts/no-auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NoAuthLayout>
        <Component {...pageProps} />
      </NoAuthLayout>
    </>
  );
}
