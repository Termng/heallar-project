"use client";
import React from "react";
import "../globals.css";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { Playcircle, Person, Cardiogram } from "./Images";
import image2 from "../../public/images/side-view-smiley-doctor-work.jpg";
import image3 from "../../public/images/smiling-black-doctor-with-papers.jpg";
import cardio from "../../public/images/cardiogram.svg";
import { PlaceholdersAndVanishInputDemo } from "./Vanish";
import Blog from "./Blog";
import { InfiniteMovingCardsDemo } from "./MoveCards";

export function WavyBackgroundDemo() {
  return (
    <div>
      <PlaceholdersAndVanishInputDemo/>

    <div className="flex justify-evenly w-auto items-center px-32 gap-10 py-16 ">
      <div className="inline-flex items-start flex-col justify-center gap-5">

       
        <h1 className="text-6xl  font-medium  leading-tight tracking-tighter">
          <span className="text-heallar-primary" style={{ fontFamily: "sora" }}>
            150,000+{" "}
          </span>
          Expert Medical Insights at Your Fingertips
        </h1>
        <h2 className="w-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus maxime
          eaque nisi.
        </h2>
        {/* <Button radius="full" endContent= {<UserIcon/>}>Get Started</Button> */}
        <div className="space-x-4">
          <Button
            radius="full"
            endContent={<Playcircle />}
            className="bg-heallar-primary text-white"
          >
            {" "}
            See Demo
          </Button>
          <Button
            radius="full"
            variant="bordered"
            endContent={<Person />}
            className=" text-heallar-primary border-heallar-primary"
          >
            {" "}
            Get Started
          </Button>
        </div>
      </div>
      <div>
        {/* <div className="w-40 h-40">
          <Image className="object-cover" src={cardio} alt=""></Image>
        </div> */}

        <div
          className="shadow-heallar "
          style={{ maxWidth: "1080px", maxHeight: "520px" }}
        >
          <Image
            className="object-contain w-full h-full rounded-md shadow-heallar"
            src={image3}
            alt="Description"
          />
        </div>
      </div>
    </div>
    <Blog/>
    <InfiniteMovingCardsDemo/>

    </div>
  );
}
