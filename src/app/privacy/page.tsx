import { policies } from "@/assets/data";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <div className="container px-6 py-8 sm:px-6 lg:px-20 lg:max-w-[70%] mx-auto 2xl:max-w-screen-xl sm:pt-16">
          <h2 className="mb-4 text-center text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Privacy Policy
          </h2>
          <h2 className="mb-8 text-center text-gray-700 dark:text-gray-300 tracking-tight font-semibold ">
            Last updated on June 09, 2023
          </h2>
          <div className="border-t pt-4">
            <p className="pb-4">
              At LearnHq, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, and safeguard your
              personal information when you interact with our website and
              services. By using our platform, you consent to the practices
              described in this policy.
            </p>
            <ul className="flex flex-col gap-4 pl-6">
              {policies.map((policy, index) => (
                <li className="flex flex-col" key={index}>
                  <span className="text-xl font-semibold">{policy.title}</span>
                  {policy.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b pb-4">
            <h1 className="pt-4 pb-2 text-2xl font-bold">Contacting us</h1>
            <p className="">
              If you have any questions or concerns about our Privacy Policy or
              how we handle your personal information, please contact us at:
              <Link
                href="mailto:learnhqafrica@gmail.com"
                className="text-blue-500"
              >
                {" "}
                learnhqafrica@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;

export const metadata: Metadata = {
  title: "Privacy Policy",
  metadataBase: new URL("https://learnhqhome.vercel.app/privacy"),
  description:
    "LearnHQ Privacy Policy. We are a comprehensive learning management system that provides quality education and resources to students, teachers, and parents.",
  keywords: [
    " learnhq Privacy Policy",
    "learnhq questions",
    "know learnhq",
    "learnhq safety measures",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: "Collins Ruto",
      url: "https://collinsruto.netlify.app",
    },
  ],
};