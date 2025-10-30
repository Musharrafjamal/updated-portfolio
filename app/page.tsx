import Tools from "@/components/home/Tools";
import About from "@/components/home/About";
import Work from "@/components/work/Work";
import Footer from "@/components/home/footer";
import NewHero from "@/components/home/hero/new-hero";

export default function Home() {
  return (
    <div className="min-h-screen w-5/6 mx-auto">
      <NewHero />

      <Work />

      {/* <CircularToolSelection /> */}
      <Tools />
      <About />
      <Footer />
    </div>
  );
}
