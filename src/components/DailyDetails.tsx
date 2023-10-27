import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import DayCard from "./cards/DayCard";

const DailyDetails = () => {
  const { list } = useAppSelector((state) => state.curData.weekValue);
  const [more, setMore] = useState(false);

  const toggleMore = () => {
    window.scroll(0, window.innerHeight);
    var x: any = document.getElementById("see");
    x.style.display = "none";
    setMore((prev) => !prev);
  };

  return (
    <div className="flex flex-col mt-10 sm:flex-col">
      <h1
        id="see"
        className="place-self-end font-medium hover:cursor-pointer "
        onClick={() => toggleMore()}
      >
        See more...
      </h1>
      <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
        {list?.map((item, index) => {
          if (more) {
            if (index % 8 === 0) {
              return <DayCard key={index} data={item} />;
            } else {
              return null;
            }
          } else {
            if (index % 8 === 0 && index < 23) {
              return <DayCard key={index} data={item} />;
            } else {
              return null;
            }
          }
        })}
      </div>
    </div>
  );
};

export default DailyDetails;
