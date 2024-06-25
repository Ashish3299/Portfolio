import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../Loader";
import Footer from "../Footer";
import Social from "../Social";
import Email from "../Email";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type Props = {
  children: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0 && typeof window !== undefined) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if ( typeof window !== undefined && window.location.hash) {
      const location = window.location
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);
  return (
    <>            
      <div id="root">
        <a className="skip-to-content" href="#content">
          Skip to Content
        </a>

        {isLoading && isHome ? (
          <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
          <StyledContent>
            <Navbar isHome={isHome} />
            <Social isHome={isHome} />
            <Email isHome={isHome} />

            <div id="content">
              {children}
              <Footer />
            </div>
          </StyledContent>
        )}
      </div>
    </>
  );
};

export default Layout;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
