import React from "react";
import SectionHeader from "@/layouts/section_header";
const Gallery = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-[40px]">
      <SectionHeader
        title="Our Gallery"
        sub_title="What are you can see about Us?"
        className="text-center "
      />
    </div>
  );
};

export default Gallery;
