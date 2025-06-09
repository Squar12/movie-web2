import { useEffect, useState } from "react";
import { useQueryState } from "nuqs";
import { MovieCard } from "@/Components/MovieCard";
import { GenresList } from "@/Components/GenresList";
import { Header } from "@/Components/Header";
import { Footer } from "@/Components/Footer";
import { PaginationPage } from "@/Components/PaginationPage";

export default function Page() {
  const [genres, setGenres] = useQueryState("genres");
  const [searchResultsPage, setSearchResultsPage] = useState([]);

  const getSearchResultsPage = async () => {
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

      setSearchResultsPage(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearchResultsPage();
  }, [genres?.length]);

  return (
    <div className="flex flex-col">
      <Header />

      <div className="flex mx-auto">
        <GenresList />
        <div className="border-1 max-h-full mx-5"></div>
        <div className="mt-[52px]">
          <div className="mb-4 text-[20px] font-bold">
            <p>{searchResultsPage.length} titles in “Animation”</p>
          </div>
          <div className="grid grid-cols-4 gap-[48px]">
            {searchResultsPage.slice(0, 8).map((movie) => (
              <MovieCard key={movie?.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-[32px]">
        <PaginationPage />
      </div>
      <Footer />
    </div>
  );
}
