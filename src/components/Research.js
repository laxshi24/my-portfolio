import React from 'react';
import { motion } from 'framer-motion';
import researchImg from '../assets/Laxshika_3.jpeg';

const innovations = [
  {
    title: 'Computer Vision & Feature Engineering',
    body: 'Utilizes MediaPipe Pose to extract 33 skeletal landmarks per frame. These are transformed into a highly engineered 175-feature biomechanical vector (capturing joint angles, symmetry scores, and dynamic ratios) that is invariant to camera angle and body scale.',
  },
  {
    title: 'Unified XGBoost Classification',
    body: 'A custom-trained XGBoost model simultaneously classifies 20 distinct gym exercises and evaluates form quality (Correct/Wrong) across 40 classes, achieving an outstanding 99.03% overall test accuracy.',
  },
  {
    title: 'SHAP-Based Explainable AI (XAI)',
    body: 'Addresses the "black-box" AI problem by integrating SHAP TreeExplainer. It computes per-joint importance scores, generating dynamic color-coded heatmap overlays and natural language coaching cues so users understand exactly why their form was flagged.',
  },
  {
    title: 'Advanced Heuristics',
    body: 'Features an innovative Exercise Stability Lock that reduced UI prediction flickering by 82%, and a Biomechanical Metrics Engine computing precise Range of Motion (ROM), Hip Center Stability, and Repetition Tempo.',
  },
];

const Research = () => {
  return (
    <>
      <style>{`
        .res-root {
          background: #0A0A0F;
          padding: 7rem 2.5rem;
          position: relative;
        }
        .res-root::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .res-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .res-eyebrow {
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
        .res-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6366F1;
        }
        .res-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #F8F9FF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .res-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #8892A4;
          margin-bottom: 3.5rem;
        }
        .res-card {
          background: #0D0D15;
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 1.75rem;
          overflow: hidden;
        }
        .res-card-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        @media (max-width: 900px) {
          .res-card-inner { grid-template-columns: 1fr; }
          .res-img-panel { order: -1; max-height: 300px; }
        }
        .res-content {
          padding: 3rem 3.5rem;
          position: relative;
        }
        @media (max-width: 640px) { .res-content { padding: 2rem 1.75rem; } }
        .res-title-badge {
          display: inline-block;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #F59E0B;
          background: rgba(245,158,11,0.1);
          border: 1px solid rgba(245,158,11,0.25);
          padding: 0.3rem 0.9rem;
          border-radius: 100px;
          margin-bottom: 1.25rem;
        }
        .res-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: #F8F9FF;
          line-height: 1.25;
          letter-spacing: -0.025em;
          margin: 0 0 1.25rem;
        }
        .res-intro {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          color: #8892A4;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .res-innovations-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 1rem;
        }
        .res-innovations {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .innovation-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-left: 2px solid #6366F1;
          border-radius: 0 0.75rem 0.75rem 0;
          padding: 0.9rem 1.25rem;
          transition: border-left-color 0.2s, background 0.2s;
        }
        .innovation-item:hover {
          background: rgba(99,102,241,0.05);
          border-left-color: #F59E0B;
        }
        .innovation-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: #CBD5E1;
          margin-bottom: 0.35rem;
        }
        .innovation-body {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.65;
        }
        /* Image panel */
        .res-img-panel {
          position: relative;
          overflow: hidden;
          background: #0A0A0F;
          min-height: 500px;
        }
        .res-img-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          opacity: 0.75;
          transition: opacity 0.4s, transform 0.4s;
        }
        .res-card:hover .res-img-panel img { opacity: 0.9; transform: scale(1.02); }
        .res-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, #0D0D15 0%, transparent 40%);
        }
        @media (max-width: 900px) {
          .res-img-overlay { background: linear-gradient(to bottom, transparent 50%, #0D0D15 100%); }
        }
        .res-stat-pills {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) { .res-stat-pills { display: none; } }
        .res-stat-pill {
          background: rgba(10,10,15,0.85);
          border: 1px solid rgba(99,102,241,0.25);
          border-radius: 0.75rem;
          padding: 0.6rem 1rem;
          backdrop-filter: blur(12px);
          flex: 1;
          min-width: 100px;
          text-align: center;
        }
        .pill-label {
          display: block;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 0.2rem;
        }
        .pill-val {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 0.88rem;
          color: #F8F9FF;
        }
      `}</style>

      <section className="res-root" id="research">
        <div className="res-inner">
          <p className="res-eyebrow">Final year thesis</p>
          <h2 className="res-heading">Academic Research</h2>
          <p className="res-subhead">Deep analysis of my final year thesis project</p>

          <motion.div
            className="res-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="res-card-inner">
              <div className="res-content">
                <span className="res-title-badge">Final Year Thesis · 99.03% Accuracy</span>
                <h3 className="res-title">
                  AI-Driven Health Analyzer: Real-Time Physical Wellness Optimization using ML
                </h3>
                <p className="res-intro">
                  The <strong style={{ color: '#CBD5E1' }}>Well360 Fitness Module</strong> is an intelligent mobile coaching system designed to replicate the analytical capabilities of a professional fitness coach through a standard smartphone camera. It addresses the critical gap in automated biomechanical guidance by providing real-time exercise classification, form assessment, and transparent feedback.
                </p>

                <p className="res-innovations-label">Core Technological Innovations</p>
                <div className="res-innovations">
                  {innovations.map((item, i) => (
                    <div key={i} className="innovation-item">
                      <p className="innovation-title">{item.title}</p>
                      <p className="innovation-body">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="res-img-panel">
                <img src={researchImg} alt="Research Developer" />
                <div className="res-img-overlay" />
                <div className="res-stat-pills">
                  <div className="res-stat-pill">
                    <span className="pill-label">Architecture</span>
                    <span className="pill-val">Flutter & FastAPI</span>
                  </div>
                  <div className="res-stat-pill">
                    <span className="pill-label">Evaluation</span>
                    <span className="pill-val">36,000+ Frames</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Research;