import { MovieDetails } from "@/Components/MovieDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const [movie, setMovie] = useState({});
  const router = useRouter();
  const movieId = router.query?.movieId;

  const getNowPlayingMovie = async () => {
    if (!movieId) return;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/${movieId}?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, [movieId]);
  console.log(movie);
  return (
    <div>
      <MovieDetails movie={movie} />
    </div>
  );
}
