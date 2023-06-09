import { Contact } from "@/components";
import React from "react";

function page() {
  return (
    <div>
      <div className="bg-[url('/contactbg.webp')] bg-cover bg-center ">
        <div className="bg-slate-900 bg-opacity-60 ">
          <div className="container px-8 sm:px-6  m:px-0 lg:px-20 mx-auto">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
