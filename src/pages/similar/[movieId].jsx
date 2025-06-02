import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MovieCard } from "@/Components/MovieCard";
import { useRouter } from "next/router";

const SimilarPage = () => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const router = useRouter();
  const movieId = router.query.movieId;
  console.log(router.query.movieId);

  const SimilarMovies = async () => {
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

  useEffect(() => {
    SimilarMovies();
  }, []);

  return (
    <div className="max-w-[1280px] w-full mx-auto ">
      <div className="flex justify-between items-center h-[36px] p-[20px]">
        <p className="text-[24px] font-bold">Similar Movies</p>
        <div className="flex items-center">
          <p className="text-[14px]">See more</p>
          <ArrowRight className="w-[12px] h-[12px] pt-[1px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 px-4 gap-5 md:grid-cols-5">
        {similarMovies?.map((movie, index) => (
          <Link href={`/details/${movie.id}`}>
            <MovieCard movie={movie} key={index}></MovieCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarPage;
