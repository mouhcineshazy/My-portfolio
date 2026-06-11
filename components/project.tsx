'use client';

import type { ProjectData } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectProps = ProjectData;

export default function Project({
  title,
  tags,
  description,
  imageUrl,
}: ProjectProps) {
  const wrapperDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperDivRef,
    offset: ['0 1', '1.33 1'], // 0 is the end of the bottom if the view port and 1 is for the top of the target see documentation of framer motion and [1.33 1] is specifying where it should end
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={wrapperDivRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[42rem] border
       border-black/5 rounded-lg overflow-hidden sm:pr-8 
       relative sm:h-[20rem]  hover:bg-gray-200 transition 
       sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 
        sm:pr-2 sm:pt-10 sm:max-w-[50%] 
        flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="project I worked on"
          quality={90}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] 
            rounded-t-lg shadow-2xl 
            group-even:right-[initial] 
            group-even:-left-40 
            group-hover:-translate-x-3 
            group-hover:translate-y-3 
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3 
            group-evengroup-hover:translate-y-3 
            group-even:group-hover:rotate-2
            group-hover:scale-[1.04]
            transition 
            "
        />
      </section>
    </motion.div>
  );
}
