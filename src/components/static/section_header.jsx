import React from "react";

const sectionHeader = ({ title, sub_title }) => {
  return (
    <div>
      <h2 className="scroll-m-20 underline underline-offset-8  mb-2 border-stone-400 text-3xl font-bold  tracking-tight first:mt-0 text-purple-800 text-center  ">
        {title}
      </h2>
      <p className="text-center">{sub_title}</p>
    </div>
  );
};

export default sectionHeader;
