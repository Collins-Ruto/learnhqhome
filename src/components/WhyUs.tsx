import Image from "next/image";
import React from "react";
type Attribute = {
  title: string;
  image: string;
};
const attributes = [
  {
    title: "Trending and certified courses",
    image:
      "https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
  },
  {
    title: "Trending and certified courses",
    image:
      "https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
  },
  {
    title: "Trending and certified courses",
    image:
      "https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
  },
  {
    title: "Trending and certified courses",
    image:
      "https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
  },
  {
    title: "Trending and certified courses",
    image:
      "https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
  },
  {
    title: "Trending and certified courses",
    image:
      "https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
  },
  {
    title: "Trending and certified courses",
    image:
      "https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
  },
];

function WhyUs() {
  const attributeCard = (attribute: Attribute) => {
    return (
      <div className="p-4 items-center flex bg-opacity-80 bg-blue-800">
        <Image
          width={60}
          height={60}
          className="mr-2 w-20 rounded-sm bg-[#F7F6FB]"
          src={attribute.image}
          alt=""
        />
        <span className="uppercase font-semibold">{attribute.title}</span>
      </div>
    );
  };
  return (
    <div className="container pt-12">
      <div className="text-white mx-auto">
        <div className="flex flex-col py-4  max-w-full">
          <span className="text-4xl font-semibold">Why Choose Us</span>
          <span className="text ">
            Take a chance in simplifying learning with us!
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          {attributes.map((attribute) => (
            <div className="w-1/2 md:w-1/3 lg:w-1/4 grow">
              {attributeCard(attribute)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
