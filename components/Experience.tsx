import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
    const data = [
        {
            title: "Labelbees 2024",
            content: (
                <div>
                    <p className="text-black flex items-center justify-center dark:text-neutral-200 rounded-md border-4 divide-y-3 p-2  bg-cyan-400 text-xs md:text-sm font-bold mb-8 md:w-52 lg:w-96 ">
                        Machine Learning Data Specialist
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                    <p className="text-black flex items-center justify-center dark:text-neutral-200 rounded-md border-4 divide-y-3 p-2  bg-cyan-400 text-xs md:text-sm font-bold mb-8 md:w-72 lg:w-96 ">
                            I have extensive experience in data annotation using tools such as Labelbox, QGIS, CVAT, and LabelMe.
                            My proficiency extends to annotating both Synthetic Aperture Radar (SAR) images and optical images, ensuring precise labeling and categorization for various machine learning tasks.</p>

                    </div>
                </div>
            ),
        },

    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
