import Image from "next/image";
import React from "react";

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
      <div className="flex flex-col text-center">
        <div className="flex">
          <Image
            width={60}
            height={60}
            className="mr-2 w-20 rounded-sm"
            src={contact.icon}
            alt=""
          />
          <span className="">{contact.title}</span>
        </div>
        <span className="">{contact.info1}</span>
        <span className="">{contact.info2}</span>
      </div>
    );
  };
  return (
    <div className="container pt-6">
      <div className="text-white mx-auto">
        <div className="flex flex-col py-4 max-w-full">
          <div className="flex flex-col">
            <span className="text-4xl font-medium">Contact us</span>
            <span className="py-2">Curious about something?</span>
          </div>
          <div className="flex flex-wrap">
            {contacts.map((contact) => (
              <div className="flex flex-col">{contactCard(contact)}</div>
            ))}
          </div>
          <div className="">
            <div className="">
              <span className="font-semibold">Get in Touch</span>
              <span className="font-medium">
                Have a question or want to learn more about our services? Get in
                touch with our friendly team using the contact form, email, or
                phone number provided and we will get back to you promptly. We
                value your interest and look forward to assisting you!
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
