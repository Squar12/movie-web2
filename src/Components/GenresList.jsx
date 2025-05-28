import Link from "next/link";
import { useEffect, useState } from "react";
import { useQueryState, parseAsArrayOf } from "nuqs";
import { Button } from "@/components/ui/button";

export const GenresList = () => {
  const [genresQuery, setGenresQuery] = useQueryState("genres", parseAsArrayOf);
  const [genres, setGenres] = useState([]);

  const getGenres = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/genre/movie/list?language=en`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();

      setGenres(data.genres);
    };
    fetchGenres();
  }, []);

  const onChangeGenres = (genreId) => {
    if (!genresQuery?.length) {
      return;
    }

    setGenresQuery(`${genresQuery},${genreId}`);
  };

  return (
    <div>
      {genres.map((genre) => (
        <Button
          key={genre.id}
          variant={
            genresQuery?.includes(`${genre.id}`) ? "default" : "secondary"
          }
          onClick={() => onChangeGenres(genre.id)}
        >
          {genre.name}
        </Button>
      ))}
    </div>
  );
};
