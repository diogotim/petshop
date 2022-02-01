import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders header unchanged", () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });

  it("renders a banner", () => {
    const { getAllByRole } = render(<Header />);
    expect(getAllByRole("banner").length).toBe(1);
  });
});
