import React from "react";

// type userInput = {
//   name: string;
//   email: string;
//   message: string;
// };

function ContactForm() {
  return (
    <div>
      <form
        className="flex flex-col gap-4"
        action="https://formsubmit.co/76e790e2609584c53fda7e9658fbf3ae"
        method="POST"
      >
        <div className="flex-col sm:flex-row flex gap-4 justify-between w-full">
          <input
            name="name"
            className="focus:shadow-outline block w-full appearance-none rounded border px-3 py-4 leading-tight bg-slate-900 bg-opacity-80 placeholder-white shadow focus:outline-none"
            type="text"
            placeholder="Your Name"
          />

          <input
            name="email"
            className="focus:shadow-outline block w-full appearance-none rounded border px-3 py-4 leading-tight bg-slate-900 bg-opacity-80 placeholder-white shadow focus:outline-none"
            type="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className=" flex cursor-pointer">
          <textarea
            name="message"
            className="focus:shadow-outline block w-full text-white rounded border px-3 py-4 leading-tight bg-slate-900 bg-opacity-80 placeholder-white shadow focus:outline-none"
            rows={3}
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
        <div className="w-full flex justify-center sm:justify-start">
          <button className="inline-block w-[50%]  mt-6 sm:mt-8 px-8 py-3 border border-transparent text-base leading-6 rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo font-semibold bg-indigo-600 active:bg-indigo-700 transition ease-in-out duration-150">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
