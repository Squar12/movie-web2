export const Stars = ({ stars }) => {
  console.log(stars);
  return (
    <div className="pt-[20px]">
      <p className="text-[16px] font-bold">Stars</p>
      <div className="flex gap-3">
        {stars?.map((star) => (
          <p className="text-[16px]">{star?.name}</p>
        ))}
      </div>
      <div className="border w-[335px] md:w-[1280px]"></div>
    </div>
  );
};
