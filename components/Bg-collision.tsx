import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/Background";
import { FlipWords } from "./ui/About";
import { words } from "@/data/myData";
import { InfiniteMovingCards } from "./ui/Moving";


export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="">
      <div>
        <h2 className="text-xl relative z-20 md:text-3xl lg:text-4xl font-bold text-center text-slate-100 dark:text-white font-poppins tracking-tight">
          "Innovating Tomorrow's Interfaces, Today"{" "}
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-violet-500 via-blue-400 to-red-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span>Hi, I am Praveenkumar Ellaikkarasu</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-violet-500 via-blue-400 to-red-500 py-4">
              <span>Hi, I am Praveenkumar Ellaikkarasu</span>
            </div>
          </div>
        </h2>
        <br />
        <br />

        {/* "Who Am I?" Section */}
        <div className="text-4xl mx-auto font-normal text-slate-50 dark:text-slate-100">
          <h1 className="flex justify-center items-center text-orange-300 font-bold text-3xl">
            Who Am I?
          </h1>
          <br />
          {/* Corrected div with proper className closing */}
          <div className="h-auto flex justify-center items-center px-4 text-3xl font-poppins">
            <FlipWords words={words} />
          </div>
          <br />
        </div>

      </div>
    </BackgroundBeamsWithCollision>
  );
}
