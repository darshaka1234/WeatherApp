// // apiSlice.ts
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { CurDataType } from "../../types/weatherTypes";

// // const key = process.env.REACT_APP_API_KEY;
// const key = "cb253ae93939cf7f6b5c39c28eb3cad6";

// export const weatherApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.openweathermap.org/data/2.5/weather",
//   }),
//   endpoints: (builder) => ({
//     getCurData: builder.query<CurDataType, { lat: number; lon: number }>({
//       query: ({ lat, lon }) => `?lat=${lat}&lon=${lon}&appid=${key}`,
//     }),
//     getWeekData: builder.query<any, { lat: number; lon: number; days: number }>(
//       {
//         query: ({ lat, lon, days }) =>
//           `?lat=${lat}&lon=${lon}&cnt=${days}&appid=${key}`,
//       }
//     ),
//   }),
// });

// export const { useGetCurDataQuery, useGetWeekDataQuery } = weatherApi;
