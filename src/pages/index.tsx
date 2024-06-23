import Layout from "@/components/Layout/default";
import PageHead from "@/components/PageHead";


const location = {
  pathname: '/'
}

export default function Home() {
  return (
    <>
      <PageHead />
      <Layout location={location}>
        <main>
          <h1>Hello World</h1>
        </main>
      </Layout>
    </>
  );
}
