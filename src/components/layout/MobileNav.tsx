"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  FolderIcon,
  HomeIcon,
  XMarkIcon,
  UsersIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Начало", href: "/", icon: HomeIcon, current: true },
  { name: "Събития", href: "/", icon: UsersIcon, current: false },
  { name: "Песни", href: "/songs", icon: MusicalNoteIcon, current: false },
  { name: "Филми", href: "/movies", icon: VideoCameraIcon, current: false },
];
// const resources = [
//   { id: 1, name: "Църкви", href: "#", initial: "Ц", current: false },
//   { id: 2, name: "Молитва", href: "#", initial: "М", current: false },
// ];

// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

export default function MobileNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-2">
                  <div className="flex h-32 shrink-0 items-center">
                    <Image
                      className="w-auto h-20 "
                      src="/logo.svg"
                      alt="Your Company"
                      width={100}
                      height={200}
                    />{" "}
                    <div className="text-3xl">worship.ink</div>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-50 text-[#1AA492]"
                                    : "text-gray-700 hover:text-[#1AA492] hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-[#1AA492]"
                                      : "text-gray-400 group-hover:text-[#1AA492]",
                                    "h-6 w-6 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      {/* <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          Your resources
                        </div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                          {resources.map((team) => (
                            <li key={team.name}>
                              <a
                                href={team.href}
                                className={classNames(
                                  team.current
                                    ? "bg-gray-50 text-[#1AA492]"
                                    : "text-gray-700 hover:text-[#1AA492] hover:bg-gray-50",
                                  "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                )}
                              >
                                <span
                                  className={classNames(
                                    team.current
                                      ? "text-[#1AA492] border-[#1AA492]"
                                      : "text-gray-400 border-gray-200 group-hover:border-[#1AA492] group-hover:text-[#1AA492]",
                                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"
                                  )}
                                >
                                  {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li> */}
                      <li className="-mx-6 mt-auto"></li>
                      <li className="text-xs text-center text-gray-500">
                        <Link className="mx-5" href={"/about"} passHref>
                          About
                        </Link>
                        <Link className="mx-5" href={"/contact"} passHref>
                          Contact
                        </Link>
                      </li>
                      <li className="text-xs text-center text-gray-500">
                        <Link className="m-5" href={"/terms"} passHref>
                          Terms
                        </Link>
                        <Link className="m-5" href={"/privacy"} passHref>
                          Privacy
                        </Link>
                        <Link className="m-5" href={"/cookie"} passHref>
                          Cookie
                        </Link>
                      </li>
                      <li className="text-xs text-center mb-4 text-gray-500">
                        <span> &copy; Worship.ink {new Date().getFullYear()} </span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-gray-900">
          <div className="text-3xl text-center">worship.ink</div>
        </div>
        <a href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-gray-50"
            src="/logo.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
