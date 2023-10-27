import { FaCloudSunRain } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

const DayCard = ({ data }: any) => {
  console.log("cardddd", data);

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
    <div className="flex flex-col m-2 gap-5 px-3 py-7 mx-5 rounded-xl bg-sky-300 col-span-2">
      <h1 className="flex justify-center font-medium text-xl">
        {getFormattedDateString(data.dt)}
      </h1>
      <div className="flex justify-center">
        {KelvinToCelsius(data.main.temp) > 25 ? (
          <BsFillSunFill className="text-8xl text-yellow-400 " />
        ) : (
          <FaCloudSunRain className="text-8xl text-yellow-400 " />
        )}
      </div>

      <h1 className="font-medium flex justify-center text-xl">{}</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <h1 className="font-bold text-5xl">
            {KelvinToCelsius(data.main.temp)}
          </h1>
          <h1 className="text-xl font-medium">0</h1>
          <h1 className="text-2xl font-medium align-bottom">C</h1>
        </div>
        <div>
          <div className="font-medium">{`Humidity: ${data.main.humidity}%`}</div>
          <div className="font-medium">{`Pressure: ${data.clouds.all} %`}</div>
        </div>
      </div>
    </div>
  );
};

export default DayCard;
