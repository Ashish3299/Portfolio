import PageHead from "./components/PageHead";
import { createClient } from "@/prismicio";
import { GetStaticPropsContext } from "next";
import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import { useRouter } from "next/router";
import About from "./components/sections/about";
import Hero from "./components/sections/hero";
import Jobs from "./components/sections/jobs";
import Featured from "./components/sections/featured";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";

const Home = () => {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <>
      <PageHead title="Ashish Kumar" />
      <Layout>
        <StyledMainContainer className="fillHeight">
          <Hero />
          <About />
          <Jobs />
          <Featured />
          <Projects />
          <Contact />
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
