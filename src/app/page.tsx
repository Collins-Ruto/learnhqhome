import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-100">
      <main className="container flex flex-col md:flex-row mx-auto px-4 md:px-6 py-4 md:flex">
        <div className="md:pt-16 text-center md:text-left order-last">
          <span className="font-bold text-[#6932FE] text-primary-500 text-sm text-center md:text-left uppercase">
            Transform Education
          </span>
          <h2 className="sm:mb-8 text-[#243E63] font-display text-4xl font-black text-secondary-500 md:text-3xl lg:text-5xl tracking-wide text-center mt-4 lg:leading-tight md:text-left">
            Discover, Collaborate, Succeed with LearnHq
          </h2>

          <p className="mt-4 text-justify px-4 text-gray-700 md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
            LearnHQ is a modern school & learning management system designed to
            provide quality education. We streamline Learning, teaching and
            management Experience with Our Intuitive management System to
            students, teachers.
          </p>
          <Link
            title="Get Started with LearnHq"
            href="https://twitter.com/Ruto_Collins_"
            className="inline-block mt-6 sm:mt-8 px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo font-semibold bg-indigo-600 active:bg-indigo-700 transition ease-in-out duration-150"
          >
            Get Started
          </Link>
        </div>
        <div className="ml-2 py-4 sm:pb-6 md:p-0 ">
          <Image width={1200} height={400} src="/hero.webp" alt="hero" />
        </div>
      </main>
      {/* <div className="flex text-black flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center">
        <div className="md:w-6/12 mt-16 md:mt-0 md:mr-12 lg:mr-16 md:order-first">
          <div className="g:py-8 text-center md:text-left">
            
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
              Travel blog featuring travel tips, guides, and photography from
              around the world. Whether you need guidance for your first trip,
              or you're a seasoned traveler looking for destination inspiration,
              you've come to the right place!
            </p>
            
          </div>
        </div>
      </div> */}
    </div>
  );
}
