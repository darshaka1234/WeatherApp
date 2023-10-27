import { createSlice } from "@reduxjs/toolkit";
import { InitialStateProp } from "../../types/weatherTypes";
import { getCurData, getThreeData } from "../../components/api/WeatherApi";

const initialState: InitialStateProp = {
  loading: false,
  value: {
    weather: [{ main: "" }],
    main: {
      temp: 0,
      pressure: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
    },
    rain: 0,
    clouds: {
      all: 0,
    },
    dt: 0,
    name: "",
  },
  weekValue: {
    list: [],
  },
  error: "",
};

export const CurDataSlice = createSlice({
  name: "curData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurData.fulfilled, (state, action) => {
        (state.loading = false), (state.value = action.payload);
      })
      .addCase(getCurData.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(getThreeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getThreeData.fulfilled, (state, action) => {
        (state.loading = false), (state.weekValue = action.payload);
      })
      .addCase(getThreeData.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default CurDataSlice.reducer;
