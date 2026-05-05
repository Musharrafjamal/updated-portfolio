import Tools from "@/components/home/Tools";
import About from "@/components/home/About";
import Work from "@/components/work/Work";
import Footer from "@/components/home/footer";
import NewHero from "@/components/home/hero/new-hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
      <NewHero />

      <Work />

      {/* <CircularToolSelection /> */}
      <Tools />
      <About />
      <Footer />
    </div>
  );
}
