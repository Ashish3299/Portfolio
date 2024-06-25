import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { navDelay, loaderDelay } from "@/utils";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `IntroSection`.
 */
export type IntroSectionProps = SliceComponentProps<Content.IntroSectionSlice>;

/**
 * Component for "IntroSection" Slices.
 */
const IntroSection = ({ slice }: IntroSectionProps): JSX.Element => {
  const { subHeading, heading, description, CtaBtnText, CtaBtnLink } =
    slice.primary;

  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = subHeading && <h1>{subHeading}</h1>;
  const two = heading && (
    <PrismicRichText
      field={heading}
      components={{
        heading2: ({ children }) => <h2 className="big-heading">{children}</h2>,
        heading3: ({ children }) => <h3 className="big-heading">{children}</h3>,
      }}
    />
  );
  const three = description && (
    <>
      <PrismicRichText field={description} />
    </>
  );
  const four = CtaBtnText && CtaBtnLink && (
    <PrismicNextLink field={CtaBtnLink} className="email-link">
      {CtaBtnText}
    </PrismicNextLink>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default IntroSection;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;
