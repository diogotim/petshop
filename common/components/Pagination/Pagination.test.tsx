import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders the pagination unchanged", () => {
    const pag = render(
      <Pagination perPage={6} currentPage={1} total={12} prefix="/products/" />
    );
    expect(pag).toMatchSnapshot();
  });

  it("renders all pages if there's lesser than the maximum", () => {
    const { getAllByRole } = render(
      <Pagination perPage={6} currentPage={1} total={4} prefix="/products/" />
    );
    expect(getAllByRole("link").length).toEqual(4);
  });

  it("do not render more than the page limit", () => {
    const { getAllByRole } = render(
      <Pagination perPage={6} currentPage={1} total={20} prefix="/products/" />
    );
    expect(getAllByRole("link").length).toEqual(6);
  });

  it("renders starting pages if the current page is low", () => {
    const { getByText } = render(
      <Pagination perPage={6} currentPage={1} total={12} prefix="/products/" />
    );
    for (let i = 1; i < 7; i += 1) {
      expect(getByText(i.toString())).toBeTruthy();
    }
  });

  it("renders last pages if the current page is high", () => {
    const { getByText } = render(
      <Pagination perPage={6} currentPage={10} total={12} prefix="/products/" />
    );
    for (let i = 7; i < 13; i += 1) {
      expect(getByText(i.toString())).toBeTruthy();
    }
  });

  it("renders middle pages if the current page is not low or high", () => {
    const { getByText } = render(
      <Pagination perPage={6} currentPage={5} total={12} prefix="/products/" />
    );
    for (let i = 3; i < 9; i += 1) {
      expect(getByText(i.toString())).toBeTruthy();
    }
  });

  it("appends the prefix to the links", () => {
    const { getAllByRole } = render(
      <Pagination perPage={6} currentPage={1} total={12} prefix="/products/" />
    );
    expect(
      getAllByRole("link").every((l) =>
        l.getAttribute("href")?.startsWith("/products/")
      )
    ).toBeTruthy();
  });
});
