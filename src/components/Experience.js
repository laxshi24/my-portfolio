import React from 'react';
import { motion } from 'framer-motion';

const bullets = [
  'Contributed to the end-to-end development of a large-scale web application using the MERN Stack following Agile practices.',
  'Designed UI/UX wireframes and transformed Figma designs into responsive, reusable React.js components for desktop and mobile platforms.',
  'Implemented complete CRUD functionality for Instructor, Exam, and Quiz Management modules with search, filtering, form validation, and PDF report generation.',
  'Developed and integrated RESTful APIs with MongoDB, enabling efficient frontend-backend communication and data management.',
  'Performed API testing with Postman and resolved frontend, backend, database, and responsive UI issues through debugging and optimization.',
  'Applied Git and GitHub workflows, including branching, pull requests, code reviews, merge conflict resolution, and collaborative development.',
];

const Experience = () => {
  return (
    <>
      <style>{`
        .exp-root {
          background: #0A0A0F;
          padding: 7rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .exp-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, rgba(99,102,241,0.2), transparent);
        }
        .exp-inner {
          max-width: 900px;
          margin: 0 auto;
        }
        .exp-eyebrow {
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
        .exp-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6366F1;
        }
        .exp-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #F8F9FF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .exp-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #8892A4;
          margin-bottom: 3.5rem;
        }
        .exp-card {
          background: #0D0D15;
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 1.5rem;
          padding: 2.75rem 3rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s;
        }
        .exp-card:hover { border-color: rgba(99,102,241,0.4); }
        .exp-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #6366F1, #F59E0B);
          border-radius: 4px 0 0 4px;
        }
        .exp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .exp-role {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.6rem;
          color: #F8F9FF;
          margin: 0 0 0.3rem;
          letter-spacing: -0.02em;
        }
        .exp-company {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #6366F1;
        }
        .exp-period {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          color: #8892A4;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.2);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          white-space: nowrap;
        }
        .exp-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .exp-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
        }
        .bullet-arrow {
          color: #6366F1;
          font-size: 0.7rem;
          margin-top: 0.35rem;
          flex-shrink: 0;
        }
        .bullet-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #8892A4;
          line-height: 1.7;
          transition: color 0.2s;
        }
        .exp-bullet:hover .bullet-text { color: #CBD5E1; }
        @media (max-width: 640px) {
          .exp-card { padding: 2rem 1.5rem; }
          .exp-card-top { flex-direction: column; }
        }
      `}</style>

      <section className="exp-root" id="experience">
        <div className="exp-inner">
          <p className="exp-eyebrow">Where I've worked</p>
          <h2 className="exp-heading">Experience</h2>
          <p className="exp-subhead">My professional journey</p>

          <motion.div
            className="exp-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="exp-card-top">
              <div>
                <h3 className="exp-role">Software Engineer Intern</h3>
                <p className="exp-company">Gamage Recruiters (PVT) LTD</p>
              </div>
              <span className="exp-period">Mar 2025 – Sep 2025</span>
            </div>

            <ul className="exp-bullets">
              {bullets.map((b, i) => (
                <li key={i} className="exp-bullet">
                  <span className="bullet-arrow">▹</span>
                  <span className="bullet-text">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Experience;