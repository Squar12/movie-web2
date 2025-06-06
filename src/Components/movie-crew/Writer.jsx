export const Writers = ({ writers }) => {
  return (
    <div className="pt-[20px]">
      <p className="text-[16px] font-bold">Writers</p>
      <div className="flex gap-3">
        {writers?.map((writer) => (
          <p key={writers.id} className="text-[16px]">
            {writer?.name}
          </p>
        ))}
      </div>
      <div className="border w-[335px] md:w-[1280px]"></div>
    </div>
  );
};
