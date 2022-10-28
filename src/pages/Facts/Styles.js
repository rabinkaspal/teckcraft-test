import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 480px) {
    min-height: 85vh;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: #0e5ab0;
    margin: 0;
    margin-bottom: 60px;
    @media (max-width: 480px) {
      margin-bottom: 20px;
      font-size: 2.5rem;
    }
  }
`;
