import { runSaga } from "redux-saga";
import axios from "axios";
import { fetchCatFact } from "../catSaga";

jest.mock(axios);

describe("Cat Saga", () => {
  it("should test fetchCatFact worker", async () => {
    const fact = "A cat cannot see directly under its nose.";

    axios.get.mockResolvedValue(fact);

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchCatFact
    ).toPromise();

    expect(dispatched[0].type).toEqual("catfact/fetchCatFactSuccess");
    expect(dispatched[0].payload).toBeTruthy();
  });
});
