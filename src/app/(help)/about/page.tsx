// export default function About() {
//   return (
//     <>
//       <h1 className='text-3xl'>About</h1>
//     </>
//   )
// }
// import PocketBase from 'pocketbase';

import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

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
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created, start, image, end } = note || {};

  return (
    <div className="bg-white py-24 sm:py-32">
      <Link href={`/${id}`}>
        {/* <div className="bg-green-400">
          <div
            style={{ position: "relative", width: "150px", height: "100px" }}
            className="bg-blue-100"
          >
            <Image
              src={`https://notes-hub.fly.dev/api/files/bo9f4kjgkhcv4ch/${id}/${image}`}
              sizes="150px"
              fill
              style={{
                objectFit: "contain",
              }}
              alt={title}
            />
          </div>
          <div className="pl-6">
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="mt-1">{content}</p>
            <p className="mt-1">Created: {changeDateTime(created)}</p>
            <p>
              <span style={{ color: "blue" }} className="text-red">
                Event Start:
              </span>{" "}
              {changeDateTime(start)}
            </p>
            <p>
              <span style={{ color: "red" }} className="text-red">
                Event End:{" "}
              </span>
              {changeDateTime(end)}
            </p>
          </div>
        </div> */}
      </Link>


      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">

              <article key={id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={`https://notes-hub.fly.dev/api/files/bo9f4kjgkhcv4ch/${id}/${image}`}
                    alt={title}
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={start} className="text-gray-500">
                      {start}
                    </time>
                    <Link
                      href={`/${id}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {title}
                    </Link>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/${id}`}>
                        <span className="absolute inset-0" />
                        {title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{content}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img src={`https://notes-hub.fly.dev/api/files/bo9f4kjgkhcv4ch/${id}/${image}`} alt={title} className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <Link href={`/${id}`}>
                            <span className="absolute inset-0" />
                           {title}
                          </Link>
                        </p>
                        <p className="text-gray-600">{title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}
