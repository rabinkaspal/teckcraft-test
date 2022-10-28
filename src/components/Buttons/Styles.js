import styled from "styled-components";

export const ButtonLoadNewFact = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  padding: 12px 25px;
  box-shadow: 0 0 0 2px #fff, 0 0 0px 4px #4caf50;
  border-radius: 36px;
  font-family: "Rubik", sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.05s ease-out;
  user-select: none;

  :active {
    transform: scale(0.9);
  }

  :hover {
    /* border-radius: 4px; */
    background-color: #027b70;
    /* box-shadow: 0 0 0 3px #fff, 0 0 0px 5px #027b70; */
  }

  :disabled {
    background: #027b90;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
