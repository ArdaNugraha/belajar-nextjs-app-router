"use client";

// import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
// import { useCount } from "@/context";
import { dataStore } from "@/store/dataStore";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { count } = useCount();
  const { count } = dataStore();

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-500 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Next.js App</h1>
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="text-gray-800 hover:text-white font-medium transition-colors duration-200"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-800 hover:text-white font-medium transition-colors duration-200"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-800 hover:text-white font-medium transition-colors duration-200"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-4">
          <div>
            <p>{`Count : ${count}`}</p>
          </div>
          {children}
        </main>
        <footer className="bg-gray-700 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Made with Passion</p>
        </footer>
      </div>
    </>
  );
}
