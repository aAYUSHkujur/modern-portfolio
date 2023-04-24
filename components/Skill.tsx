import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-[20vw] aspect-square rounded-full border flex items-center justify-center border-gray-500 sm:h-24 sm:w-24 xl:h-[11vh] xl:w-min 
      2xl:h-[13vh] 2xl:w-min filter group-hover:grayscale transition duration-300 ease-in-out z-0 overflow-hidden p-3"
      >
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt="skill"
          className="object-contain"
        />
        <div
          className="w-[20vw] aspect-square absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white 
        sm:h-24 sm:w-24 rounded-full xl:h-[11vh] xl:w-min 2xl:h-[13vh] 2xl:w-min"
        >
          <div className="flex items-center justify-center h-full">
            <p className="2xl:text-2xl font-bold text-black opacity-100">
              100%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;
