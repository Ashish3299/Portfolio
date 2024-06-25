import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ExperienceSection`.
 */
export type ExperienceSectionProps =
  SliceComponentProps<Content.ExperienceSectionSlice>;

/**
 * Component for "ExperienceSection" Slices.
 */
const ExperienceSection = ({ slice }: ExperienceSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for experience_section (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default ExperienceSection;
