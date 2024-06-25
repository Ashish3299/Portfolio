import Layout from "@/components/Layout/default";
import PageHead from "@/components/PageHead";
import styled from "styled-components";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "@/prismicio";
import { HomepageDocument } from "../../prismicio-types";
import { useAppSelector } from "@/store/store";

type TPage = {
  page: HomepageDocument;
};

const Home: React.FC<TPage> = ({ page }) => {
  const experiences = useAppSelector(state => state.experience.items);
  
  return (
    <>
      <PageHead />
      <Layout>
        <StyledMainContainer className="fillHeight">
          <SliceZone slices={page?.data?.slices} components={components} />
        </StyledMainContainer>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const client = createClient();
  const page = await client.getSingle("homepage");

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
