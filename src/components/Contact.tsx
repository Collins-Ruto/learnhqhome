import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

type Contact = {
  icon: string;
  title: string;
  info1: string;
  info2: string;
};

function Contact() {
  const contacts = [
    {
      icon: "https://img.icons8.com/material-rounded/50/89CFF0/dashboard-layout.png",
      title: "EMAIL",
      info1: "learnhqafrica@gmail.com",
      info2: "collinsruto48@gmail.com",
    },
    {
      icon: "https://img.icons8.com/material-rounded/50/89CFF0/dashboard-layout.png",
      title: "PHONE",
      info1: "+254711339134",
      info2: "+254785767763",
    },
    {
      icon: "https://img.icons8.com/material-rounded/50/89CFF0/dashboard-layout.png",
      title: "ADDRESS",
      info1: "Highrise house",
      info2: "Saba Saba Mombasa, Kenya",
    },
  ];

  const contactCard = (contact: Contact) => {
    return (
      <div className="flex flex-col py-6 gap-3 text-center bg-slate-50 rounded-md">
        <div className="flex mx-auto">
          <Image
            width={60}
            height={60}
            className="mr-2 w-6 rounded-sm"
            src={contact.icon}
            alt=""
          />
          <span className="text-black font-semibold">{contact.title}</span>
        </div>
        <span className="text-gray-700 ">{contact.info1}</span>
        <span className="text-gray-700 ">{contact.info2}</span>
      </div>
    );
  };
  return (
    <div className="container py-6">
      <div className="text-white mx-auto">
        <div className="flex flex-col py-4 gap-6 max-w-full flex-wrap">
          <div className="flex flex-col">
            <span className="text-4xl font-medium">Contact us</span>
            <span className="py-2">Curious about something?</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {contacts.map((contact) => (
              <div className="w-1/2 md:w-1/3 lg:w-1/4 grow">
                {contactCard(contact)}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap lg:grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col gap-3 w-full">
              <span className="font-semibold text-xl underline underline-offset-4">
                Get in Touch
              </span>
              <span className="font-medium lg:max-w-[24rem]">
                Have a question or want to learn more about our services? Get in
                touch with our friendly team using the contact form, email, or
                phone number provided and we will get back to you promptly. We
                value your interest and look forward to assisting you!
              </span>
            </div>
            <div className="col-span-2 w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
