import { render } from "@testing-library/react";
import StatusCard from "./StatusCard";
import img from "../../../../public/catAdoption.jpg";

describe("StatusCard", () => {
  it("renders the status card unchanged", () => {
    const statusCard = render(
      <StatusCard src={img} name="test dog" className="testClass" />
    );
    expect(statusCard).toMatchSnapshot();
  });
});
