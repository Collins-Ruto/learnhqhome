import { Contact, Stats, WhyUs } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 ">
      <div className="">
        <main className="container min-h-[calc(100vh_-_3.5rem)] 2xl:min-h-[34rem] 2xl:pb-16 px-5 sm:px-6 m:px-0 lg:px-20  flex flex-col md:flex-row mx-auto py-4 md:flex items-center justify-center">
          <div className="flex gap-2 sm:gap-4 flex-col md:block text-center md:text-left order-last md:order-first">
            <span className="font-bold text-[#6932FE] text-primary-500 text-sm text-center md:text-left uppercase">
              Transform Education
            </span>
            <h2 className="sm:mb-8 text-[#243E63] font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">
              Discover, Collaborate, Succeed with LearnHq
            </h2>

            <p className="mt-4 text-justify  text-gray-700 md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
              LearnHQ is a modern school & learning management system designed
              to provide quality education. We streamline Learning, teaching and
              management Experience with Our Intuitive management System to
              students, teachers.
            </p>
            <Link
              title="Get Started with LearnHq"
              href="https://learnhq.vercel.app/login"
              className="inline-block mt-6 sm:mt-8 px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo font-semibold bg-indigo-600 active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Try Demo
            </Link>
          </div>
          <div className="ml-2 pb-8 md:p-0 ">
            <Image width={1200} height={400} src="/hero.webp" alt="learnhq" />
          </div>
        </main>
        
        <div className="bg-[url('/bookbg.webp')] bg-cover bg-center py-[4rem] ">
          <div className="container px-5 sm:px-6 m:px-0 lg:px-20 mx-auto">
            <WhyUs />
          </div>
        </div>
        <div className="pt-[4rem] text-black">
          <div className=" bg-[url('/stat1.jpg')] bg-fixed bg-cover bg-center">
            <div className="mx-auto  bg-black bg-opacity-60">
              <div className="container py-[2rem] px-5 sm:px-6 m:px-0 lg:px-20 mx-auto">
                <Stats />
              </div>
            </div>
          </div>
        </div>
        <div className="py-[4rem] px-5">
          <div className="container mx-auto bg-[url('/contactbg.webp')] bg-cover bg-center  ">
            <div className=" px-4 sm:px-6 bg-slate-900 bg-opacity-60 m:px-0 lg:px-20 mx-auto">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
