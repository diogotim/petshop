import { render } from "@testing-library/react";
import Product, {
  getStaticPaths,
  getStaticProps,
} from "../pages/product/[slug]";
import mock from "../mock";
import APIRequest from "../modules/api/lib/API";
import { formatProductSlug } from "../common/util/util";
const mockedProduct = mock[0];

const mockedAPI = jest.mocked(APIRequest, true);

describe("Product", () => {
  it("renders product unchanged", () => {
    const prod = render(<Product product={mockedProduct} />);
    expect(prod).toMatchSnapshot();
  });

  it("renders a buy button", () => {
    const { getAllByRole } = render(<Product product={mockedProduct} />);
    expect(getAllByRole("button").length).toEqual(1);
  });
});

describe("Product data fetching", () => {
  beforeEach(() => {
    mockedAPI.mockClear();
  });

  it("getStaticProps returns product data from the API", async () => {
    const jsonRes = () => new Promise((res) => res({ data: mockedProduct }));
    // @ts-ignore
    mockedAPI.mockReturnValue(new Promise((res) => res({ json: jsonRes })));

    const staticProps = await getStaticProps({
      params: { slug: formatProductSlug(mockedProduct.name) },
    });
    expect(staticProps).toStrictEqual({
      props: {
        product: mockedProduct,
      },
    });
  });

  it("getStaticPaths returns product slugs", async () => {
    const jsonRes = () => new Promise((res) => res({ data: [mockedProduct] }));
    // @ts-ignore
    mockedAPI.mockReturnValue(new Promise((res) => res({ json: jsonRes })));

    const staticPaths = await getStaticPaths();
    expect(staticPaths).toStrictEqual({
      paths: [{ params: { slug: formatProductSlug(mockedProduct.name) } }],
      fallback: false,
    });
  });
});
