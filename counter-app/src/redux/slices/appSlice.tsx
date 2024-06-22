import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface appSliceInitialStateType {
  count: number;
  number: number;
}
const initialState: appSliceInitialStateType = {
  count: 0,
  number: 1,
};
const appSlice = createSlice({
  name: "countApp",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += state.number;
    },
    decreaseCount: (state) => {
      state.count -= state.number;
    },
    updateNumber: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, updateNumber } = appSlice.actions;
export default appSlice.reducer;
