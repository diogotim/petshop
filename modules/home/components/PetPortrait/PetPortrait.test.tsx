import { render } from "@testing-library/react";
import PetPortrait from "./PetPortrait";
import img from "../../../../public/catAdoption.jpg";

describe("PetPortrait", () => {
  it("renders the pet portrait unchanged", () => {
    const petPortrait = render(<PetPortrait className="test" src={img} />);
    expect(petPortrait).toMatchSnapshot();
  });
});
