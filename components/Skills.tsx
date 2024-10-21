"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/Moving";
import {skills} from "@/data/myData"

export function Skills() {
  return (
    <div className="h-[40rem] top-0 right-0 rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden sm:flex text-3xl">
      <h1 className="flex justify-center items-center top-0 text-orange-300 font-bold text-3xl">"The assets I bring"</h1><br></br>
      <InfiniteMovingCards
        items={skills}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

