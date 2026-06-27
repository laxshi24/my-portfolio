import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Programming Languages', skills: ['Python', 'Java', 'JavaScript', 'SQL', 'Dart', 'PHP'] },
  { category: 'AI / Machine Learning', skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Pose Estimation', 'Data Preprocessing', 'XGBoost', 'SHAP'] },
  { category: 'Frontend Development', skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Figma'] },
  { category: 'Backend Development', skills: ['Node.js', 'Express.js', 'Spring Boot', 'RESTful APIs'] },
  { category: 'Mobile Development', skills: ['Flutter', 'Firebase'] },
  { category: 'Databases', skills: ['MongoDB', 'MySQL', 'PostgreSQL'] },
  { category: 'Testing & Tools', skills: ['Cypress', 'Git/GitHub', 'Postman', 'Docker', 'Agile/Scrum'] },
];

const categoryIcons = {
  'Programming Languages': '{ }',
  'AI / Machine Learning': '◈',
  'Frontend Development': '◱',
  'Backend Development': '⬡',
  'Mobile Development': '⬜',
  'Databases': '◉',
  'Testing & Tools': '⚙',
};

const Skills = () => {
  return (
    <>
      <style>{`
        .skills-root {
          background: #F8F9FF;
          padding: 7rem 2.5rem;
        }
        .skills-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .skills-eyebrow {
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
        .skills-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6366F1;
        }
        .skills-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #0A0A0F;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .skills-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #8892A4;
          margin-bottom: 3.5rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .skills-grid { grid-template-columns: 1fr; } }
        .skill-card {
          background: #fff;
          border: 1px solid rgba(99,102,241,0.12);
          border-radius: 1.25rem;
          padding: 1.75rem;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
          box-shadow: 0 2px 16px rgba(0,0,0,0.04);
        }
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(99,102,241,0.1);
          border-color: rgba(99,102,241,0.3);
        }
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .skill-icon {
          width: 2.25rem;
          height: 2.25rem;
          background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(245,158,11,0.08));
          border-radius: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          color: #6366F1;
          font-weight: 800;
          flex-shrink: 0;
          font-family: 'Space Grotesk', sans-serif;
        }
        .skill-category {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.88rem;
          color: #0A0A0F;
          letter-spacing: -0.01em;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-tag {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.78rem;
          color: #4A5568;
          background: #F1F3F9;
          border: 1px solid transparent;
          padding: 0.35rem 0.85rem;
          border-radius: 100px;
          cursor: default;
          transition: all 0.2s;
        }
        .skill-tag:hover {
          background: rgba(99,102,241,0.08);
          border-color: rgba(99,102,241,0.3);
          color: #6366F1;
        }
      `}</style>

      <section className="skills-root" id="skills">
        <div className="skills-inner">
          <p className="skills-eyebrow">What I work with</p>
          <h2 className="skills-heading">Technical Skills</h2>
          <p className="skills-subhead">My technical proficiencies across various domains</p>

          <div className="skills-grid">
            {skillsData.map((item, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">{categoryIcons[item.category] || '◆'}</div>
                  <span className="skill-category">{item.category}</span>
                </div>
                <div className="skill-tags">
                  {item.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;