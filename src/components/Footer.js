import React from 'react';

const Footer = () => {
  const navLinks = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Research', '#research'],
    ['Projects', '#work'],
    ['Contact', '#contact'],
  ];

  const contactItems = [
    ['✉', 'laxshisiva@gmail.com'],
    ['🔗', 'linkedin.com/in/laxshika'],
    ['💻', 'github.com/laxshi24'],
    ['📍', 'Sri Lanka'],
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/laxshi24' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/laxshika/' },
    { label: 'Email', href: 'mailto:laxshisiva@gmail.com' },
  ];

  return (
    <>
      <style>{`
        .footer-root {
          background: #050508;
          border-top: 1px solid rgba(99,102,241,0.12);
        }
        .footer-top {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2.5rem 4rem;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) { .footer-top { grid-template-columns: 1fr; } }
        /* Brand */
        .footer-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 2rem;
          color: #F8F9FF;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
        }
        .footer-logo span { color: #6366F1; }
        .footer-tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.75;
          max-width: 300px;
          margin-bottom: 1.5rem;
        }
        .footer-socials {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
        }
        .footer-social-btn {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          color: #64748B;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.4rem 1rem;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .footer-social-btn:hover {
          background: #6366F1;
          color: #fff;
          border-color: #6366F1;
        }
        /* Nav col */
        .footer-col-label {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          margin-bottom: 1.25rem;
        }
        .footer-nav-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-nav-link {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.88rem;
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .footer-nav-link::before {
          content: '';
          display: block;
          width: 0;
          height: 1px;
          background: #6366F1;
          transition: width 0.2s;
          margin-top: 1px;
        }
        .footer-nav-link:hover { color: #F8F9FF; }
        .footer-nav-link:hover::before { width: 12px; }
        /* Contact col */
        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .footer-contact-icon { font-size: 0.85rem; }
        .footer-contact-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          color: #475569;
        }
        /* Bottom bar */
        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1.5rem 2.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .footer-copy {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: #1E293B;
        }
        .footer-built {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: #1E293B;
        }
        .footer-built span { color: #6366F1; }
      `}</style>

      <footer className="footer-root">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">Laxshika<span>.</span></div>
            <p className="footer-tagline">
              Software Engineer & Full Stack Developer. Building innovative, high-quality software solutions with a passion for clean code and great user experience.
            </p>
            <div className="footer-socials">
              {socialLinks.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-label">Navigation</p>
            <ul className="footer-nav-links">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="footer-nav-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-label">Contact</p>
            <div className="footer-contact-items">
              {contactItems.map(([icon, text]) => (
                <div key={text} className="footer-contact-item">
                  <span className="footer-contact-icon">{icon}</span>
                  <span className="footer-contact-text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} S. Laxshika. All rights reserved.</p>
          <p className="footer-built">Designed & built with <span>React</span> · Tailwind CSS · Framer Motion</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;