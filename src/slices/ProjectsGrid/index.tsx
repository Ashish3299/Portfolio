import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProjectsGrid`.
 */
export type ProjectsGridProps = SliceComponentProps<Content.ProjectsGridSlice>;

/**
 * Component for "ProjectsGrid" Slices.
 */
const ProjectsGrid = ({ slice }: ProjectsGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for projects_grid (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ProjectsGrid;
