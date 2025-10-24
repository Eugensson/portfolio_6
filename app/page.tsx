import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
    </>
  );
};

export default Home;
