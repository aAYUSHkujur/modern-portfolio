import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="pageHeading">Projects</h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#FFE55C]/60">
        {projects.map((project, i) => (
          <div className="p-5 mt-5 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center sm:p-20 sm:mt-0 md:p-44 sm:h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sm:h-[35vh] mt-[12vh] 2xl:h-[40vh] 2xl:mt-[6vh] sm:object-contain cursor-pointer"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
              alt=""
            />
            <div
              className="space-y-3
            sm:space-y-5 2xl:space-y-10 px-0 md:px-10 max-w-6xl"
            >
              <h4 className="text-xl sm:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study of {i + 1} of {projects.length} :
                </span>{" "}
                Ups
              </h4>
              <p
                className="text-sm
              overflow-y-auto max-h-[30vh] sm:text-lg text-center md:text-left"
              >
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. I
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#F7AB0A]/10 w-full absolute top-[30%] left-0 h-[40vh] sm:h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
