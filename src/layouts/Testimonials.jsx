// import React from "react";
// import SectionHeader from "@/components/static/section_header";

// const Testimonials = () => {
//   return (
//     <div className="flex items-center justify-center flex-col">
//       <SectionHeader
//         title="Testimonials"
//         sub_title="What people say about Us?"
//       />
//       <div className="grid grid-cols-3 gap-20 py-3">
//         <div className="bg-gray-300 px-6 py-3 w-full rounded ">
//           <h5 className="text-center font-bold text-xl text-balance text-purple-700 ">
//             Item 1
//           </h5>
//           <p className="text-lg text-muted-foreground">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
//             praesentium. Eveniet quo totam assumenda harum neque! Nisi
//             exercitationem inventore sequi.
//           </p>
//         </div>
//         <div className="bg-gray-300 px-6 py-3 w-full rounded ">
//           <h5 className="text-center font-bold text-xl text-balance text-purple-700 ">
//             Item 2
//           </h5>
//           <p className="text-lg text-muted-foreground">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
//             praesentium. Eveniet quo totam assumenda harum neque! Nisi
//             exercitationem inventore sequi.
//           </p>
//         </div>
//         <div className="bg-gray-300 px-6 py-3 w-full rounded ">
//           <h5 className="text-center font-bold text-xl text-balance text-purple-700 ">
//             Item 3
//           </h5>
//           <p className="text-lg text-muted-foreground">
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
//             praesentium. Eveniet quo totam assumenda harum neque! Nisi
//             exercitationem inventore sequi.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import SectionHeader from "@/components/static/section_header";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
      <SectionHeader
        title="Testimonials"
        sub_title="What people say about Us?"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
