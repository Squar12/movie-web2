import Link from "next/link";
import { SearchResultCard } from "./SearchResultCard";

export const SearchResult = ({ movies }) => {
  console.log(movies);
  return (
    <div className="absolute z-50 top-9 bg-background rounded-sm p-3 ">
      {movies?.results?.slice(0, 5).map((movie) => (
        <Link href={`/details/${movie.id}`}>
          <SearchResultCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};
