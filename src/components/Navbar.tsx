import { getAuthSession } from '@/lib/next-auth'
import React from 'react'
import Link from 'next/link'
import SignInButton from './SignInButton'
import UserAccountNav from './UserAccountNav'
import ThemeToggle from './ThemeToggle'

type Props = {}

const Navbar = async (props: Props) => {
  const session = await getAuthSession()

  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href={'/'} className="flex justify-center items-center gap-2">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Quizzy
          </p>
        </Link>

        <div className="flex items-center justify-center">
          <ThemeToggle className="mr-4" />
          {session?.user ? <UserAccountNav user={session?.user} /> : <SignInButton text="Sign in" />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
