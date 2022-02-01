import { render } from "@testing-library/react";
import ProductList from "./ProductList";
import mock from "../../../mock";

describe("ProductList", () => {
  it("renders the product list unchanged", () => {
    const prodList = render(<ProductList products={mock} />);
    expect(prodList).toMatchSnapshot();
  });

  it("renders a link for each product", () => {
    const { getAllByRole } = render(<ProductList products={mock} />);
    expect(getAllByRole("link").length).toEqual(mock.length);
  });
});
