import { Contact } from "@/components";
import { Metadata } from "next";
import React from "react";

function page() {
  return (
    <div>
      <div className="bg-[url('/contactbg.webp')] bg-cover bg-center ">
        <div className="bg-slate-900 bg-opacity-60 ">
          <div className="container px-5 sm:px-6  m:px-0 lg:px-20 mx-auto">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

export const metadata: Metadata = {
  title: "Contact Us",
  metadataBase: new URL("https://learnhqhome.vercel.app/contact"),
  description:
    "LearnHQ Terms and Conditions. We are a comprehensive learning management system that provides quality education and resources to students, teachers, and parents.",
  keywords: [
    "contact learnhq",
    "learnhq questions",
    "learnhq phone",
    "learnhq email",
    "access learnhq",
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