interface Prop {
  data: { name: string; value: number | string; unit: string };
}

const SingleDetail = ({ data }: Prop) => {
  return (
    <div className="flex flex-col mx-5 rounded-xl px-3 justify-items-center m-2 border bg-sky-300 py-5 gap-7 ">
      <h1 className="flex justify-center font-medium">{data.name}</h1>
      <div className="flex flex-row justify-center">
        <h1 className="font-bold text-4xl px-2">{data.value}</h1>
        <h1 className="font-extrabold ">{data.unit}</h1>
      </div>
      <h1 className="font flex justify-center font-medium">Normal</h1>
    </div>
  );
};

export default SingleDetail;
