import { MovieDetails } from "@/Components/MovieDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { MovieCard } from "@/Components/MovieCard";
import { GenresList } from "@/Components/GenresList";

export default function Page() {
  const [genres, setGenres] = useQueryState("genres");
  const [genreMovies, setGenreMovies] = useState([]);

  const getGenre = async () => {
    if (!genres?.length) return;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}discover/movie?language=en&with_genres=${genres}&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      setGenreMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenre();
  }, [genres?.length]);

  return (
    <div className="flex">
      <div className="grid grid-cols-2">
        {genreMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <GenresList />
    </div>
  );
}
