import { ArrowRight, Star } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";

export const MovieDetails = ({ movie }) => {
  //   const imgUrl = `${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie.backdrop_path}`;
  return (
    <div>
      <div className="md:hidden">
        <Header />
        <div className="items-center flex justify-between px-5 pt-[32px] pb-[16px]">
          <div>
            <p className="text-[24px] font-bold">{movie?.title}</p>
            <p className="text-[14px]">2024.11.26 · PG · 2h 40m</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-300 fill-yellow-300 w-[22px] h-[34px] md:w-[16px]h-[16px]" />
            <div>
              <div className="flex gap-1 items-center">
                <p className="text-[12px] font-bold md:text-[14px]">6.9</p>
                <p className="text-[12px] text-gray-500 md:text-[14px]">/10</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500">37k</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              className="w-[375px] h-[211px]"
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.backdrop_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="flex px-5 gap-10 pt-[32px]">
          <img
            className="w-[100px] h-[148px]"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`}
            alt=""
          />
          <div className="w-[201px] h-[344px]">
            <div>
              <button className="border text-[12px] rounded-sm">
                Fairy Tale
              </button>
              <button className="border text-[12px] rounded-sm">
                Pop Musical
              </button>
              <button className="border text-[12px] rounded-sm">Fantasy</button>
              <button className="border text-[12px] rounded-sm">Musical</button>
              <button className="border text-[12px] rounded-sm">Romance</button>
            </div>
            <div className="pt-[20px]">
              <p className="text-[16px]">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="px-5">
          <div>
            <p className="text-[16px] font-bold">Director</p>
            <p className="text-[16px]">Jon M. Chu</p>
            <div className="border w-[335px]"></div>
          </div>
          <div className="pt-[20px]">
            <p className="text-[16px] font-bold">Writers</p>
            <p className="text-[16px]">
              Winnie Holzman · Dana Fox · Gregory Maguire
            </p>
            <div className="border w-[335px]"></div>
          </div>
          <div className="pt-[20px]">
            <p className="text-[16px] font-bold">Stars</p>
            <p className="text-[16px]">
              Cynthia Erivo · Ariana Grande · Jeff Goldblum
            </p>
            <div className="border w-[335px]"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center h-[36px] p-[20px] pt-[38px]">
            <p className="text-[24px] font-bold">More like this</p>
            <div className="flex items-center">
              <p className="text-[14px]">See more</p>
              <ArrowRight className="w-[12px] h-[12px] pt-[1px]" />
            </div>
          </div>
          <div className="py-[20px] px-5">
            <img
              className="w-[158px] h-[234px] md:w-[230px] md:h-[340px] rounded-t-lg object-cover"
              src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
              alt=""
            />
            <div className=" bg-gray-200 w-[158px] h-[76px] md:w-[230px] md:h-[115px] rounded-b-lg">
              <div className="ml-2 pt-2">
                <div className="flex gap-1 items-center">
                  <Star className="text-yellow-300 fill-yellow-300 w-[14px] h-[13px] md:w-[16px]h-[16px]" />
                  <p className="text-[12px] font-bold md:text-[14px]">6.9</p>
                  <p className="text-[12px] text-gray-500 md:text-[14px]">
                    /10
                  </p>
                </div>
                <p className="text-[14px] w-[141px] h-[40px] md:text-[18px]">
                  Shang-Chi
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="hidden sm:block">
        <Header />
        <div className="w-[1080px] flex  justify-between mx-auto pt-[32px] pb-[16px]">
          <div>
            <p className="text-[36px] font-bold">{movie?.title}</p>
            <p className="text-[18px]">2024.11.26 · PG · 2h 40m</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-300 fill-yellow-300 w-[28px] h-[28px] md:w-[16px]h-[16px]" />
            <div>
              <p className="text-[12px] font-bold">Rating</p>
              <div className="flex gap-1 items-center">
                <p className="text-[16px] font-bold md:text-[14px]">6.9</p>
                <p className="text-[14px] text-gray-500 md:text-[14px]">/10</p>
              </div>
              <div>
                <p className="text-[12px] text-gray-500">37k</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[32px] relative">
          <img
            className="w-[290px] h-[428px]"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.poster_path}`}
            alt=""
          />
          <img
            className="w-[760] h-[428px]"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL}${movie?.backdrop_path}`}
            alt=""
          />
          <Button className="absolute bottom-0 mb-[30px] mr-[180px] text-black bg-white">
            Watch Trailer
          </Button>
        </div>
        <div className="mx-auto w-[1080px]">
          <div className="w-[1080px] pt-[32px]">
            <div>
              {/* {movie.map((genre) => (
                <Button variant="outline">{genre.name}</Button>
              ))} */}
              <button className="border text-[12px] rounded-sm font-bold">
                Fairy Tale
              </button>
              <button className="border text-[12px] rounded-sm font-bold">
                Pop Musical
              </button>
              <button className="border text-[12px] rounded-sm font-bold">
                Fantasy
              </button>
              <button className="border text-[12px] rounded-sm font-bold">
                Musical
              </button>
              <button className="border text-[12px] rounded-sm font-bold">
                Romance
              </button>
            </div>
            <div className="pt-[20px]">
              <p className="text-[16px]">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.{" "}
              </p>
            </div>
          </div>
          <div className="pt-[20px]">
            <div>
              <p className="text-[16px] font-bold">Director</p>
              <p className="text-[16px]">Jon M. Chu</p>
              <div className="border w-[1080px]"></div>
            </div>
            <div className="pt-[20px]">
              <p className="text-[16px] font-bold">Writers</p>
              <p className="text-[16px]">
                Winnie Holzman · Dana Fox · Gregory Maguire
              </p>
              <div className="border w-[1080px]"></div>
            </div>
            <div className="pt-[20px]">
              <p className="text-[16px] font-bold">Stars</p>
              <p className="text-[16px]">
                Cynthia Erivo · Ariana Grande · Jeff Goldblum
              </p>
              <div className="border w-[1080px]"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center h-[36px] p-[20px] pt-[38px]">
              <p className="text-[24px] font-bold">More like this</p>
              <div className="flex items-center">
                <p className="text-[14px]">See more</p>
                <ArrowRight className="w-[12px] h-[12px] pt-[1px]" />
              </div>
            </div>
            <div className="py-[20px]">
              <img
                className="w-[158px] h-[234px] md:w-[230px] md:h-[340px] rounded-t-lg object-cover"
                src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
                alt=""
              />
              <div className=" bg-gray-200 w-[158px] h-[76px] md:w-[230px] md:h-[115px] rounded-b-lg">
                <div className="ml-2 pt-2">
                  <div className="flex gap-1 items-center">
                    <Star className="text-yellow-300 fill-yellow-300 w-[14px] h-[13px] md:w-[16px]h-[16px]" />
                    <p className="text-[12px] font-bold md:text-[14px]">6.9</p>
                    <p className="text-[12px] text-gray-500 md:text-[14px]">
                      /10
                    </p>
                  </div>
                  <p className="text-[14px] w-[141px] h-[40px] md:text-[18px]">
                    Shang-Chi
                  </p>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
