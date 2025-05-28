import { Film, Moon, Search } from "lucide-react";
import { GenresDropdown } from "./Genres";

export const Header = () => {
  return (
    <div className="flex items-center justify-between w-[375px] h-[59px] pt-[20px]  md:w-[1280px] mx-auto">
      <div className="flex items-center ml-[20px]">
        <Film className="text-indigo-700 w-[16px] h-[16px]" />
        <p className="text-indigo-700 text-[16px]">Movie Z</p>
      </div>
      <div className="flex gap-4 pr-[20px]">
        <button className="w-[36px] h-[36px] border-gray-400 border-1 rounded-xl flex justify-center items-center md:hidden">
          <Search className="w-[12px] h-[12px]" />
        </button>
        <div className="gap-4 sm:flex hidden">
          <GenresDropdown />
          <div className="flex items-center border rounded-sm">
            <Search className="w-[16px] h-[16px] text-gray-500" />
            <input
              className="w-[379px] h-[36px] pl-[10px]"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div>
        <button className="w-[36px] h-[36px] border-gray-400 border-1 rounded-xl flex justify-center items-center">
          <Moon className="w-[12px] h-[12px]" />
        </button>
      </div>
    </div>
  );
};
