import React from "react";
import HoverCard from "@/components/static/hoverCards";
import SectionHeader from "@/components/static/section_header";

const About = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <SectionHeader title="About Us" sub_title="Who we are?" />
      {/* <div className="grid grid-cols-3 gap-20 py-3">
        <div className="bg-gray-300 px-6 py-3 w-full rounded ">
          <h5 className="text-center font-bold text-xl text-balance text-purple-700 ">
            Item 1
          </h5>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            praesentium. Eveniet quo totam assumenda harum neque! Nisi
            exercitationem inventore sequi.
          </p>
        </div>
        <div className="bg-gray-300 px-6 py-3 w-full rounded ">
          <h5 className="text-center font-bold text-xl text-balance text-purple-700 ">
            Item 2
          </h5>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            praesentium. Eveniet quo totam assumenda harum neque! Nisi
            exercitationem inventore sequi.
          </p>
        </div>
        <div className="bg-gray-300 px-6 py-3 w-full rounded ">
          <h5 className="text-center font-bold text-xl text-balance text-purple-700 ">
            Item 3
          </h5>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            praesentium. Eveniet quo totam assumenda harum neque! Nisi
            exercitationem inventore sequi.
          </p>
        </div>
      </div> */}

      <HoverCard />
    </div>
  );
};

export default About;
