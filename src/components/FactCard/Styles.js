import styled from "styled-components";
import peepingCat from "../../assets/images/peeping_cat.png";

export const FactContainer = styled.div`
  margin-bottom: 40px;
  padding: 25px;
  border-radius: 5px;
  background-color: #ffffff30;
  box-shadow: 2px 2px 12px 2px #dddddd;
  width: 100%;
  min-height: 300px;
  height: max-content;
  position: relative;
  z-index: 5;
  transition: all 0.4s ease-in-out;
  transition-delay: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 20px;
  }

  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: -133px;
    left: -40px;
    background-size: 80%;
    background-repeat: no-repeat;
    background-image: url(${peepingCat});

    @media (max-width: 480px) {
      display: none;
    }
  }
  :after {
    content: '"';
    font-size: 20rem;
    font-weight: bold;
    color: #d3d3d338;
    font-style: italic;
    position: absolute;
    left: -13px;
    top: -12px;
    z-index: -1;
  }

  h2 {
    width: 100%;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    color: #0e5ab0;
    line-height: 1.2;
    user-select: none;

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
`;
