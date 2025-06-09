import Link from "next/link";
import { SearchResultCard } from "./SearchResultCard";

export const SearchResult = ({ movies }) => {
  return (
    <div className="absolute z-50 top-9 bg-background rounded-sm p-3 ">
      {movies?.results?.slice(0, 5).map((movie) => (
        <Link key={movie?.id} href={`/details/${movie?.id}`}>
          <SearchResultCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};
