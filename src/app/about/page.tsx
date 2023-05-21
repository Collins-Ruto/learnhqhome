import React from 'react'
import { Metadata } from 'next';

export default function page() {
  return (
    <div className="bg-white">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section className="relative px-8">
            <div className="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
              <div className="my-6 prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full">
                <h1>About Us</h1>
                <p>
                  <span>
                    We provide schools and learners with comprehensive Learning
                    Management System (LMS) and School Management System
                    solutions (SMS). Our Learning Management System offers a
                    cutting-edge platform that empowers educational
                    institutions, instructors, and learners alike. With our
                    intuitive interface and robust features, we enable seamless
                    online learning, making education accessible anytime,
                    anywhere. Currently our systems are tuned with priority
                    secondary schools.
                  </span>
                </p>
                <blockquote>
                  <p>
                    <span>
                      Learning reigns supreme and knowledge is crowned.
                    </span>
                  </p>
                </blockquote>
                <h3>Our Mission</h3>
                <p>
                  <span>
                    At LearnHq, our mission is to revolutionize education by
                    providing innovative and user-friendly Learning Management
                    System (LMS) and School Management System solutions. We are
                    committed to simplifying the learning experience, empowering
                    educators, and enabling learners to thrive in a digital age.
                    With unwavering dedication, we aim to transform education
                    and make quality learning accessible to all, fostering a
                    brighter future for individuals and communities worldwide.
                  </span>
                </p>
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
  metadataBase: new URL("https://learnhq.vercel.app/about"),
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