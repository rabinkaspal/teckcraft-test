import React from "react";
import { useSelector } from "react-redux";
import LoadingIndicator from "../LoadingIndicator";
import { ButtonLoadNewFact } from "./Styles";

const CatFactsButton = ({ text, btnOnClick }) => {
  const loading = useSelector(s => s.factState.isLoading);
  return (
    <ButtonLoadNewFact onClick={btnOnClick} disabled={loading}>
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
