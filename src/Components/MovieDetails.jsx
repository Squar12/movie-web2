import { ArrowRight, Star } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { SimilarMovies } from "./SimilarMovies";

export const MovieDetails = ({ movie }) => {
  return (
    <div>
      <div className="md:hidden">
        <Header />
        <div className="items-center flex justify-between px-5 pt-[32px] pb-[16px]">
          <div>
            <p className="text-[24px] font-bold">{movie?.title}</p>
            <p className="text-[14px]">{movie?.release_date}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-300 fill-yellow-300 w-[22px] h-[34px] md:w-[16px]h-[16px]" />
            <div>
              <div className="flex gap-1 items-center">
                <p className="text-[12px] font-bold md:text-[14px]">
                  {movie.vote_average?.toFixed(1)}
                </p>
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
          <div className="w-[201px] h-auto">
            <div className="gap-3 ">
              {movie?.genres?.map((genres, index) => (
                <div>
                  <Button
                    className="w-[100px] h-[20px] rounded-full bg-gray-100 text-[12px] font-bold text-black  hover:bg-gray-300"
                    key={index}
                  >
                    {genres.name}
                  </Button>
                </div>
              ))}
            </div>
            <div className="pt-[20px]">
              <p className="text-[16px]">{movie.overview}</p>
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

          <div className="py-[5px]">
            <div>
              <SimilarMovies movieId={movie.id} />
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
            <p className="text-[18px]">{movie?.release_date}</p>
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-300 fill-yellow-300 w-[28px] h-[28px] md:w-[16px]h-[16px]" />
            <div>
              <p className="text-[12px] font-bold">Rating</p>
              <div className="flex gap-1 items-center">
                <p className="text-[16px] font-bold md:text-[14px]">
                  {movie.vote_average?.toFixed(1)}
                </p>
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
          <div className="w-[1080px] pt-[22px]">
            <div className="flex gap-3">
              {movie?.genres?.map((genres, index) => (
                <div>
                  <Button
                    className="w-[100px] h-[20px] rounded-full bg-gray-100 text-[12px] font-bold text-black  hover:bg-gray-300"
                    key={index}
                  >
                    {genres.name}
                  </Button>
                </div>
              ))}
            </div>
            <div className="pt-[20px]">
              <p className="text-[16px]">{movie.overview}</p>
            </div>
          </div>
          <div className="pt-[20px]">
            <div
            // src={`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/${movie.id}/credits?language=en-US`}
            >
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
            <div className="flex justify-between items-center h-[36px] p-[20px] pt-[48px]">
              <p className="text-[24px] font-bold">More like this</p>
              <div className="flex items-center">
                <p className="text-[14px]">See more</p>
                <ArrowRight className="w-[12px] h-[12px] pt-[1px]" />
              </div>
            </div>
            <div className="py-[20px]">
              <div>
                <SimilarMovies movieId={movie.id} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};
