import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";

export const TopRated = () => {
  const [upComingMovie, setUpComingMovie] = useState([]);
  const UpComingMovies = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/top_rated?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();

      setUpComingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    UpComingMovies();
  }, []);

  return (
    <div className="max-w-[1280px] w-full mx-auto ">
      <div className="flex justify-between items-center h-[36px] p-[20px]">
        <p className="text-[24px] font-bold">Top Rated</p>
        <div className="flex items-center">
          <p className="text-[14px]">See more</p>
          <ArrowRight className="w-[12px] h-[12px] pt-[1px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 px-4 gap-5 md:grid-cols-5">
        {upComingMovie.slice(0, 10).map((movie, index) => (
          <MovieCard movie={movie} key={index}></MovieCard>
        ))}
      </div>
    </div>
  );
};
