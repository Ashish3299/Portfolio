import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IntroSection`.
 */
export type IntroSectionProps = SliceComponentProps<Content.IntroSectionSlice>;

/**
 * Component for "IntroSection" Slices.
 */
const IntroSection = ({ slice }: IntroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for intro_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default IntroSection;
