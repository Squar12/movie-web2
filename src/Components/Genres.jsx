import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const GenresDropdown = () => {
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex border w-[97px] h-[36px] items-center justify-center rounded-sm cursor-pointer bg-white dark:bg-gray-800">
        <p className="text-sm">Genre</p>
        <ChevronDown className="w-[16px] h-[16px] mr-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid grid-cols-4 gap-2">
        {genres.map((genre) => (
          <Link href={`/search/s?genres=${genre.id}`} key={genre.id}>
            <DropdownMenuItem>{genre.name}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
