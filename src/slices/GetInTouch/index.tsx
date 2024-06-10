import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GetInTouch`.
 */
export type GetInTouchProps = SliceComponentProps<Content.GetInTouchSlice>;

/**
 * Component for "GetInTouch" Slices.
 */
const GetInTouch = ({ slice }: GetInTouchProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for get_in_touch (variation: {slice.variation})
      Slices
    </section>
  );
};

export default GetInTouch;
