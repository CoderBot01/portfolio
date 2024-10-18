'use client'
import { GlareCard } from "./ui/glare-card";


export function Certificates() {
    return (
        <div>
            <h1 className="flex justify-center items-center text-orange-300 font-bold text-6xl">"Credential Highlights"
            </h1><br></br>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">



            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
        </div>
        </div>
    );
}
