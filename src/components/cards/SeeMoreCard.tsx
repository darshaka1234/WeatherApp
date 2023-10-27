import { MdOutlineReadMore } from "react-icons/md";

interface SeeMoreCardProps {
  toggleMore: () => void;
}

const SeeMoreCard = ({ toggleMore }: SeeMoreCardProps) => {
  const handleClick = () => {
    toggleMore();
  };

  return (
    <div
      className="flex flex-col m-2 items-center gap-5 px-3 py-10 mx-5 rounded-xl bg-sky-200 col-span-1"
      onClick={handleClick}
    >
      <div className="flex flex-col  justify-center pt-5 pl-5">
        <h1 className="font-medium justify-center">See More..</h1>
        <MdOutlineReadMore className="text-4xl justify-center text-yellow-400 " />
      </div>
    </div>
  );
};

export default SeeMoreCard;
