import Lottie from "lottie-react";
import rainy from "../../assets/lotties/rainy.json";

const MainCard = () => {
  return (
    <div className="max-w-xs ml-10">
      <Lottie className="max-w-xs" animationData={rainy} loop={true} />
      <div className="flex flex-row mb-2">
        <h1 className="text-6xl font-bold">12 </h1>
        <h1 className="text-1xl font-medium">0</h1>
        <h1 className="text-4xl font-medium align-bottom">C</h1>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="text-1xl font-bold">Colombo</h1>
        <h1 className="text-1xl font-bold">Friday,27 Oct </h1>
      </div>
      <hr className=" h-0.5 dark:bg-gray-700 mt-1 " />
    </div>
  );
};

export default MainCard;
