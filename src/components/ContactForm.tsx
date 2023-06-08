import React from "react";

type userInput = {
  name: string;
  email: string;
  message: string;
};

function ContactForm() {
  return (
    <div>
      <form
        className="flex flex-col"
        action="https://formsubmit.co/76e790e2609584c53fda7e9658fbf3ae"
        method="POST"
      >
        <div className="">
          <div className="">
            <div className="relative flex cursor-pointer items-center">
              <input
                name="name"
                className="focus:shadow-outline block w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="relative flex cursor-pointer items-center">
              <input
                name="email"
                className="focus:shadow-outline block w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
          <div className="relative flex cursor-pointer items-center">
            <textarea
              name="message"
              className="focus:shadow-outline block w-full appearance-none rounded border px-3 py-3 leading-tight text-gray-700 shadow focus:outline-none"
              rows={2}
              placeholder="A message for us ..."
            />
          </div>
          <input
            type="hidden"
            name="_next"
            value="https://learnhqhome.vercel.app"
          ></input>
          <input
            type="hidden"
            name="_subject"
            value="New LearnHq submission!"
          ></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>
          <button className="inline-block mt-6 sm:mt-8 px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo font-semibold bg-indigo-600 active:bg-indigo-700 transition ease-in-out duration-150">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
