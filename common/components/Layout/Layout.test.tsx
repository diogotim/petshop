import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders layout unchanged", () => {
    const layout = render(<Layout>Hey</Layout>);
    expect(layout).toMatchSnapshot();
    expect(layout.getByText("Hey")).toBeTruthy();
  });

  it("the layout renders a header", () => {
    const { getAllByRole } = render(<Layout>Hey</Layout>);
    const headersInLayout = getAllByRole("banner");
    expect(headersInLayout.length).toBe(1);
  });

  it("the layout renders a footer", () => {
    const { getAllByRole } = render(<Layout>Hey</Layout>);
    const footersInLayout = getAllByRole("contentinfo");
    expect(footersInLayout.length).toBe(1);
  });
});
