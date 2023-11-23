import { HomeIcon, FolderIcon, UsersIcon } from '@heroicons/react/24/outline'
import MobileNav from './MobileNav'
import Image from 'next/image'
import Link from 'next/link'


const navigation = [
  { name: "Начало", href: "/", icon: HomeIcon, current: true },
  { name: "Събития", href: "/", icon: UsersIcon, current: false },
  { name: "Песни", href: "/songs", icon: FolderIcon, current: false },
];
const resources = [
  { id: 1, name: "Църкви", href: "#", initial: "Ц", current: false },
  { id: 2, name: "Молитва", href: "#", initial: "М", current: false },
];


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MainLayout() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div>
        <MobileNav />
        {/* Static sidebar for desktop */}
        <div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex grow flex-col gap-y-5 overflow-y-auto shadow-md bg-white px-6'>
            <div className='flex h-32 shrink-0 items-center'>
              <Image
                className='h-40  w-auto my-8 mx-auto'
                src='/logo.svg'
                alt='Your Company'
                width={150}
                height={150}
              />
            </div>
            <nav className='flex flex-1 flex-col'>
              <ul role='list' className='flex flex-1 flex-col gap-y-7'>
                <li>
                  <ul role='list' className='-mx-2 space-y-1'>
                    {navigation.map(item => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-green-600'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden='true'
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className='text-xs font-semibold leading-6 text-gray-400'>Your resources</div>
                  <ul role='list' className='-mx-2 mt-2 space-y-1'>
                    {resources.map(team => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-green-600'
                              : 'text-gray-700 hover:text-green-600 hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'text-green-600 border-green-600'
                                : 'text-gray-400 border-gray-200 group-hover:border-green-600 group-hover:text-green-600',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className='truncate'>{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto"></li>
                <li className='text-xs text-center text-gray-500'>
                  <Link className='mx-5' href={'/about'} passHref>
                    About
                  </Link>
                  <Link className='mx-5' href={'/contact'} passHref>
                    Contact
                  </Link>
                </li>
                <li className='text-xs text-center text-gray-500'>
                  <Link className='m-5' href={'/terms'} passHref>
                    Terms
                  </Link>
                  <Link className='m-5' href={'/privacy'} passHref>
                    Privacy
                  </Link>
                  <Link className='m-5' href={'/cookie'} passHref>
                    Cookie
                  </Link>
                </li>
                <li className='text-xs text-center mb-4 text-gray-500'>
                  <span>&copy; {new Date().getFullYear()} Motivational Bio. All rights reserved.</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* <RightSidebar /> */}
      </div>
    </>
  )
}
