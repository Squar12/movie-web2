import { Separator } from "@radix-ui/react-dropdown-menu";
import { ArrowRight, Star } from "lucide-react";

export const SearchResultCard = ({ movie }) => {
  const { vote_average, original_title, release_date, poster_path } = movie;
  const imageUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}/${poster_path}`;

  return (
    <div className="p3">
      <div className="flex transform w-[537px] p-2 gap-4 transition-transform duration-150 hover:scale-105">
        <div>
          <img
            className="w-[158px] h-[234px] md:w-[67px] md:h-[115px]  object-cover"
            src={imageUrl}
            alt=""
          />
        </div>
        <div className="bg-gray-100 w-[158px] h-[76px] md:w-[537px] md:h-[115px]  dark:bg-gray-800">
          <div className="ml-2 pt-2">
            <p className="text-[14px] font-bold w-[141px] h-[40px] md:text-[12px]">
              {original_title}
            </p>
            <div className="flex items-center text-sm">
              <Star className="text-yellow-300 fill-yellow-300 w-[14px] h-[13px] md:w-[13px] md:h-[12px]" />
              <p className="text-[12px] font-bold md:text-[14px]">
                {vote_average?.toFixed(1)}
              </p>
              <p className="text-[12px] text-gray-500 md:text-[13px]">/10</p>
            </div>
            <div className="flex justify-between w-full">
              <p className="text-[14px]">{release_date}</p>
              <div className="flex justify-center mr-[12px] items-center gap-1">
                <div className="text-[14px]">See more</div>
                <div>
                  <ArrowRight className="w-[12px] h-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="w-full" />
    </div>
  );
};
