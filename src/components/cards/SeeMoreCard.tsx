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
      className="flex flex-col m-2 gap-5 px-3 py-10 mx-5 rounded-xl bg-sky-200 col-span-1"
      onClick={handleClick}
    >
      <div className="flex flex-col content-center justify-center pt-5 ">
        <MdOutlineReadMore className="text-4xl text-yellow-400 " />
        <h1 className="">See More..</h1>
      </div>
    </div>
  );
};

export default SeeMoreCard;
