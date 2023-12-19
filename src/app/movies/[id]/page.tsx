
import RightSidebar from "@/components/layout/RightSidebar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";
import Loading from "./loading";

async function getMovies(moviesId: string) {
  const res = await fetch(
    `https://notes-hub.fly.dev/api/collections/movies/records/${moviesId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function MoviePage({ params }: any) {
  const movie = await getMovies(params.id);
  // const createdTime = dayjs(note.created).fromNow();
  // const startDate = dayjs(note.start).format("DD/MM/YYYY");
  // const endDate = dayjs(note.end).format("DD/MM/YYYY");
  // const startTime = dayjs(note.start).format("hh:mm" + "ч.");
  // const endTime = dayjs(note.end).format("hh:mm" + "ч."); 

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 sm:flex p-8 justify-center">
      <Card className="lg:w-[550px] md:w-fit">
        <CardHeader>
          <div className="flex items-center justify-between pt-2 text-lg text-zinc-700">
            <div>
              {" "}
              <CardDescription>{movie.year}</CardDescription>
            </div>
            <div>
              {" "}
              <div>
              <Link target="_blank" rel="noopener noreferrer nofollow" href={movie.imdb} title={movie.name}>
              <Badge variant={"secondary"}>IMDB ⭐{movie.imdb_rating}/10 </Badge>
              </Link>
              </div>
            </div>
          </div>
          <CardTitle>{movie.bg_name}</CardTitle>
          <CardDescription> {movie.name}</CardDescription>
          <div className="flex flex-row pt-3">
          <Badge className="mr-1" variant={"outline"}>{movie.genre[0]}</Badge>
          <Badge className="mx-1" variant={"outline"}>{movie.genre[1]}</Badge>
          <Badge className="mx-1" variant={"outline"}>{movie.genre[2]}</Badge>
          </div>
        </CardHeader>

        <CardContent>
          <Suspense fallback={<Loading />}>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={`https://notes-hub.fly.dev/api/files/qs876bitjhaiuis/${movie.id}/${movie.image}`}
              alt={movie.name}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          </Suspense>
          <h2 className="font-bold mt-6">Информация</h2>
          <p className="text-zinc-700 pt-2">{movie.description}</p>
        </CardContent>
        <CardContent>
<p className="text-xs text-right text-zinc-400">id: {movie.id}</p>
        </CardContent>
      </Card>
      <RightSidebar>
        <p>Right</p>
      </RightSidebar>
    </div>
    
  );
}
