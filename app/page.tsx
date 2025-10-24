import { Hero } from "@/components/hero";
import { Faqs } from "@/components/faqs";
import { Intro } from "@/components/intro";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
      <Footer />
    </>
  );
};

export default Home;
