import Layout from "@/components/Layout/default";
import PageHead from "@/components/PageHead";
import About from "@/components/sections/About";
import Featured from "@/components/sections/Featured";
import Hero from "@/components/sections/Hero";
import Jobs from "@/components/sections/Jobs";
import styled from "styled-components";

const location = {
  pathname: "/",
};

export default function Home() {
  return (
    <>
      <PageHead />
      <Layout location={location}>
        <StyledMainContainer className="fillHeight">
          <Hero />
          <About />
          <Jobs />
          <Featured />
          {/* <Projects /> */}
          {/* <Contact /> */}
        </StyledMainContainer>
      </Layout>
    </>
  );
}

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

