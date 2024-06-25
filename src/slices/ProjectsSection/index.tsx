import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectsSection`.
 */
export type ProjectsSectionProps =
  SliceComponentProps<Content.ProjectsSectionSlice>;

/**
 * Component for "ProjectsSection" Slices.
 */
const ProjectsSection = ({ slice }: ProjectsSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for projects_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectsSection;
