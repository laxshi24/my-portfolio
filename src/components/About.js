import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/me.jpg';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
        {/* Animated Text Section */}
        <motion.div
          className='mt-4 md:mt-0 text-left flex'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 2, x: 0 }}
          transition={{ duration: 2 }}
        >
          <div className='my-auto mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About me</h2>
            <p className='text-base'>
              Hi, I’m Laxshika Sivalingam, a student at the Sri Lanka Institute of Information Technology (SLIIT). I have completed my Diploma in Information Technology and am currently pursuing a degree specializing in Information Technology. I am an aspiring Software Engineer with experience in building innovative and user-friendly web applications. I have worked on impactful projects such as the Online Recipe Management System (HTML, CSS, JavaScript, PHP), Online Grocery Ordering System (Java, MySQL), Fit Club (React.js, Tailwind CSS), and Online Logistics Management System (MongoDB, React, Express.js, Node.js).
              <br />
              <br />
              My expertise includes React, Node.js, MongoDB, and Tailwind CSS, with a focus on creating seamless user experiences and scalable solutions. Currently, I am an aspiring MERN Stack Developer dedicated to continuous learning and leveraging modern tools and technologies to solve real-world challenges. My ultimate goal is to grow into a top software engineer, making meaningful contributions through technology.
            </p>
          </div>
        </motion.div>

        {/* Animated Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            className='mx-auto rounded-3xl py-8 md:py-0'
            src={aboutImg}
            alt="Laxshika"
            width={300}
            height={300}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
