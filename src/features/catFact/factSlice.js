import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  fact: "",
  isLoading: false,
  isError: false,
  errorMessage: "",
  apiCallCount: 0,
};

export const factSlice = createSlice({
  name: "catfact",
  initialState,
  reducers: {
    fetchCatFact: state => {
      state.isLoading = true;
    },
    fetchCatFactSuccess: (state, action) => {
      state.isLoading = false;
      state.fact = action.payload;
      state.apiCallCount += 1;
    },
    fetchCatFactFailure: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload.message;
      toast.error(action.payload.message);
    },
  },
});

export const { fetchCatFact, fetchCatFactSuccess, fetchCatFactFailure } = factSlice.actions;
export default factSlice.reducer;
