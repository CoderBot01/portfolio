"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/Moving";
import {skills} from "@/data/myData"

export function Skills() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="flex justify-center items-center text-orange-300 font-bold text-6xl">"What I Bring"</h1><br></br>
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

