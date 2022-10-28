import { fireEvent, render, screen } from "@testing-library/react";
import CatFactsButton from "..";
import renderer from "react-test-renderer";

const mockedBtnOnClick = jest.fn();

describe("Button", () => {
  it("should have same label as text props", () => {
    render(<CatFactsButton text="Cat Fact Button Test" />);
    const btnElement = screen.getByText("Cat Fact Button Test");
    expect(btnElement).toBeInTheDocument();
  });

  it("should show loading text when props loading true", () => {
    render(<CatFactsButton text="Get Cat Fact" loading={true} />);
    const btnElement = screen.getByText("Loading...");
    expect(btnElement).toBeInTheDocument();
  });

  it("should call btnOnClick on click", () => {
    render(<CatFactsButton text="Cat Fact Button" btnOnClick={mockedBtnOnClick} />);
    let btnElement = screen.getByText("Cat Fact Button");
    expect(btnElement).toBeInTheDocument();

    fireEvent.click(btnElement);
    expect(mockedBtnOnClick).toBeCalled();
  });

  it("should be disabled when loading props is true", () => {
    render(<CatFactsButton text="Cat Fact Button" loading={true} />);
    let btnElement = screen.getByText("Loading...");
    expect(btnElement).toBeDisabled();
  });

  it("matches snapshot", () => {
    const tree = renderer.create(<CatFactsButton text="Get a new fact" />);
    expect(tree).toMatchSnapshot();
  });
});
