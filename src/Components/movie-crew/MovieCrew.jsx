import { Director } from "./Director";
import { Writers } from "./Writer";
import { Stars } from "./Stars";
import { useEffect, useState } from "react";

export default function MovieCrew({ movieId }) {
  const [movieCrews, setMovieCrews] = useState({});

  const getMovieCrew = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movieId}/credits?language=en-US`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const crewData = await response.json();

      setMovieCrews(crewData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    getMovieCrew();
  }, [movieId]);

  const directors = movieCrews.crew
    ?.filter((crewMember) => crewMember.department === "Directing")
    .slice(0, 3);
  const writers = movieCrews.crew?.filter(
    (crewMember) => crewMember.department === "Writing"
  );
  const stars = movieCrews.cast
    ?.filter((castMember) => castMember.known_for_department === "Acting")
    .slice(0, 3);

  return (
    <div>
      <main className="">
        <Director directors={directors} />
        <Writers writers={writers} />
        <Stars stars={stars} />
      </main>
    </div>
  );
}
