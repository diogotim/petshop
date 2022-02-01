import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders footer unchanged", () => {
    const footer = render(<Footer />);
    expect(footer).toMatchSnapshot();
  });

  it("renders a contentinfo", () => {
    const { getAllByRole } = render(<Footer />);
    expect(getAllByRole("contentinfo").length).toBe(1);
  });
});
