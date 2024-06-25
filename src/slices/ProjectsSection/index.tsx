import { useAppSelector } from "@/store/store";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";
import Icon from "@/components/icons/icon";
import { PrismicNextLink } from "@prismicio/next";
import { linkResolver } from "@/prismicio";
import { ProjectDocument } from "../../../prismicio-types";


type  TProjectInner = {
  project: ProjectDocument
}
const ProjectInner = ({project}: TProjectInner): JSX.Element => {
  const { data } = project;
  const {title, description, featuredImg, publishDate, github, url, techs} = data
  return (
    <div className="project-inner">
      <header>
        <div className="project-top">
          <div className="folder">
            <Icon name="Folder" />
          </div>
          <div className="project-links">
            {github && (
              <PrismicNextLink field={github}>
                <Icon name="GitHub" />
              </PrismicNextLink>
            )}
            {url && (
              <PrismicNextLink className="external" field={url}>
                <Icon name="External" />
              </PrismicNextLink>
            )}
          </div>
        </div>
        
        {title && (
        <h3 className="project-title">
          <PrismicNextLink field={url}>

            {title}
          </PrismicNextLink>
         
        </h3>

        )}


        {description && (
          <div
            className="project-description"
           >
            <PrismicRichText field={description} />
           </div>
          
        )}
      </header>

      <footer>
        {techs && (
          <ul className="project-tech-list">
            {techs.map(({tech}, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}
      </footer>
    </div>
  );
};


/**
 * Props for `ProjectsSection`.
 */
export type ProjectsSectionProps =
  SliceComponentProps<Content.ProjectsSectionSlice>;

/**
 * Component for "ProjectsSection" Slices.
 */
const ProjectsSection = ({ slice }: ProjectsSectionProps): JSX.Element => {
  const { heading, description } = slice.primary
  const projects = useAppSelector((state) => state.projects.items);
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef<any[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // sr.reveal(revealTitle.current, srConfig());
    // sr.reveal(revealArchiveLink.current, srConfig());
    // revealProjects.current.forEach((ref, i) =>
    //   sr.reveal(ref, srConfig(i * 100))
    // );
  }, []);

  const GRID_LIMIT = 6;
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;
  return (
    <StyledProjectsSection>
      {heading && <h2 ref={revealTitle}>{heading}</h2>}

      {description && (
        <div className="inline-link archive-link">
          <PrismicRichText field={description} />
        </div>
      )}

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <StyledProject key={i}>
                  <ProjectInner project={project} />
                </StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <StyledProject
                    key={i}
                    ref={(el: any) => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${
                        i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                  >
                    <ProjectInner project={project} />
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? "Less" : "More"}
      </button>
    </StyledProjectsSection>
  );
};

export default ProjectsSection;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: "";
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;
