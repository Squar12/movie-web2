import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Link from "next/link";

export const SimilarMovies = ({ movieId }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const getSimilarMovies = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/similar?language=en-US&page=1`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
            },
          }
        );
        const movies = await response.json();

        setSimilarMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };

    getSimilarMovies();
  }, [movieId]);

  return (
    <div className="grid grid-cols-2 gap-[20px] px-5 py-3 md:grid md:grid-cols-5 md:gap-[32px]">
      {similarMovies?.slice(0, 5).map((movie) => {
        return (
          <Link key={similarMovies.id} href={`/details/${movie?.id}`}>
            <MovieCard key={movie?.id} movie={movie} />
          </Link>
        );
      })}
    </div>
  );
};
