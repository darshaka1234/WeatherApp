import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import DayCard from "../components/cards/DayCard";
import SeeMoreCard from "../components/cards/SeeMoreCard";

const WeeklyForecastPage = () => {
  const { list } = useAppSelector((state) => state.curData.weekValue);
  const [more, setMore] = useState<boolean>(false);
  const toggleMore = () => {
    setMore((prevMore) => !prevMore);
  };

  return (
    <div className="container grid grid-cols-7 mt-10">
      {list?.map((item, index) => {
        if (16 < index && index % 8 === 0) {
          return <DayCard key={index} data={item} />;
        }
        return null;
      })}
      <SeeMoreCard toggleMore={toggleMore} />
    </div>
  );
};

export default WeeklyForecastPage;
