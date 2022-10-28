import styled from "styled-components";

export const Icon = styled.div`
  width: ${props => props.size || 20}px;
  height: ${props => props.size || 20}px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  svg {
    font-size: 30px;
    color: white;
    animation: iconRotate 3s cubic-bezier(0, 0, 0, 0) infinite;
  }

  @keyframes iconRotate {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
