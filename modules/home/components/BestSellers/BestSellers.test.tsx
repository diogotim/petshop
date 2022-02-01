import { render } from "@testing-library/react";
import BestSellers from "./BestSellers";
import mock from "../../../../mock";

describe("BestSellers", () => {
  it("renders the best sellers unchanged", () => {
    const bestSellers = render(<BestSellers products={mock} />);
    expect(bestSellers).toMatchSnapshot();
  });
});
