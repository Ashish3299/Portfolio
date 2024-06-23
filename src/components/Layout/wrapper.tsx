import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "@/styles";

type Wrapper = {
  children: any;
};

const Wrapper: React.FC<Wrapper> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className={`app-wrapper`}>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default Wrapper;
