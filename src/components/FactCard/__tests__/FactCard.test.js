import { screen } from "@testing-library/react";
import FactCard from "..";
import { renderWithProviders } from "../../../utils/test-utils";

describe("Fact Card", () => {
  it("should have a fact text element", () => {
    renderWithProviders(<FactCard />);
    const factElement = screen.getByTestId("fact-text");
    expect(factElement).toBeInTheDocument();
  });
});
