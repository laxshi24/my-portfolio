import React from 'react';
import contactImg from '../assets/Laxshika_4.jpeg';

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-root {
          background: #0A0A0F;
          padding: 7rem 2.5rem;
          position: relative;
          overflow: hidden;
        }
        .contact-root::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
        }
        .contact-eyebrow {
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
        .contact-eyebrow::before {
          content: '';
          display: block;
          width: 2rem;
          height: 1px;
          background: #6366F1;
        }
        .contact-heading {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          color: #F8F9FF;
          line-height: 1.1;
          letter-spacing: -0.04em;
          margin: 0 0 0.75rem;
        }
        .contact-subhead {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #8892A4;
          margin-bottom: 3.5rem;
        }
        .contact-card {
          background: #0D0D15;
          border: 1px solid rgba(99,102,241,0.15);
          border-radius: 1.75rem;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .contact-card { grid-template-columns: 1fr; }
          .contact-img-panel { min-height: 260px; order: -1; }
        }
        /* Image panel */
        .contact-img-panel {
          position: relative;
          overflow: hidden;
          min-height: 500px;
        }
        .contact-img-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          opacity: 0.7;
          transition: opacity 0.4s, transform 0.4s;
        }
        .contact-card:hover .contact-img-panel img { opacity: 0.85; transform: scale(1.03); }
        .contact-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, #0D0D15 100%);
        }
        @media (max-width: 900px) {
          .contact-img-overlay { background: linear-gradient(to bottom, transparent 50%, #0D0D15 100%); }
        }
        /* Form panel */
        .contact-form-panel {
          padding: 3rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 640px) { .contact-form-panel { padding: 2rem 1.75rem; } }
        .contact-form-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #F8F9FF;
          margin-bottom: 0.4rem;
        }
        .contact-form-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: #8892A4;
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          padding: 0.9rem 1.25rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: #F8F9FF;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
        }
        .form-input::placeholder { color: #475569; }
        .form-input:focus {
          border-color: #6366F1;
          background: rgba(99,102,241,0.05);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
        }
        .form-textarea {
          resize: none;
          min-height: 120px;
        }
        .btn-submit {
          width: 100%;
          padding: 1rem;
          background: #6366F1;
          color: #fff;
          border: none;
          border-radius: 0.75rem;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s;
          box-shadow: 0 0 24px rgba(99,102,241,0.3);
          margin-top: 0.5rem;
        }
        .btn-submit:hover {
          background: #818CF8;
          box-shadow: 0 0 40px rgba(99,102,241,0.5);
          transform: translateY(-2px);
        }
      `}</style>

      <section className="contact-root" id="contact">
        <div className="contact-inner">
          <p className="contact-eyebrow">Get in touch</p>
          <h2 className="contact-heading">Let's Connect</h2>
          <p className="contact-subhead">Have a project in mind or want to collaborate?</p>

          <div className="contact-card">
            <div className="contact-img-panel">
              <img src={contactImg} alt="Let's Connect" />
              <div className="contact-img-overlay" />
            </div>

            <div className="contact-form-panel">
              <h3 className="contact-form-title">Send a Message</h3>
              <p className="contact-form-sub">I'll get back to you as soon as possible.</p>

              <form action="https://getform.io/f/ayvvrvmb" method="POST">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-input form-textarea"
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;