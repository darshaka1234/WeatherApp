// // apiSlice.ts
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// interface User {
//   id: number;
//   name: string;
// }

// const key = process.env.REACT_APP_API_KEY;

// export const weatherApi = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://api.openweathermap.org/data/2.5/weather",
//   }),
//   endpoints: (builder) => ({
//     getCurData: builder.query<User[], any>({
//       query: (lat: number, lon: number) => `?lat${lat}&lon${lon}&appid${key}`,
//     }),
//     getWeekData: builder.query<User[], any>({
//       query: (lat: number, lon: number, days: number) =>
//         `?lat${lat}&lon${lon}&cnt=${days}&appid${key}`,
//     }),
//   }),
// });

// export const { useGetCurDataQuery, useGetWeekDataQuery } = weatherApi;
