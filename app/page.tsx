import { Certificates } from "@/components/Certificates";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/myData";

export default function Home() {
  return (
   <div className="bg-white">
    <FloatingNav navItems={navItems}/>
    <Hero/>
    <Skills/>
    <Certificates/>
   </div>
  );
}
