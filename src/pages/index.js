import { MovieCarousel } from "@/Components/Carousel";
import { Footer } from "@/Components/Footer";
import { Header } from "@/Components/Header";
import { HomeLoader } from "@/Components/skeleton/HomeLoader";
import { Popular } from "@/Components/Popular";
import { TopRated } from "@/Components/TopRated";
import { Upcoming } from "@/Components/Upcoming";
import { useEffect, useState } from "react";

export default function Home() {
  const [nowPlayingMovie, setNowPlayingMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNowPlayingMovie = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_TMDB_BASE_URL}movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      const movies = await response.json();

      setNowPlayingMovie(movies.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);

  return (
    <div className=" flex flex-col gap-8">
      <Header />
      {loading ? (
        <HomeLoader />
      ) : (
        <MovieCarousel nowPlayingMovie={nowPlayingMovie} />
      )}
      <Upcoming />
      <TopRated />
      <Popular />
      <Footer />
    </div>
  );
}
