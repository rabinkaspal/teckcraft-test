import React, { useEffect } from "react";
import CatFactsButton from "../../components/Buttons";
import FactCard from "../../components/FactCard";
import { Container } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatFact } from "../../features/catFact/factSlice";

const Facts = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.factState);

  useEffect(() => {
    dispatch(fetchCatFact());
  }, [dispatch]);

  return (
    <Container>
      <h1>Cat Facts</h1>
      <FactCard />
      <CatFactsButton text="Get a New Fact" btnOnClick={() => dispatch(fetchCatFact())} loading={state.isLoading} />
      <p className="counter">Total Facts Displayed: {state.apiCallCount}</p>
    </Container>
  );
};

export default Facts;
