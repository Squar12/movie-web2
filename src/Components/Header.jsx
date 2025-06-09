import { Film, Search } from "lucide-react";
import { GenresDropdown } from "./Genres";
import Link from "next/link";
import { DarkMode } from "./DarkMode";
import { HeaderSearch } from "./HeaderSearch";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-[59px] pt-[20px]  md:w-[1280px] mx-auto">
      <Link href={`/`}>
        <div className="flex items-center ml-[20px]">
          <Film className="text-indigo-700 w-[16px] h-[16px]" />
          <p className="text-indigo-700 text-[16px]">Movie Z</p>
        </div>
      </Link>
      <div className="flex gap-4 pr-[20px]">
        <button className="w-[36px] h-[36px] border-gray-400 border-1 rounded-xl flex justify-center items-center md:hidden">
          <Search className="w-[12px] h-[12px]" />
        </button>
      </div>
      <div className="gap-4 mx-auto sm:flex hidden">
        <GenresDropdown />
        <div className="flex items-center gap-4">
          <div className="border rounded-sm">
            <HeaderSearch />
          </div>
          <Link href={`searchresult`}>
            <div className="border rounded-sm h-[33px] w-[33px] flex justify-center items-center">
              <Search className="w-[18px] h-[18px]" />
            </div>
          </Link>
        </div>
      </div>

      <div>
        <DarkMode />
      </div>
    </div>
  );
};
