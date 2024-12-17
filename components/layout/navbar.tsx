"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/user-nav";
import {
  Search,
  Home,
  Building2,
  Rocket,
  LineChart,
  Bell,
} from "lucide-react";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <LineChart className="h-6 w-6 text-blue-600" />
            <span className="hidden font-bold sm:inline-block">Hubprise</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search investments..."
              className="w-64 bg-muted"
            />
          </div>
        </div>
        <nav className="flex flex-1 items-center justify-end gap-4 md:gap-6">
          <Link
            href="/"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            <span className="hidden sm:block">Home</span>
          </Link>
          <Link
            href="/startups"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <Rocket className="h-5 w-5" />
            <span className="hidden sm:block">Startups</span>
          </Link>
          <Link
            href="/real-estate"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <Building2 className="h-5 w-5" />
            <span className="hidden sm:block">Real Estate</span>
          </Link>
          <Link
            href="/notifications"
            className="flex flex-col items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <Bell className="h-5 w-5" />
            <span className="hidden sm:block">Alerts</span>
          </Link>
          {session?.user ? (
            <UserNav />
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/auth/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}