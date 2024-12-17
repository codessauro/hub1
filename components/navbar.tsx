'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserNav } from '@/components/user-nav'
import { CircleDollarSign } from 'lucide-react'

export function Navbar() {
  const { data: session } = useSession()

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <CircleDollarSign className="h-6 w-6" />
          <span className="font-bold">Hubprise</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 px-6">
          <Link href="/projects" className="text-sm font-medium">
            Explore
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium">
            How it Works
          </Link>
          {session?.user && (
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
          )}
        </nav>
        <div className="flex items-center space-x-4">
          {session?.user ? (
            <UserNav />
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}