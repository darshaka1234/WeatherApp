import { useAppSelector } from "../app/hooks";
import SingleDetail from "./cards/SingleDetail";

const Details = () => {
  const { main, wind, clouds, weather } = useAppSelector(
    (state: { curData: { value: any } }) => state.curData.value
  );
  const { pressure, humidity } = main;

  const mapData = [
    {
      name: "Status",
      value: weather.map((i: { main: string }) => i.main),
      unit: "",
    },
    { name: "Pressure", value: pressure, unit: "hPa" },
    { name: "Wind", value: wind.speed, unit: "Ms" },
    { name: "Humidity", value: humidity, unit: "%" },
    { name: "Clouds", value: clouds.all, unit: "%" },
  ];

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 
    lg:grid-cols-3 xl:grid-cols-5 max-w-5xl "
    >
      {mapData.map((item) => (
        <SingleDetail data={item} key={item.name} />
      ))}
    </div>
  );
};

export default Details;
