import { Hero } from "@/components/hero";
import { Faqs } from "@/components/faqs";
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
      <Faqs />
    </>
  );
};

export default Home;
