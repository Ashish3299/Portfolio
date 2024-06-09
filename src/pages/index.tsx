import PageHead from "./components/PageHead";
import { createClient } from "@/prismicio";
import { GetStaticPropsContext } from "next";

import React from "react";

const Home = () => {  
  
  return (
    <>
      <PageHead title="Ashish Kumar" />
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  );
};

export async function getStaticProps({ previewData }: GetStaticPropsContext) {
  const client = createClient({ previewData });

  // Fetch Homepage Data
  const page = await client.getSingle('homepage');

  console.log(page);
  

  return {
    props: {
      page,
    },
    revalidate: false,
  };
}


export default Home;
