import { Star } from "lucide-react";

export const MovieCard = ({ movie }) => {
  return (
    <div className="transform transition-transform duration-150 hover:scale-105">
      <img
        className="h-[234px] md:w-full md:h-[340px] rounded-t-sm object-cover"
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`}
        alt=""
      />
      <div className=" bg-gray-200 w-full h-[76px]  md:h-[115px] rounded-b-sm dark:bg-gray-800">
        <div className="ml-2 pt-2">
          <div className="flex gap-1 items-center">
            <Star className="text-yellow-300 fill-yellow-300 w-[14px] h-[13px] md:w-[16px] md:h-[16px]" />
            <p className="text-[12px] font-bold md:text-[14px]">
              {movie?.vote_average?.toFixed(1)}
            </p>
            <p className="text-[12px] text-gray-500 md:text-[14px]">/10</p>
          </div>
          <p className="text-[14px]  md:text-[18px]">{movie?.original_title}</p>
        </div>
      </div>
    </div>
  );
};
