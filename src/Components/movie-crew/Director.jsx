export const Director = ({ directors }) => {
  return (
    <div>
      <p className="text-[16px] font-bold sm:">Director</p>
      <div className="flex gap-1">
        {directors?.map((director) => (
          <p key={director.id} className="text-[16px]">
            {director?.name}
          </p>
        ))}
      </div>
      <div className="border w-[335px] md:w-[1280px]"></div>
    </div>
  );
};
