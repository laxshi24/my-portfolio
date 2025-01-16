import React from 'react';
import { motion } from 'framer-motion';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import tailwindcss from '../assets/tailwind.png';
import mern from '../assets/images-removebg-preview.png';
import react from '../assets/react (2).png';
import mongo from '../assets/mongodb.png';
import node from '../assets/node.png';

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 max-w-[1400px] mx-auto grid grid-cols-3 lg:grid-cols-8 md:grid-cols-8 sm:grid-cols-4 gap-4 place-items-center'>
      <motion.h2
        className='text-gray-700 text-xl md:text-4xl font-bold m-4'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My <br /> Tech <br /> Stack
      </motion.h2>

      <motion.div
        className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img src={html} alt="" />
        <p className='mt-2'>HTML</p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img src={css} alt="" width={100} height={100} />
        <p className='mt-2'>CSS</p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img src={js} alt="" width={100} height={100} />
        <p className='mt-2'>Java Script</p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src={tailwindcss} alt="" width={100} height={100} />
        <p className='mt-2'>Tailwind CSS</p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <img src={react} alt="" width={100} height={100} />
        <p className='mt-2'>React</p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <img src={node} alt="" width={100} height={100} />
        <p className='mt-2'>Node js</p>
      </motion.div>

      <motion.div
        className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <img src={mongo} alt="" width={100} height={100} />
        <p className='mt-2'>Mongo DB</p>
      </motion.div>
    </div>
  );
};

export default Skills;
