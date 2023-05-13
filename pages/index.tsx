import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Link from "next/link";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocial } from "../utils/fetchSocials";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60"
    >
      <Head>
        <title>{`${pageInfo?.name} - Portfolio`}</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 ">
        <div className="flex items-center justify-center ">
          <Link href="#hero">
            <div className="max-w-fit hover:after:content-['↑'] hover:after:absolute after:translate-x-10 hover:after:translate-x-5 after:-translate-y-10 hover:after:-translate-y-0 hover:after:font-bold hover:after:text-3xl hover:after:text-[#FFE55C]/90 hover:after:transition-all hover:after:duration-300 hover:after:ease-in-out hover:after:opacity-100 after:opacity-0 hover:after:-mx-5 hover:after:px-5">
              <Image
                className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                src="https://i.ibb.co/svscfdV/logo-2.png"
                alt=""
                height={40}
                width={40}
              />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  if (!pageInfo) {
    return {
      notFound: true,
    };
  }
  if (!experiences) {
    return {
      notFound: true,
    };
  }
  if (!skills) {
    return {
      notFound: true,
    };
  }
  if (!projects) {
    return {
      notFound: true,
    };
  }
  if (!socials) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // NEXT.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};
