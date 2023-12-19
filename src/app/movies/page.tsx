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
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

async function getMovies() {
  const res = await fetch(
    "https://notes-hub.fly.dev/api/collections/movies/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function MoviesPage() {
  const movies = await getMovies();

  return (
    <div>
      <h1 className="text-3xl text-center">Филми</h1>
      <p className="text-zinc-400 text-center">
        Християнски филми или филми с християнско послание.
      </p>
      <div>
        {movies?.map((movie) => {
          return <Movies key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

function Movies({ movie }: any) {
  const {
    id,
    name,
    link,
    created,
    genre,
    year,
    image,
    imdb_rating,
    languge,
    bg_name,
    desc,
    imdb,
  } = movie || {};
  const createdTime = dayjs(created).fromNow();

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 sm:flex p-8 justify-center">
      <Card className="lg:w-[550px] md:w-fit">
        <CardHeader>
          <div className="flex items-center justify-between pt-2 text-lg text-zinc-700">
            <div>
              {" "}
              <CardDescription>{createdTime}</CardDescription>
            </div>
            <div>
              {" "}
              <div>
                <Badge variant={"secondary"}>IMDB ⭐{imdb_rating}/10 </Badge>
              </div>
            </div>
          </div>
          <CardTitle>{bg_name}</CardTitle>
          <CardDescription>{name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={`/movies/${id}`}>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                src={`https://notes-hub.fly.dev/api/files/qs876bitjhaiuis/${id}/${image}`}
                alt={name}
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </Link>
        </CardContent>
      </Card>

      <RightSidebar>
        <p>Right</p>
      </RightSidebar>
    </div>
  );
}
