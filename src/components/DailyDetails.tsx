import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import DayCard from "./cards/DayCard";
import SeeMoreCard from "./cards/SeeMoreCard";

const DailyDetails = () => {
  const { list } = useAppSelector((state) => state.curData.weekValue);
  const [more, setMore] = useState(false);

  const toggleMore = () => {
    setMore((prev) => !prev);
  };

  return (
    <div className="container grid grid-cols-7 mt-10">
      {list?.map((item, index) => {
        if (index < 31 && 7 < index && index % 8 === 0) {
          return <DayCard key={index} data={item} />;
        }
        return null;
      })}
      <SeeMoreCard toggleMore={toggleMore} />
    </div>
  );
};

export default DailyDetails;
