// import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Wrapper from "../components/Layout/wrapper";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </Wrapper>
  );
}
