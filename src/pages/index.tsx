import PageHead from "./components/PageHead";
import { createClient } from "@/prismicio";
import { GetStaticPropsContext } from "next";
import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import { useRouter } from "next/router";

const Home = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <>
      <PageHead title="Ashish Kumar" />
      <Layout>
        <StyledMainContainer className="fillHeight">
          <main>
            <h1>Hello World</h1>
          </main>
        </StyledMainContainer>
      </Layout>
    </>
  );
};

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  // Fetch Homepage Data
  const page = await client.getSingle('homepage');  

  return {
    props: {
      page,
    },
    revalidate: false,
  };
}

export default Home;

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
