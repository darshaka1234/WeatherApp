import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CurDataType,
  GetCurDataArgs,
  WeekDataType,
} from "../../types/weatherTypes";

// // const key = process.env.REACT_APP_API_KEY;

// export const currentWeatherData = async (lat: number, lon: number) => {
//   try {
//     const res = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cb253ae93939cf7f6b5c39c28eb3cad6`
//     );

//     return res.data;
//   } catch (err) {
//     console.error("Error fetching weather data:", err);
//   }
// };

export const getCurData = createAsyncThunk<CurDataType, GetCurDataArgs>(
  "getAllData",
  async ({ lat, lon }) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cb253ae93939cf7f6b5c39c28eb3cad6`
    );
    console.log("one", res.data);
    return res.data;
  }
);

export const getThreeData = createAsyncThunk<WeekDataType, GetCurDataArgs>(
  "get3Data",
  async ({ lat, lon }) => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=cb253ae93939cf7f6b5c39c28eb3cad6`
    );
    console.log("theree", res.data);
    return res.data;
  }
);
