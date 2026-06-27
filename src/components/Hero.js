import React from 'react';
import Laxshika from '../assets/Laxshika_1.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap');

        .hero-root {
          min-height: 100vh;
          background: #0A0A0F;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 7rem 2.5rem 4rem;
          id: home;
        }
        .hero-root::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-root::after {
          content: '';
          position: absolute;
          bottom: -10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
          .hero-text { order: 2; align-items: center; }
          .hero-image-wrap { order: 1; justify-content: center; }
          .hero-ctas { justify-content: center !important; }
          .hero-badge { align-self: center !important; }
        }
        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-badge {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(99,102,241,0.3);
          color: #818CF8;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.78rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          margin-bottom: 1.75rem;
        }
        .hero-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366F1;
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        .hero-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 6vw, 5rem);
          color: #F8F9FF;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 0 0 0.25rem;
        }
        .hero-name span { color: #6366F1; }
        .hero-typewriter {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          color: #F59E0B;
          margin-bottom: 1.5rem;
          min-height: 2.4rem;
        }
        .hero-desc {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          color: #8892A4;
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 2.5rem;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        .btn-primary {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: #fff;
          background: #6366F1;
          padding: 0.85rem 2rem;
          border-radius: 0.6rem;
          text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 0 24px rgba(99,102,241,0.35);
          letter-spacing: 0.01em;
        }
        .btn-primary:hover {
          background: #818CF8;
          box-shadow: 0 0 36px rgba(99,102,241,0.55);
          transform: translateY(-2px);
        }
        .btn-outline {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: #F8F9FF;
          background: transparent;
          padding: 0.85rem 2rem;
          border-radius: 0.6rem;
          text-decoration: none;
          border: 1px solid rgba(248,249,255,0.2);
          transition: all 0.25s;
        }
        .btn-outline:hover {
          border-color: #6366F1;
          color: #818CF8;
          background: rgba(99,102,241,0.08);
          transform: translateY(-2px);
        }
        /* Image */
        .hero-image-wrap {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .hero-img-frame {
          position: relative;
          width: clamp(260px, 35vw, 420px);
          height: clamp(260px, 35vw, 420px);
        }
        .hero-img-glow {
          position: absolute;
          inset: -2px;
          border-radius: 2rem;
          background: linear-gradient(135deg, #6366F1, #F59E0B);
          opacity: 0.6;
          filter: blur(1px);
        }
        .hero-img-inner {
          position: absolute;
          inset: 2px;
          border-radius: calc(2rem - 2px);
          overflow: hidden;
          background: #0A0A0F;
        }
        .hero-img-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .hero-img-frame:hover .hero-img-inner img { transform: scale(1.04); }
        /* Corner accents */
        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #6366F1;
          border-style: solid;
          z-index: 2;
        }
        .corner-tl { top: -6px; left: -6px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
        .corner-tr { top: -6px; right: -6px; border-width: 2px 2px 0 0; border-radius: 0 4px 0 0; }
        .corner-bl { bottom: -6px; left: -6px; border-width: 0 0 2px 2px; border-radius: 0 0 0 4px; }
        .corner-br { bottom: -6px; right: -6px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }
        /* Floating tag */
        .hero-float-tag {
          position: absolute;
          bottom: -1rem;
          left: -2.5rem;
          background: #0D0D15;
          border: 1px solid rgba(99,102,241,0.3);
          border-radius: 0.75rem;
          padding: 0.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        }
        .hero-float-tag .tag-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.2rem;
          color: #6366F1;
          line-height: 1;
        }
        .hero-float-tag .tag-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          color: #8892A4;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        @media (max-width: 480px) {
          .hero-float-tag { display: none; }
        }
      `}</style>

      <section className="hero-root" id="home">
        <div className="hero-inner">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Available for Opportunities</span>

            <h1 className="hero-name">
              Hi, I'm<br />
              <span>Laxshika</span>
            </h1>

            <div className="hero-typewriter">
              <TypeAnimation
                sequence={[
                  'Software Engineer', 2000,
                  'Full Stack Developer', 2000,
                  'MERN Stack Specialist', 2000,
                  'AI / ML Researcher', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="hero-desc">
              A passionate Software Engineer with a strong foundation in full-stack web development. Dedicated to building innovative, high-quality software solutions and scalable applications.
            </p>

            <div className="hero-ctas">
              <a href="#work" className="btn-primary">View Projects</a>
              <a href="/Laxshika_Cv.pdf" download="Laxshika_CV.pdf" className="btn-outline">Download CV</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="hero-img-frame">
              <div className="hero-img-glow" />
              <div className="hero-img-inner">
                <img src={Laxshika} alt="Laxshika" />
              </div>
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
              <div className="hero-float-tag">
                <span className="tag-label">10+</span>
                <span className="tag-sub">Projects Built</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;