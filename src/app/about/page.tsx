import React from "react";
import { Metadata } from "next";

export default function page() {
  return (
    <div className="">
      <div className="flex flex-col bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <main className="flex-grow container px-2 py-8 sm:px-6 lg:px-20 lg:max-w-[70%] mx-auto 2xl:max-w-screen-xl sm:pt-16">
          <section className="relative px-6">
            <div className=" mx-auto my-12 md:mt-18 lg:mt-20">
              <div className="">
                <h1 className="mb-8 text-3xl md:text-4xl lg:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  About Us
                </h1>
                <div className="border-y py-4">
                  <p className="pb-4 md:text-lg">
                    <span>
                      We provide schools and learners with comprehensive
                      Learning Management System (LMS) and School Management
                      System solutions (SMS). Our Learning Management System
                      offers a cutting-edge platform that empowers educational
                      institutions, instructors, and learners alike. With our
                      intuitive interface and robust features, we enable
                      seamless online learning, making education accessible
                      anytime, anywhere. Currently our systems are tuned with
                      priority secondary schools.
                    </span>
                  </p>
                  <div className="prose  pb-2 md:pb-4 ">
                    <blockquote>
                      <p className=" text-gray-800 dark:text-gray-300">
                        <span>
                          Learning reigns supreme and knowledge is crowned.
                        </span>
                      </p>
                    </blockquote>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold py-4">Our Mission</h3>
                  <p className="md:text-lg">
                    <span>
                      At LearnHq, our mission is to revolutionize education by
                      providing innovative and user-friendly Learning Management
                      System (LMS) and School Management System solutions. We
                      are committed to simplifying the learning experience,
                      empowering educators, and enabling learners to thrive in a
                      digital age. With unwavering dedication, we aim to
                      transform education and make quality learning accessible
                      to all, fostering a brighter future for individuals and
                      communities worldwide.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Us",
  metadataBase: new URL("https://learnhqhome.vercel.app/about"),
  description:
    "LearnHQ About Us. we are a comprehensive learning management system that provides quality education and resources to students, teachers, and parents.",
  keywords: [
    "about learnhq",
    "learnhq mission",
    "learnhq africa",
    "learning management system",
    "online learning",
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
