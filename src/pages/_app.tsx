// import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Wrapper from "../components/Layout/wrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}
