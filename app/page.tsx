import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Ref from "@/components/sub/Ref";

export default function Home() {
  return (
   <main className= 'h-auto w-auto'>
      <div className= 'flex flex-col gap-20'>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
      </div>    
   </main>
  );
}
