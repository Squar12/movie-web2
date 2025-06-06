import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieCard } from "@/Components/MovieCard";

const TopRatedPage = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const TopRatedMovies = async () => {
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

      setTopRatedMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    TopRatedMovies();
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
        {topRatedMovie?.map((movie, index) => (
          <Link key={topRatedmovie?.id} href={`/details/${movie?.id}`}>
            <MovieCard movie={movie} key={index}></MovieCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
