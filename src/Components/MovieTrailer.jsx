import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import YouTube from "react-youtube";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { getMovieTrailer } from "../../utils/getMovieTrailer";

export const MovieTrailer = ({ movieId }) => {
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    const getMovieTrailerById = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieTrailer(movieId);

        setTrailer(data.results);
      } catch (error) {
        console.error("Failed to fetch movie trailer:", error);
      }
    };
    getMovieTrailerById();
  }, [movieId]);

  const movieTrailer = trailer?.find(
    (video) => video.name === "Official Trailer"
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Watch Trailer</Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden md:min-w-[1080px]">
        <YouTube
          videoId={movieTrailer?.key}
          opts={{
            height: "561",
            width: "100%",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
