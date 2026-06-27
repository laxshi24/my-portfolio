import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/Laxshika_2.jpeg';

const About = () => {
  return (
    <>
      <style>{`
        .about-root {
          background: #F8F9FF;
          padding: 7rem 2.5rem;
        }
        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 900px) {
          .about-inner { grid-template-columns: 1fr; gap: 3rem; }
          .about-img-col { order: 2; }
          .about-text-col { order: 1; }
        }
        /* Image side */
        .about-img-col { position: relative; }
        .about-img-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(245,158,11,0.08));
          border-radius: 1.75rem;
          transform: rotate(-2deg);
        }
        .about-img-main {
          position: relative;
          z-index: 1;
          width: 100%;
          height: auto;
          border-radius: 1.5rem;
          object-fit: cover;
          display: block;
          box-shadow: 0 24px 80px rgba(0,0,0,0.12);
        }
        /* Text side */
        .about-text-col {}
        .about-eyebrow {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6366F1;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .about-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6366F1;
        }
        .about-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #0A0A0F;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 2rem;
        }
        .about-heading em {
          font-style: normal;
          color: #6366F1;
        }
        .about-body {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #4A5568;
          line-height: 1.85;
          margin-bottom: 1.25rem;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-top: 2.5rem;
        }
        .stat-card {
          background: #fff;
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(99,102,241,0.12);
        }
        .stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 2.5rem;
          color: #6366F1;
          line-height: 1;
          margin-bottom: 0.4rem;
          display: block;
        }
        .stat-number.dark { color: #0A0A0F; }
        .stat-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8892A4;
        }
      `}</style>

      <section className="about-root" id="about">
        <div className="about-inner">
          <motion.div
            className="about-img-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-img-bg" />
            <img src={aboutImg} alt="Laxshika" className="about-img-main" />
          </motion.div>

          <motion.div
            className="about-text-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="about-eyebrow">Get to know me</p>
            <h2 className="about-heading">About <em>Me</em></h2>

            <p className="about-body">
              I am a Software Engineering graduate with a strong foundation in full-stack web development and scalable application design. Experienced in developing MERN stack applications, responsive user interfaces, and RESTful APIs through academic research and industry projects.
            </p>
            <p className="about-body">
              Proficient in Python, Java, React, Node.js, Spring Boot, Flutter, and MongoDB, with hands-on experience in software testing, UI/UX design, and Agile development practices. A quick learner with strong analytical, problem-solving, and collaboration skills, passionate about building innovative, high-quality software solutions.
            </p>

            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat-card">
                <span className="stat-number dark">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;