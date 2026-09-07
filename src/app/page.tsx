import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Capabilities } from "@/components/Capabilities";
import { Process } from "@/components/Process";
import { Technologies } from "@/components/Technologies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Capabilities />
        <Process />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
