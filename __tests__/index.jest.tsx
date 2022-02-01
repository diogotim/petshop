import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import mock from "../mock";
import { getStaticProps } from "../pages/index";
import APIRequest from "../modules/api/lib/API";
const mockedAPI = jest.mocked(APIRequest, true);

const bestSellers = mock.splice(0, 5);

describe("Home", () => {
  it("renders homepage unchanged", () => {
    const home = render(<Home bestSellers={bestSellers} />);
    expect(home).toMatchSnapshot();
  });
});

describe("Home data fetching", () => {
  beforeEach(() => {
    mockedAPI.mockClear();
  });

  it("getStaticProps returns products from the API", async () => {
    const jsonRes = () => new Promise((res) => res({ data: bestSellers }));
    // @ts-ignore
    mockedAPI.mockReturnValue(new Promise((res) => res({ json: jsonRes })));

    const staticProps = await getStaticProps();
    expect(staticProps).toStrictEqual({
      props: {
        bestSellers: bestSellers,
      },
    });
  });
});
