import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import food from '../assets/food.png';
import grocery from '../assets/grocery.avif';
import logistic from '../assets/project_logistic.jpg';
import docBooker from '../assets/docBooker.jpg';
import proj1 from '../assets/project1.jpg';
import fitnessApp from '../assets/fitness_app_ui_1782573989390.png';
import primeResidency from '../assets/prime_residency_ui_1782574001717.png';
import skillConnect from '../assets/skill_connect_ui_1782574011672.png';
import cropYield from '../assets/crop_yield_ui_1782574023901.png';

const VideoModal = ({ src, title, onClose }) => (
  <AnimatePresence>
    <motion.div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: 900 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, color: '#F8F9FF', fontSize: '1rem' }}>{title}</span>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
            color: '#F8F9FF', borderRadius: '0.5rem', padding: '0.4rem 1rem',
            fontFamily: 'Space Grotesk', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem',
          }}>✕ Close</button>
        </div>
        <video src={src} controls autoPlay style={{ width: '100%', borderRadius: '1rem', background: '#000', display: 'block' }} />
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ProjectCard = ({ image, videoSrc, title, description, liveLink, githubLink, featured }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && videoSrc && (
        <VideoModal src={videoSrc} title={title} onClose={() => setShowModal(false)} />
      )}

      <motion.div
        style={{
          background: '#fff',
          border: '1px solid rgba(99,102,241,0.1)',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
          boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(99,102,241,0.12)', borderColor: 'rgba(99,102,241,0.3)' }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#EEF0FF' }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
          />
          {videoSrc && (
            <button
              onClick={() => setShowModal(true)}
              style={{
                position: 'absolute', bottom: '0.75rem', right: '0.75rem',
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                background: '#6366F1', color: '#fff', border: 'none',
                borderRadius: '100px', padding: '0.4rem 1rem',
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.75rem',
                cursor: 'pointer', boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#818CF8'}
              onMouseLeave={e => e.currentTarget.style.background = '#6366F1'}
            >
              ▶ Watch Demo
            </button>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3 style={{
            fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem',
            color: '#0A0A0F', marginBottom: '0.6rem', lineHeight: 1.3,
            letterSpacing: '-0.015em',
          }}>{title}</h3>
          <p style={{
            fontFamily: 'Inter', fontSize: '0.85rem', color: '#64748B',
            lineHeight: 1.7, flexGrow: 1, marginBottom: '1.25rem',
          }}>{description}</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" style={{
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8rem',
                color: '#fff', background: '#6366F1', padding: '0.5rem 1.1rem',
                borderRadius: '0.5rem', textDecoration: 'none', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.target.style.background = '#818CF8'}
                onMouseLeave={e => e.target.style.background = '#6366F1'}
              >Live Demo ↗</a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" style={{
                fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.8rem',
                color: '#4A5568', background: '#F1F3F9', padding: '0.5rem 1.1rem',
                borderRadius: '0.5rem', textDecoration: 'none', border: '1px solid rgba(0,0,0,0.07)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.target.style.background = 'rgba(99,102,241,0.08)'; e.target.style.color = '#6366F1'; }}
                onMouseLeave={e => { e.target.style.background = '#F1F3F9'; e.target.style.color = '#4A5568'; }}
              >GitHub ↗</a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <style>{`
        .proj-root {
          background: #F8F9FF;
          padding: 7rem 2.5rem;
        }
        .proj-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .proj-eyebrow {
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
        .proj-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6366F1;
        }
        .proj-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #0A0A0F;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .proj-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #8892A4;
          margin-bottom: 3.5rem;
        }
        .proj-subhead span {
          color: #6366F1;
          font-weight: 600;
        }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .proj-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="proj-root" id="work">
        <div className="proj-inner">
          <p className="proj-eyebrow">What I've built</p>
          <h2 className="proj-heading">Projects</h2>
          <p className="proj-subhead">
            A showcase of my recent work.{' '}
            <span>Projects with ▶ Watch Demo have a live video — click to play!</span>
          </p>

          <div className="proj-grid">
            <ProjectCard image={fitnessApp} title="AI Fitness Workout Optimisation System" description="Final Year Research Project — Intelligent mobile coaching system using MediaPipe Pose, XGBoost (99.03% accuracy), and SHAP-based Explainable AI for real-time form correction. Built with Python, Flutter, and FastAPI." />
            <ProjectCard image={docBooker} videoSrc="/docBooker.mp4" title="DocBooker – Doctor Appointment Platform" description="Full-stack MERN web application enabling patients to book medical appointments online, featuring 3 role-based dashboards (Patient, Doctor, Admin) and a dynamic real-time scheduling system." />
            <ProjectCard image={primeResidency} title="PrimeResidency Application" description="Full-stack MERN property booking web application allowing users to browse, search, filter, and book rooms/apartments with role-based dashboards and complete CRUD operations." />
            <ProjectCard image={skillConnect} title="Skill Connect – Social Platform" description="Skill-sharing social platform developed using Spring Boot, React, and MongoDB. Features user authentication, a news feed, and interactive social features like likes, comments, and notifications." />
            <ProjectCard image={logistic} videoSrc="/logistic.mp4" title="Online Logistics Management System" description="MERN stack web application to manage end-to-end shipment and delivery workflows, including order creation, tracking, status updates, and delivery confirmation with real-time status indicators." />
            <ProjectCard image={cropYield} title="Crop Yield Prediction" description="Implemented four deep learning/tabular ML models (MLP, DCN, TabNet, TabResNet) for crop yield prediction using Python to identify the best-performing architecture for agricultural datasets." />
            <ProjectCard image={food} title="Online Recipe Management System" description="A web application allowing users to create, manage, and share their favorite recipes. Features secure authentication, categorization, and interaction via likes and comments." />
            <ProjectCard image={grocery} title="Online Grocery Ordering System" description="Java and MySQL based ordering platform with product catalogue, cart, inventory management, and order processing features." />
            <ProjectCard image={proj1} videoSrc="/gymfe.mp4" title="Fit Club – Fitness Landing Page" description="A modern, fully responsive marketing site optimised for speed and cross-browser compatibility. Built using React and Tailwind CSS." liveLink="https://gymfrontendapp.vercel.app/" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;