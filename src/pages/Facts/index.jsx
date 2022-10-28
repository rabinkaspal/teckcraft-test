import React, { useEffect } from "react";
import CatFactsButton from "../../components/Buttons";
import FactCard from "../../components/FactCard";
import { Container } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatFact } from "../../redux/actions/factActions";

const Facts = () => {
  const dispatch = useDispatch();
  const apiCallCount = useSelector(state => state.totalApiCallCount);

  useEffect(() => {
    dispatch(fetchCatFact());
  }, [dispatch]);

  return (
    <Container>
      <h1>Cat Facts</h1>
      <FactCard />
      <CatFactsButton text="Get a New Fact" btnOnClick={() => dispatch(fetchCatFact())} />
      <p className="counter">Total Facts Displayed: {apiCallCount}</p>
    </Container>
  );
};

export default Facts;
