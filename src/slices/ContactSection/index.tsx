import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import { email } from "@/config";
import styled from "styled-components";
import Link from "next/link";

/**
 * Props for `ContactSection`.
 */
export type ContactSectionProps =
  SliceComponentProps<Content.ContactSectionSlice>;

/**
 * Component for "ContactSection" Slices.
 */
const ContactSection = ({ slice }: ContactSectionProps): JSX.Element => {
  const { subHeading, heading, description, CtaBtnText } = slice.primary;
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">{subHeading}</h2>
      <h2 className="title">{heading}</h2>
      <PrismicRichText field={description} />
      <Link className="email-link" href={`mailto:${email}`}>
        {CtaBtnText}
      </Link>
    </StyledContactSection>
  );
};

export default ContactSection;

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;
