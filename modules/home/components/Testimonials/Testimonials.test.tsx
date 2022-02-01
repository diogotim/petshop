import { render } from "@testing-library/react";
import Testimonials from "./Testimonials";

describe("Testimonials", () => {
  it("renders the status card unchanged", () => {
    const testimonials = render(<Testimonials />);
    expect(testimonials).toMatchSnapshot();
  });
});
