import { useAppSelector } from "../app/hooks";
import DayCard from "./cards/DayCard";
import SeeMoreCard from "./cards/SeeMoreCard";

const DailyDetails = () => {
  const { list } = useAppSelector((state) => state.curData.weekValue);

  return (
    <div className="container grid grid-cols-7 mt-10">
      {list?.map((item, index) => {
        if (index > 8 && index % 10 === 0) {
          return <DayCard key={index} data={item} />;
        }
        return null;
      })}
      <SeeMoreCard />
    </div>
  );
};

export default DailyDetails;
