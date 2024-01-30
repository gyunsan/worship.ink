import RightSidebar from "@/components/layout/RightSidebar";
import Image from "next/image";
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

async function getNote(noteId: string) {
  const res = await fetch(
    `https://notes-hub.fly.dev/api/collections/events/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  const createdTime = dayjs(note.created).fromNow();
  const startDate = dayjs(note.start).format("DD/MM/YYYY"); // 03/19/2022 03:57:25 PM"
  const endDate = dayjs(note.end).format("DD/MM/YYYY"); // 03/19/2022 03:57:25 PM"
  const startTime = dayjs(note.start).format("DD/MM/YYYY"); // 03/19/2022 03:57:25 PM"
  const endTime = dayjs(note.end).format("hh:mm" + "ч."); // 15:57ч."
  const time = dayjs(note.start).format("HH:mm" + "ч."); // 15:57ч."

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
                <Badge variant="outline">Русе</Badge>
              </div>
            </div>
          </div>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription> {note.location}</CardDescription>
        </CardHeader>

        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src={`https://notes-hub.fly.dev/api/files/bo9f4kjgkhcv4ch/${note.id}/${note.image}`}
              alt={note.title}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h2 className="font-bold mt-6">Информация</h2>
          <p>{note.content}</p>
        </CardContent>
        <CardContent>
          Започва: {startTime} на {time} <br />
          Адрес: {note.address}
        </CardContent>
      </Card>
    </div>
  );
}
