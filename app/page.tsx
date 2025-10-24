import { Hero } from "@/components/hero";
import { Intro } from "@/components/intro";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Projects />
    </>
  );
};

export default Home;
