import axios from "axios";

// const key = process.env.REACT_APP_API_KEY;

export const currentWeatherData = async (lat: number, lon: number) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cb253ae93939cf7f6b5c39c28eb3cad6`
    );

    return res.data;
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
};
