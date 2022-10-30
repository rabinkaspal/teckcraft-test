import { runSaga } from "redux-saga";
import { fetchCatFact } from "../catSaga";
import axiosMock from "axios";

describe("Cat Saga", () => {
  it("should test fetchCatFact worker", async () => {
    const url = "/fact";
    const fact = "A cat cannot see directly under its nose.";

    await axiosMock.get.mockResolvedValueOnce({ status: 200, data: { fact } });

    const dispatched = [];
    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      fetchCatFact,
      url
    ).toPromise();

    expect(axiosMock.get).toBeCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(dispatched[0].type).toEqual("catfact/fetchCatFactSuccess");
    expect(dispatched[0].payload).toBe(fact);
  });
});
