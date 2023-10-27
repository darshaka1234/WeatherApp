import DailyDetails from "../components/DailyDetails";
import Details from "../components/Details";
import LocationForm from "../components/LocationForm";
import MainCard from "../components/cards/MainCard";

const HomePage = () => {
  return (
    <div className="flex flex-row">
      <div>
        <MainCard />
        <LocationForm />
      </div>
      <div className="m-5 mt-10">
        <Details />
        <DailyDetails />
      </div>
    </div>
  );
};

export default HomePage;
