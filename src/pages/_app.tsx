// import "@/styles/style.scss";
import type { AppProps } from "next/app";
import Wrapper from "../components/Layout/wrapper";
import { PrismicPreview } from "@prismicio/next";
import { createClient, repositoryName } from "@/prismicio";
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "../store/store";
import { setExperience } from "@/store/slices/experienceSlice";
import { setProjects } from "@/store/slices/projectsSlice";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Fetch data for experience and projects
    const fetchData = async () => {
      const client = createClient();
      try {
        const experienceData = await client.getAllByType("experience");
        const projectsData = await client.getAllByType("project");

        // Dispatch actions to populate Redux store
        store.dispatch(setExperience(experienceData));
        store.dispatch(setProjects(projectsData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Provider store={store}>
      <Wrapper>
        <Component {...pageProps} />
        <PrismicPreview repositoryName={repositoryName} />
      </Wrapper>
    </Provider>
  );
}
