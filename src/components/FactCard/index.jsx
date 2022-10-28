import React from "react";
import { FactContainer } from "./Styles";
import loader from "../../assets/svgs/loader.svg";
import { BiError } from "react-icons/bi";
import { useSelector } from "react-redux";

const FactCard = () => {
  const factState = useSelector(state => state.factState);
  return (
    <FactContainer>
      {factState.isLoading ? (
        <img src={loader} alt="loader animation" />
      ) : (
        <h2>{factState.fact || <BiError size={120} color="#ec5b2e" />}</h2>
      )}
    </FactContainer>
  );
};

export default FactCard;
