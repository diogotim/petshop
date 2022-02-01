import { render } from "@testing-library/react";
import AdoptionCard from "./AdoptionCard";
import img from "../../../../public/catAdoption.jpg";

describe("AdoptionCard", () => {
  it("renders the adoption card unchanged", () => {
    const adopt = render(
      <AdoptionCard name="test" src={img} className="classTest" />
    );
    expect(adopt).toMatchSnapshot();
  });

  it("renders the pet name on the adoption card", () => {
    const petName = "test pet name";
    const { getByText } = render(
      <AdoptionCard name={petName} src={img} className="classTest" />
    );
    expect(getByText(petName)).toBeTruthy();
  });
});
