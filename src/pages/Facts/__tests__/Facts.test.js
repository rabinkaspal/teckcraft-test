import { screen } from "@testing-library/react";
import Facts from "..";
import { renderWithProviders } from "../../../utils/test-utils";

describe("Fact Page", () => {
  it("should render without crashing", () => {
    renderWithProviders(<Facts />);
  });

  it("should render four elements", () => {
    renderWithProviders(<Facts />);
    expect(screen.getByText("Cat Facts")).toBeInTheDocument();
    expect(screen.getByTestId("fact-text")).toBeInTheDocument();
    expect(screen.getByTestId("fact-button")).toBeInTheDocument();
    expect(screen.getByText(/Total Facts Displayed:/)).toBeInTheDocument();
  });
});
