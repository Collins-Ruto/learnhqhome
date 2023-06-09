import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">
        <div className="container px-8 py-8 sm:px-6 lg:px-20 lg:max-w-[70%] mx-auto 2xl:max-w-screen-xl sm:pt-16">
          <h2 className="mb-4 text-center text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Privacy Policy
          </h2>
          <h2 className="mb-8 text-center text-gray-700 dark:text-gray-300 tracking-tight font-semibold ">
            Last updated on June 09, 2023
          </h2>
          <div className="">
            <p className="pb-4">
              At LearnHq, we are committed to protecting your privacy. This
              Privacy Policy outlines how we collect, use, and safeguard your
              personal information when you interact with our website and
              services. By using our platform, you consent to the practices
              described in this policy.
            </p>
            <ul className="flex flex-col gap-4 pl-6">
              <li className="flex flex-col">
                <span className="text-xl font-semibold">
                  {" "}
                  Information Collection:{" "}
                </span>
                We may collect personal information, such as your name, email
                address, and contact details, when you submit forms or interact
                with our services.
              </li>
              <li className="flex flex-col">
                <span className="text-xl font-semibold">
                  {" "}
                  Usage of Information:{" "}
                </span>
                The personal information we collect is used to provide and
                improve our services, respond to inquiries, and communicate with
                you. We may also use the information to send you relevant
                updates and promotional materials, but you can opt-out at any
                time.
              </li>
              <li className="flex flex-col">
                <span className="text-xl font-semibold">
                  {" "}
                  Information Sharing:{" "}
                </span>
                We do not sell or share your personal information with third
                parties, except for specific purposes such as providing support
                or complying with legal obligations.
              </li>
              <li className="flex flex-col">
                <span className="text-xl font-semibold"> Data Security: </span>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure.
              </li>
              <li className="flex flex-col">
                <span className="text-xl font-semibold">
                  {" "}
                  Third-Party Links:{" "}
                </span>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those websites.
              </li>
              <li className="flex flex-col">
                <span className="text-xl font-semibold">
                  {" "}
                  Updates to Privacy Policy:{" "}
                </span>
                We may update our Privacy Policy from time to time, and any
                changes will be posted on this page. It is recommended to review
                the policy periodically.
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="pt-4 pb-2 text-2xl font-bold">Contacting us</h1>
            <p className="">
              If you have any questions or concerns about our Privacy Policy or
              how we handle your personal information, please contact us at: {" "}
              <Link href="mailto:learnhqafrica@gmail.com" className="text-blue-500">
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
