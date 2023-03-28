import { stats } from "@/assets/data";
import Image from "next/image";
import React from "react";

type Stat = {
  icon: string;
  title: string;
  value: string;
};

function Stats() {
  const statCard = (stat: Stat) => {
    return (
      <div className="flex flex-col gap-2 items-center bg-gray-200 py-4 p-2 rounded-lg">
        <Image
          width={60}
          height={60}
          className="mr-2 w-15 rounded-sm"
          src={stat.icon}
          alt=""
        />
            <span className="text-4xl font-bold">{stat.value}</span>
            <div className="w-[25%] h-1 bg-pink-500"></div>
        <span className="text-2xl font-semibold">{stat.title}</span>
      </div>
    );
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-4xl font-bold text-center underline underline-offset-4 pb-4">Current Progress</div>
        <div className="flex py-4 gap-4 flex-wrap md:flex-nowrap sm:flex-row">
          {stats.map((stat, index) => (
            <div className="w-1/3 md:w-1/4 grow" key={index}>
              {statCard(stat)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
