'use client'

import Logo from '@/components/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/components/ui/fonts';
import Image from 'next/image';
import { useAuth, useUser } from "@clerk/nextjs";

export default function Page() {
  const { userId } = useAuth();
  const { user } = useUser();

  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" /> */}
         
          { userId ? 
          <>
           <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
           <strong>Welcome back {user?.firstName}! </strong> Please proceed to the dashboard to access
           your courses
         </p>
            <Link
              href="/dashboard/search"
              className="flex items-center gap-5 self-start rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
              <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link> 
          </>
          :
          <>
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
          <strong>Welcome to MDigital LMS.</strong> Please login
         to access your courses
        </p>
           <Link
              href="/dashboard/search"
              className="flex items-center gap-5 self-start rounded-lg bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link> 
            </>
          }
          
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero.svg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero.svg"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
