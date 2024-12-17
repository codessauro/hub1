import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hubprise Investments - Modern Investment Platform",
  description: "A secure platform for startup and real estate investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <div className="container mx-auto px-4 py-4 lg:px-8">
              <div className="flex gap-6">
                <Sidebar className="hidden lg:block w-64 flex-shrink-0" />
                <main className="flex-1">{children}</main>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}