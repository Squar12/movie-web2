import { Star } from "lucide-react";
import { MovieTrailer } from "./MovieTrailer";
import Link from "next/link";

export const MovieCarouselItem = ({ movie }) => {
  const watchTrailer = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        className="w-full relative h-[375px] md:h-[760px] md:pl-[120px]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path})`,
        }}
      >
        <Link href={`/details/${movie?.id}`}>
          <div className="[w-screen mx-auto h-full invisible md:visible">
            <div className="pl-[60px] pt-[200px] px-4 py-4 items-start flex-col flex w-[404px] h-[264px] top-[178px] left-[140px]">
              <div className="flex justify-center">
                <div className="w-[252px] ">
                  <p className="text-[14px] md:text-white">Now Playing:</p>
                  <p className="text-[24px] font-bold md:text-white">
                    {movie.title}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="text-yellow-300 fill-yellow-300 w-[28px] h-[28px]" />
                  <p className="text-[18px] font-bold md:text-white">
                    {movie.vote_average.toFixed(1)}
                  </p>
                  <p className="text-[16px] text-gray-500">/10</p>
                </div>
              </div>
              <div className="py-4 md:text-white">
                <p>{movie.overview}</p>
              </div>
              <div onClick={watchTrailer}>
                <MovieTrailer
                  className="text-[14px] text-white  items-center gap-2 md:text-black"
                  movieId={movie?.id}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* utas-----------> */}
      <div className="px-4 py-4 items-start  flex-col flex md:hidden">
        <div className="flex justify-between items-center w-full h-[52px] md:invisible">
          <div className="w-full h-[52px] visible md:invisible">
            <p className="text-[14px] md:text-white">Now Playing:</p>
            <p className="text-[24px] font-bold md:text-white">Wicked</p>
          </div>
          <div className="flex items-center">
            <Star className="text-yellow-300 fill-yellow-300 " />
            <p className="text-[18px] font-bold md:text-white">6.9</p>
            <p className="text-[16px] text-gray-500">/10</p>
          </div>
        </div>
        <div className="py-4 visible w-full  md:invisible">
          <p className="text-[14px] flex items-center px-1">{movie.overview}</p>
        </div>
        {/* <div
          onClick={watchTrailer}
          className="flex justify-center items-center "
        ></div> */}
      </div>
      <div className="pl-[16px] md:hidden">
        <MovieTrailer movieId={movie?.id} />
      </div>
    </div>
    // utas------------>
  );
};
