import { BackgroundBeamsWithCollisionDemo } from "./Bg-collision";
import { Spotlight } from "./ui/Spotlight";

export const Hero = ()=>{
    return(
        <div>
            <Spotlight className="top-0 right-0 h-[40rem] w-[30rem]"fill="purple"/>
            <Spotlight className="-left-10 -bottom-10 h-[40rem] w-[30rem]" fill="blue"/>
            <Spotlight className="top-0 bottom-0 h-[40rem] w-[30rem]" fill="purple"/>

            <BackgroundBeamsWithCollisionDemo/>
        </div>
    );
};