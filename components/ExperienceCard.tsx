import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="w-screen h-[65vh] flex flex-col rounded-lg items-center sm:space-x-7 py-5 
      flex-shrink-0 sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]  
      hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="
        w-24 h-24 mb-2

        sm:w-32 sm:h-32 rounded-full xl:w-[150px] xl:h-[150px] object-cover sm:object-center sm:mb-4"
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
        alt=""
      />

      <div className="w-[80%] overflow-y-auto mt-2 sm:scrollbar-thin sm:scrollbar-track-transparent sm:scrollbar-thumb-[#FFE55C]/60
       px-0 md:px-10 sm:relative sm:w-[85%]">
        <h4 className="text-xl sm:text-4xl font-light">SDE</h4>
        <p className="text-lg font-bold sm:text-2xl mt-1">Groww</p>
        <div className="flex space-x-2 my-2">
          {/* TEch used */}
          <img
              
              className="h-10 w-10 rounded-full"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          <img
              
              className="h-10 w-10 rounded-full"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
          <img
              
              className="h-10 w-10 rounded-full"
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            />
        </div>
        <p className="uppercase sm:py-5 text-gray-300">
          Started work... - Ended ...
        </p>
        <ul className="list-disc sm:space-y-4 text-lg">
          <li>Summary POints</li>
          <li>Summary POints</li>
          <li>Summary POints</li>
          <li>Summary POints</li>
          <li>Summary POints</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
