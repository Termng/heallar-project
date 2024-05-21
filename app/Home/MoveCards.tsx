"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./MovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="py-10">
        <h2 className="text-5xl  font-medium  leading-tight tracking-tighter text-center">What do our Users say about us</h2>
        <h3 className="text-xl  font-normal  leading-tight  text-center py-4">Our <span className="text-heallar-primary">20,000+</span> customers have only positive things to say about us! Take a look.</h3>
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center  relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}

const testimonials = [
    {
      quote:
        "Heallar is a game-changer for medical professionals. The peer-reviewed articles are thorough, accurate, and immensely helpful for my practice.",
      name: "Dr. John Smith",
      title: "Cardiologist",
    },
    {
      quote:
        "As a medical student, Heallar has been an invaluable resource. The articles are up-to-date and have helped me stay on top of the latest medical research.",
      name: "Emily Johnson",
      title: "Medical Student",
    },
    {
      quote:
        "Heallar's dedication to providing accurate and peer-reviewed medical information is unmatched. It's my go-to source for reliable medical articles.",
      name: "Dr. Sarah Lee",
      title: "General Practitioner",
    },
    {
      quote:
        "The quality and accuracy of the articles on Heallar are exceptional. It's an indispensable resource for anyone in the medical field.",
      name: "Torah Felix",
      title: "Surgeon",
    },
    {
      quote:
        "Heallar has significantly improved my research process. The peer-reviewed articles save me time and ensure I'm getting the most reliable information available.",
      name: "Dr. Linda Green",
      title: "Research Scientist",
    },
  ];
  