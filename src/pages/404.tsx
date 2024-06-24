import Layout from '@/components/Layout/default';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import usePrefersReducedMotion from '@/hooks/usePrefersReducedMotion';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navDelay } from '@/utils';


const Content = () => {
  return (
    <StyledMainContainer className="fillHeight">
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
      <StyledHomeButton href="/">Go Home</StyledHomeButton>
    </StyledMainContainer>
  )
}

const NotFoundPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const location = {
    pathname: "/",
  };
  

  return (
    <Layout location={location}>
      {/* <Helmet title="Page Not Found" /> */}

      {prefersReducedMotion ? (
        <>
          <Content />
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              <Content />
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </Layout>
  )
}

export default NotFoundPage;

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;