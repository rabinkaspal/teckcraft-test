import React from "react";
import LoadingIndicator from "../LoadingIndicator";
import { ButtonLoadNewFact } from "./Styles";

const CatFactsButton = ({ text, btnOnClick, loading }) => {
  return (
    <ButtonLoadNewFact onClick={btnOnClick} disabled={loading} data-testid="fact-button">
      {loading ? (
        <>
          <LoadingIndicator />
          Loading...
        </>
      ) : (
        text
      )}
    </ButtonLoadNewFact>
  );
};

export default CatFactsButton;
