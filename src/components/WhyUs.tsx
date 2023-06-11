import Image from "next/image";
import { attributes } from "@/assets/data";

type Attribute = {
  title: string;
  image: string;
};

function WhyUs() {
  const attributeCard = (attribute: Attribute) => {
    return (
      <div className="p-4 items-center flex bg-opacity-90 bg-blue-900">
        <Image
          width={60}
          height={60}
          className="mr-2 w-15 rounded-sm"
          src={attribute.image}
          alt={`LearnHq ${attribute.title}`}
        />
        <span className="uppercase font-semibold">{attribute.title}</span>
      </div>
    );
  };
  return (
    <div className="container sm:pt-6">
      <div className="text-white mx-auto">
        <div className="flex flex-col py-4  max-w-full">
          <span className="text-4xl sm:text-5xl font-medium">Why Choose Us?</span>
          <span className="text py-2 ">
            Take a chance in simplifying learning & management with us!
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          {attributes.map((attribute, index) => (
            <div className={`w-1/2 md:w-1/3 lg:w-1/4 grow ${index > 6 ? "hidden md:block" : "block"}`}key={index}>
              {attributeCard(attribute)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
