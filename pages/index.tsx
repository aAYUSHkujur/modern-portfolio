import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Link from "next/link";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60"
    >
      <Head>
        <title>Aayush&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 ">
        <div className="flex items-center justify-center ">
          <Link href="#hero">
            <div className="max-w-fit hover:after:content-['↑'] hover:after:absolute after:translate-x-10 hover:after:translate-x-14 after:-translate-y-10 hover:after:-translate-y-10 hover:after:font-bold hover:after:text-3xl hover:after:text-[#FFE55C]/90 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:opacity-100 after:opacity-0 hover:after:-mx-5 hover:after:px-5">
              <img
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer  "
                src="https://i.ibb.co/svscfdV/logo-2.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;