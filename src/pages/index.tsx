import Layout from "@/components/Layout/default";
import PageHead from "@/components/PageHead";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";
import Jobs from "@/components/sections/Jobs";
import Projects from "@/components/sections/Projects";
import styled from "styled-components";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { GetStaticPropsContext } from "next/types";
import { AppProps } from "next/app";
import { HomepageDocument } from "../../prismicio-types";

type TPage = {
  page: HomepageDocument
}

const Home: React.FC<TPage> = ({ page }) => {
  return (
    <>      
      <PageHead />
      <Layout>
        <StyledMainContainer className="fillHeight">

          <SliceZone slices={page?.data?.slices} components={components} />
          {/* <Hero /> */}
          {/* <About /> */}
          {/* <Jobs /> */}
          {/* <Featured /> */}
          {/* <Projects /> */}
          {/* <Contact /> */}
        </StyledMainContainer>
      </Layout>
    </>
  );
};

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient();

  // Fetch Homepage Data
  const page = await client.getSingle("homepage");

  return {
    props: {
      page,
      // header,
      // settings,
      // footer,
    },
    revalidate: false,
  };
}

export default Home;

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
