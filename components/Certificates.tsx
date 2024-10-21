'use client'
import { GlareCard } from "./ui/glare-card";
import Image from "next/image";
export function Certificates() {
    return (
        <div>
            <h1 className="flex justify-center items-center text-orange-300 font-bold text-3xl">"Evidence of expertise"
            </h1><br></br>
            <br>
            </br>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:flex items-center justify-center ">



                {/* <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                    <Image
                        src="/ibm.jpg"
                        alt="Logo"
                        width={200}
                        height={100}
                    />
                    <p className="font-bold text-white text-lg">The greatest trick</p>
                    <p className="font-normal text-base text-neutral-200 mt-4">
                        The greatest trick the devil ever pulled was to convince the world
                        that he didn&apos;t exist.
                    </p>
                </GlareCard> */}
                <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <Image
                        src="/web.jpg"
                        alt="Logo"
                        width={300}
                        height={200}
                    />
                    <p className="font-bold text-white text-lg">Web Development from ATAS</p>
                    <p className="font-normal text-base text-neutral-200 mt-4">

"I am developing my knowledge of front-end technologies through this course."
                    </p>
                </GlareCard>
                <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <Image
                        src="/python.jpg"
                        alt="Logo"
                        width={300}
                        height={200}
                    />
                    <p className="font-bold text-white text-lg">Python Full stack</p>
                    <p className="font-normal text-base text-neutral-200 mt-4">

"I have learned full stack development with technologies such as 'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', and 'Python'."
                    </p>
                </GlareCard>
                <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <Image
                        src="/sqlInjection.png"
                        alt="Logo"
                        width={300}
                        height={200}
                    />
                    <p className="font-bold text-white text-lg">SQL Injection Attack from EC-Council</p>
                    <p className="font-normal text-base text-neutral-200 mt-4">
                        "I have learned to use SQl Injection tools to Identify the vulnerability"
                    </p>
                </GlareCard>
            </div>
        </div>
    );
}
