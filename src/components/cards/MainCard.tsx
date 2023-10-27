import Lottie from "lottie-react";
import rainy from "../../assets/lotties/rainy.json";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";
import { getCurData, getThreeData } from "../api/WeatherApi";

const MainCard = () => {
  const dispatch = useAppDispatch();
  const { name, dt, main } = useAppSelector((state) => state.curData.value);
  const { temp } = main;

  useEffect(() => {
    dispatch(getCurData({ lat: 6.9271, lon: 79.8612 }));
    dispatch(getThreeData({ lat: 6.9271, lon: 79.8612 }));
  }, []);

  function getFormattedDateString(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);

    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDate();

    return `${dayOfWeek}, ${month} ${day}`;
  }

  function KelvinToCelsius(Kelvin: number): number {
    const Celsius = Kelvin - 273.15;
    return Math.floor(Celsius);
  }
  return (
    <div className="max-w-xs ml-10">
      <Lottie className="max-w-xs -mt-10" animationData={rainy} loop={true} />
      <div className="flex flex-row mb-2">
        <h1 className="text-6xl font-bold">{KelvinToCelsius(temp)} </h1>
        <h1 className="text-1xl font-medium">0</h1>
        <h1 className="text-4xl font-medium align-bottom">C</h1>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-1xl font-bold">{name}</h1>
        <h1 className="text-1xl font-bold">{getFormattedDateString(dt)}</h1>
      </div>
      <hr className=" h-0.5 dark:bg-gray-700 mt-1 " />
    </div>
  );
};

export default MainCard;
