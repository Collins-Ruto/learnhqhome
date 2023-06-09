"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [opened, setOpened] = useState(false);

  const currentRoute = usePathname();

  return (
    <div className="sticky top-0 z-40 mx-auto text-black bg-white bg-blend-darken">
      <div className="pl-4">
        <nav className="flex items-center justify-between">
          <div className="py-1.5 px-2 w-full flex md:hidden justify-between">
            <Link href="/" className="flex">
              <Image
                width={90}
                height={90}
                src="/lhlogo.webp"
                alt="learnhq"
                className=""
              />
            </Link>
            <div
              className="cursor-pointer md:hidden space-y-1 p-2 px-4 sm:space-y-1.5"
              onClick={() => {
                setOpened(!opened);
              }}
            >
              <div className="h-1 w-6 rounded bg-blue-600 sm:w-8"></div>
              <div className="h-1 w-6 rounded bg-blue-600 sm:w-8"></div>
              <div className="h-1 w-6 rounded bg-blue-600 sm:w-8"></div>
            </div>
          </div>
          <header className="w-full hidden md:block border-b border-gray-300">
            <div className="container lg:px-20 mx-auto flex items-center justify-between px-4 py-2">
              <Link href="/" className="cursor-pointer flex">
                <Image
                  width={100}
                  height={100}
                  src="/lhlogo.webp"
                  alt="learnhq"
                  className="mr-2"
                />
              </Link>
              <div className="flex items-center">
                <nav className="text-gray-700">
                  <ul className="flex font-semibold md:text-lg space-x-2 md:space-x-4 text-sm">
                    <li>
                      <Link
                        href={`/`}
                        className={` cursor-pointer items-center border-b-2  align-middle hover:text-blue-600 ${
                          currentRoute === "/"
                            ? " border-orange-500"
                            : "border-transparent"
                        }`}
                      >
                        <span className="rounded">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://twitter.com/learnhqafrica"
                        className="hover:text-blue-600"
                      >
                        Forums
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://learnhq.vercel.app/learn/courses"
                        className="hover:text-blue-600"
                      >
                        Courses
                      </Link>
                    </li>
                    <Link
                      href={`/about`}
                      className={` cursor-pointer items-center border-b-2  align-middle hover:text-blue-600 ${
                        currentRoute === "/about"
                          ? " border-orange-500"
                          : "border-transparent"
                      }`}
                    >
                      <span className="rounded">About</span>
                    </Link>
                    <li>
                      <Link
                        href={`/contact`}
                        className={` cursor-pointer items-center border-b-2 align-middle hover:text-blue-600 ${
                          currentRoute === "/contact"
                            ? " border-orange-500"
                            : "border-transparent"
                        }`}
                      >
                        <span className="rounded">Contact</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/faq`}
                        className={` cursor-pointer items-center border-b-2  align-middle hover:text-blue-600 ${
                          currentRoute === "/faq"
                            ? " border-orange-500"
                            : "border-transparent"
                        }`}
                      >
                        <span className="rounded">FAQs</span>
                      </Link>
                    </li>
                    <li></li>
                  </ul>
                </nav>
                <Link
                  href="https://learnhq.vercel.app/login"
                  className="inline-block px-5 py-2 border border-transparent text-base leading-6 rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo font-semibold bg-indigo-600 active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Demo
                </Link>
              </div>
            </div>
          </header>
        </nav>
      </div>
      <div className="md:hidden">
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
               text-3xl font-semibold gap-4 max-w-[20rem]  absolute right-0 flex h-screen w-[50%] flex-col overflow-y-auto bg-[#F7F6FB] p-4 opacity-100 bg-blend-darken md:w-60 "
          >
            <Link
              href={`/`}
              className={` cursor-pointer p-2 px-4 rounded items-center align-middle text-gray-800 hover:text-blue-700 ${
                currentRoute === "/"
                  ? "hover:text bg-blue-700 text-white hover:text-white"
                  : ""
              }`}
            >
              <span className="rounded">Home</span>
            </Link>
            <Link
              href={`https://twitter.com/learnhqafrica`}
              className={` flex cursor-pointer items-center rounded-md p-2 px-4 align-middle text-gray-800 hover:text-blue-700 ${
                currentRoute === "/"
                  ? "hover:text bg-blue-700 text-white hover:text-white"
                  : ""
              }`}
            >
              {/* <Image
                width={20}
                height={20}
                className="mr-2 w-6 rounded-sm bg-[#F7F6FB]"
                src="https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png"
                alt=""
              /> */}
              <span className="">Forums</span>
            </Link>

            <Link
              href={`/about`}
              className={` cursor-pointer p-2 px-4 rounded items-center align-middle text-gray-800 hover:text-blue-700 ${
                currentRoute === "/about"
                  ? "hover:text bg-blue-700 text-white hover:text-white"
                  : ""
              }`}
            >
              <span className="rounded">About Us</span>
            </Link>
            <Link
              href="https://learnhq.vercel.app/learn/courses"
              className="hover:text-blue-600 p-2 px-4 rounded"
            >
              Courses
            </Link>
            <Link
              href={`/contact`}
              className={` cursor-pointer p-2 px-4 rounded items-center align-middle text-gray-800 hover:text-blue-700 ${
                currentRoute === "/contact"
                  ? "hover:text bg-blue-700 text-white hover:text-white"
                  : ""
              }`}
            >
              <span className="rounded">Contact</span>
            </Link>
            <Link
              href="https://learnhq.vercel.app/login"
              className=" p-2 px-4 rounded"
            >
              Demo
            </Link>
            <Link
              href={`/faq`}
              className={`flex p-2 px-4 rounded cursor-pointer items-center align-middle text-gray-800 hover:text-blue-700 ${
                currentRoute === "/faq"
                  ? "hover:text bg-blue-700 text-white hover:text-white"
                  : ""
              }`}
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
