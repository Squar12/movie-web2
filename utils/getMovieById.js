import { useRouter } from "next/router";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const movieId = router.query.movieId;
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const data = await getMovieById(movieId);
    setMovie(data);
  };
  return <div>dynamic page {router.query.movieId}</div>;
}
