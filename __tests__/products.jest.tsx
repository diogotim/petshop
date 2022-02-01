import { render } from "@testing-library/react";
import Products, {
  getStaticProps,
  getStaticPaths,
} from "../pages/products/[page]";
import APIRequest from "../modules/api/lib/API";
import mock from "../mock";
const mockedProducts = mock.splice(0, 6);

const mockedAPI = jest.mocked(APIRequest, true);

describe("Products", () => {
  it("renders products unchanged", () => {
    const prods = render(
      <Products page={1} products={mockedProducts} total={mock.length} />
    );
    expect(prods).toMatchSnapshot();
  });
});

describe("Products data fetching", () => {
  beforeEach(() => {
    mockedAPI.mockClear();
  });

  it("getStaticProps returns products data from the API", async () => {
    const jsonRes = () =>
      new Promise((res) => res({ data: mockedProducts, total: mock.length }));
    // @ts-ignore
    mockedAPI.mockReturnValue(new Promise((res) => res({ json: jsonRes })));

    const staticProps = await getStaticProps({ params: { page: "1" } });
    expect(staticProps).toStrictEqual({
      props: {
        products: mockedProducts,
        page: 1,
        total: Math.ceil(mock.length / 5),
      },
    });
  });

  it("getStaticPaths returns product pages", async () => {
    const jsonRes = () => new Promise((res) => res({ data: [mock[0]] }));
    // @ts-ignore
    mockedAPI.mockReturnValue(new Promise((res) => res({ json: jsonRes })));

    const staticPaths = await getStaticPaths();
    expect(staticPaths).toStrictEqual({
      paths: [{ params: { page: "1" } }],
      fallback: false,
    });
  });
});
