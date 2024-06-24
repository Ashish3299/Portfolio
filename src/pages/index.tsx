import Layout from "@/components/Layout/default";
import PageHead from "@/components/PageHead";
import Hero from "@/components/sections/Hero";
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
          {/* <About /> */}
          {/* <Jobs /> */}
          {/* <Featured /> */}
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

