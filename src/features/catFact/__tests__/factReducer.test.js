import reducer, { fetchCatFact, fetchCatFactSuccess, fetchCatFactFailure } from "../factSlice";

describe("Fact Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      fact: "",
      isLoading: false,
      isError: false,
      errorMessage: "",
      apiCallCount: 0,
    });
  });

  it("should set loading to true", () => {
    expect(reducer(undefined, fetchCatFact).isLoading).toBeTruthy();
  });

  it("adds a cat fact to store and increments api call count by 1", () => {
    const previousState = {
      fact: "",
      isLoading: false,
      isError: false,
      errorMessage: "",
      apiCallCount: 0,
    };

    expect(reducer(previousState, fetchCatFactSuccess("There are approximately 100 breeds of cat."))).toEqual({
      fact: "There are approximately 100 breeds of cat.",
      isLoading: false,
      isError: false,
      errorMessage: "",
      apiCallCount: 1,
    });
  });

  it("should handle fetch cat fact failure", () => {
    const previousState = {
      fact: "There are approximately 100 breeds of cat.",
      isLoading: false,
      isError: false,
      errorMessage: "",
      apiCallCount: 1,
    };

    expect(reducer(previousState, fetchCatFactFailure({ message: "Network Error" }))).toEqual({
      fact: "There are approximately 100 breeds of cat.",
      isLoading: false,
      isError: true,
      errorMessage: "Network Error",
      apiCallCount: 1,
    });
  });
});
