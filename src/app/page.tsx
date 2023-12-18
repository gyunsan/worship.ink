// import PocketBase from 'pocketbase';
import RightSidebar from "@/components/layout/RightSidebar";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch(
    "https://notes-hub.fly.dev/api/collections/events/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as Record<string, any>[];
}

const changeDateTime = (created: Date) => {
  const date = new Date(created);
  date.setHours(date.getHours() + 3);
  return date.toLocaleString("en-GB", { hour12: false });
};

export default async function HomePage() {
  const notes = await getNotes();

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex flex-nowrap justify-center items-center">
        <span>
          <h1 className="p-12 text-3xl">Събития</h1>
        </span>
        <div>
          <Image src={"/events.svg"} width={100} height={100} alt="events" />
        </div>
      </div>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created, start, image, end, published } =
    note || {};
  const startTime = dayjs(start).format("DD/MM/YYYY"); // 03/19/2022 03:57:25 PM"
  const endTime = dayjs(end).format("DD/MM/YYYY hh:mm" + "ч."); // 03/19/2022 03:57:25 PM"
  const createdTime = dayjs(created).fromNow();
  const time = dayjs(start).format("HH:mm" + "ч."); // 15:57ч."

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 sm:flex p-8 justify-center">
      <Link href={`/events/${id}`}>
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
                  <Badge variant="outline">Русе</Badge>
                </div>
              </div>
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              {" "}
              Апостолска църква "Дом на Пробив"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={16 / 9} className="bg-muted">
              <Image
                src={`https://notes-hub.fly.dev/api/files/bo9f4kjgkhcv4ch/${id}/${image}`}
                alt={title}
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <CardContent>
              <div className="flex items-center justify-between pt-2 text-lg text-zinc-700">
                <div>Дата: {startTime}</div>
                <div>От: {time}</div>
              </div>
            </CardContent>
          </CardContent>
        </Card>
      </Link>

      <RightSidebar>
        <p>Right</p>
      </RightSidebar>
    </div>
  );
}
