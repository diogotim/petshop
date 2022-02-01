import { render } from "@testing-library/react";
import Brands from "./Brands";

describe("Brands", () => {
  it("renders the brands unchanged", () => {
    const brands = render(<Brands />);
    expect(brands).toMatchSnapshot();
  });
});
