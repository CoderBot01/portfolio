import { Certificates } from "@/components/Certificates";
import Contact from "@/components/Contact";
import { Experience } from "@/components/Experience";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectsMain } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/myData";

export default function Home() {
  return (
   <div className="bg-black">
    <FloatingNav navItems={navItems}/>
    <Hero/>
    <Skills/>
    <Certificates/>
    <br></br>
    <br></br>
    <br></br>
    <ProjectsMain/>
    <Experience/>
    <br></br>
    <br></br>
    <Contact/>
    <Footer/>
   </div>
  );
}
