"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [opened, setOpened] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const currentRoute = usePathname();

  return (
    <div>
      <div className="sticky top-0 z-40 mx-auto text-black bg-[#F7F6FB] bg-blend-darken">
        <div className="pl-4">
          <nav className="flex items-center justify-between">
            <div
              className="cursor-pointer md:hidden space-y-1 p-2 md:space-y-2"
              onClick={() => {
                setOpened(!opened);
              }}
            >
              <div className="h-1 w-6 rounded bg-blue-600 md:w-8"></div>
              <div className="h-1 w-6 rounded bg-blue-600 md:w-8"></div>
              <div className="h-1 w-6 rounded bg-blue-600 md:w-8"></div>
            </div>
            <header className="w-full hidden md:block border-b border-gray-300">
              <div className="container mx-auto flex items-center justify-between px-4 py-2">
                <div className="flex">
                  <Image
                    width={20}
                    height={20}
                    src="/learnhq.png"
                    alt="learnhq"
                    className="mr-2"
                  />
                  <h1 className="text-lg font-semibold text-gray-800">
                    LearnHQ
                  </h1>
                </div>
                <div className="flex items-center">
                  <nav className="text-gray-700">
                    <ul className="flex font-semibold md:text-lg space-x-2 md:space-x-4 text-sm">
                      <li>
                        <Link href={`"#"}`} className="hover:text-blue-500">
                          Forums
                        </Link>
                      </li>
                      <li>
                        <Link href="https://learnhq.vercel.app" className="hover:text-blue-500">
                          Demo
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-blue-500">
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="hover:text-blue-500">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-blue-500 hidden md:block"
                        >
                          Contact
                        </Link>
                      </li>
                      <li></li>
                    </ul>
                  </nav>
                  <Link
                    href="/login"
                    className="rounded-md md:mx-2 bg-blue-500 px-4 py-1.5 font-medium text-white hover:bg-blue-600"
                  >
                    Sign In
                  </Link>
                  {/* <div className="cursor-pointer md:hidden space-y-1 p-2 md:space-y-2">
                <div className="h-1 w-6 rounded bg-blue-600 md:w-8"></div>
                <div className="h-1 w-6 rounded bg-blue-600 md:w-8"></div>
                <div className="h-1 w-6 rounded bg-blue-600 md:w-8"></div>
              </div> */}
                </div>
              </div>
            </header>
          </nav>
        </div>
        <div className="">
          <div className={`${opened ? "block " : "hidden md:block"}`}>
            <div
              className="absolute right-0 h-screen w-screen bg-black opacity-20 bg-blend-darken md:hidden"
              onClick={() => {
                setOpened(!opened);
              }}
            ></div>
            <div
              onClick={() => {
                setOpened(!opened);
              }}
              className="
                md:pb-[3.5rem] absolute left-0 flex h-screen w-[60%] flex-col overflow-y-auto bg-[#F7F6FB] p-4 opacity-100 bg-blend-darken md:w-60 "
            >
              sidebar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
